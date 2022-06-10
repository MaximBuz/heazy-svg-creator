import { Stack } from '@chakra-ui/react';
import React from 'react';
import { useQueryClient } from 'react-query';
import { Design, useCreateNewDesignMutation, useGetPublicDesignsQuery } from '../../graphql/generated';
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
  const { data, isSuccess, isError, isLoading } = useGetPublicDesignsQuery({
    endpoint,
    fetchParams: { headers: headers(idToken) },
  });

  // Mutations
  const queryClient = useQueryClient();
  const mutation = useCreateNewDesignMutation(
    { endpoint, fetchParams: { headers: headers(idToken) } },
    { onSuccess: () => queryClient.invalidateQueries(['getUserByFirebaseId']) }
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
          <ExploreThumbnail mutation={mutation} key={design.id} design={design as Design}></ExploreThumbnail>
        ))}
    </Stack>
  );
};

export default Explore;
