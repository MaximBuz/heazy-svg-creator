import {
  AccordionPanel,
  Button,
  Flex,
  HStack,
  Icon,
  Select,
  Stack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import {
  Design,
  useCreateNewDesignMutation,
  useGetPublicDesignsQuery,
  useIncrementTimesCopiedMutation,
} from '../../graphql/generated';
import { headers, endpoint } from '../../utils/apiConfig';

// Components
import { useAuth } from '../../contexts/AuthContext';
import ExploreThumbnail from './ExploreThumbnail';

import LoadingPlaceholder from '../../components/LoadingPlaceholder';
import ErrorPlaceholder from '../../components/ErrorPlaceholder';
import { UpDownIcon } from '@chakra-ui/icons';
import { useDesign } from '../../contexts/DesignContext';
import { RaceBy } from '@uiball/loaders';

const Explore: React.FunctionComponent = () => {
  // Auth
  const { idToken } = useAuth();

  // Fetching Designs
  const { designTypes } = useDesign();
  const [cursor, setCursor] = useState<number>();
  const [sort, setSort] = useState<string>('timesCopied');
  const [filterType, setFilterType] = useState<number>();
  const { data, isSuccess, isError, isLoading, refetch, isRefetching } =
    useGetPublicDesignsQuery(
      {
        endpoint,
        fetchParams: { headers: headers(idToken) },
      },
      { cursor, sortBy: sort, type: filterType },
      {
        onSuccess: () => setCursor(data?.designs[data?.designs.length - 1]?.id),
      }
    );
  useEffect(() => {
    refetch().then(() => setCursor(undefined));
  }, [sort, filterType]);

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
        setCursor(undefined);
      },
    }
  );

  if (isLoading) {
    return (
      <AccordionPanel px="1em" py="2em">
        <LoadingPlaceholder size={80} speed={1} color="#363E4A" />
      </AccordionPanel>
    );
  }

  if (isError) {
    return <ErrorPlaceholder />;
  }

  return (
    <AccordionPanel pl="1em" pr="1em">
      <Flex alignItems="center" justifyContent="center" h="5px">
        {isRefetching && (
          <RaceBy size={150} lineWeight={5} speed={1} color="grey" />
        )}
      </Flex>
      <HStack mb="1em" mt="0.5em" dir="row" align="center" justify="center">
        <Select
          onChange={(e) => setSort(e.target.value)}
          cursor="pointer"
          icon={<UpDownIcon opacity={0.5} />}
          placeholder="Sort"
        >
          <option value="timesCopied">Most Popular</option>
          <option value="createdAt">Most recent</option>
        </Select>
        <Select
          onChange={(e) => setFilterType(parseInt(e.target.value))}
          cursor="pointer"
          icon={
            <Icon
              cursor="pointer"
              viewBox="0 0 24 24"
              fill="white"
              transition="0.3s"
              opacity={0.5}
              _hover={{ opacity: 0.8 }}
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M7,6H6V3A1,1,0,0,0,4,3V6H3A1,1,0,0,0,3,8H7A1,1,0,0,0,7,6ZM5,10a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0V11A1,1,0,0,0,5,10Zm7,8a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V19A1,1,0,0,0,12,18Zm9-8H20V3a1,1,0,0,0-2,0v7H17a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-2,4a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V15A1,1,0,0,0,19,14Zm-5,0H13V3a1,1,0,0,0-2,0V14H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z"
              />
            </Icon>
          }
          placeholder="Filter"
        >
          {designTypes?.map((design) => (
            <option key={design.id} value={design.id}>
              {design.name}
            </option>
          ))}
        </Select>
      </HStack>
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
    </AccordionPanel>
  );
};

export default Explore;
