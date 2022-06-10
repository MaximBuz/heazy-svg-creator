import { Button, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import {
  Design,
  useCreateNewDesignMutation,
  useGetPublicDesignsQuery,
  useIncrementTimesCopiedMutation,
} from '../../graphql/generated';
import { headers, endpoint } from '../../utils/apiConfig';

// Components
import { useAuth } from '../../contexts/Auth';
import ExploreThumbnail from './ExploreThumbnail';

import QueryLoading from '../../components/queryLoading';
import QueryError from '../../components/queryError';

const Explore: React.FunctionComponent = () => {
  // Auth
  const { idToken } = useAuth();

  // Designs
  const [cursor, setCursor] = useState<number>();
  const { data, isSuccess, isError, isLoading, refetch } = useGetPublicDesignsQuery(
    {
      endpoint,
      fetchParams: { headers: headers(idToken) },
    },
    { cursor },
    { onSuccess: () => setCursor(data?.designs[data?.designs.length - 1]?.id) }
  );

  // Mutations
  const queryClient = useQueryClient();
  const copyTemplateMutation = useCreateNewDesignMutation(
    { endpoint, fetchParams: { headers: headers(idToken) } },
    { onSuccess: () => queryClient.invalidateQueries(['getUserByFirebaseId']) }
  );
  const incrementMutation = useIncrementTimesCopiedMutation(
    {
      endpoint,
      fetchParams: { headers: headers(idToken) },
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['getUserByFirebaseId']);
        queryClient.invalidateQueries(['getPublicDesigns']);
      },
    }
  );

  if (isLoading) {
    return <QueryLoading size={80} speed={1} color="#363E4A" />;
  }

  if (isError) {
    return <QueryError />;
  }

  return (
    <Stack spacing="5">
      {isSuccess &&
        data &&
        data.designs.map((design) => (
          <ExploreThumbnail
            copyTemplate={copyTemplateMutation}
            increment={incrementMutation}
            key={design.id}
            design={design as Design}
          ></ExploreThumbnail>
        ))}
      <Button onClick={() => refetch()}>Show More</Button>
    </Stack>
  );
};

export default Explore;