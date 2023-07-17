import { Flex, Heading, Stack, HStack, Input } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useDesign } from '../../contexts/DesignContext';
import { useUserSpace } from '../../contexts/UserSpaceContext';
import { Design, useUpdateDesignMutation } from '../../graphql/generated';
import { headers, endpoint } from '../../utils/apiConfig';

// Images
import placeholderWaves from '../../assets/Thumbnails/placeholderWaves.png';
import placeholderBubble from '../../assets/Thumbnails/placeholderBubble.png';
import placeholderCorners from '../../assets/Thumbnails/placeholderCorners.png';
import placeholderMarker from '../../assets/Thumbnails/placeholderMarker.png';

// Components
import OwnThumbnail from './OwnThumbnail';
import { useAuth } from '../../contexts/AuthContext';
import { RaceBy } from '@uiball/loaders';

export interface ITemplatesProps {
  designs: Design[];
}

const Templates: React.FunctionComponent<ITemplatesProps> = ({ designs }) => {
  // Closing UserSpace
  const { onClose } = useUserSpace();

  // Setting template
  const { copyTemplateParams } = useDesign();

  // Auth
  const { idToken } = useAuth();

  // Filter
  const [search, setSearch] = useState<string>('');

  // Mutations
  const queryClient = useQueryClient();
  const designMutation = useUpdateDesignMutation(
    { endpoint, fetchParams: { headers: headers(idToken) } },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['getUserByFirebaseId']);
        queryClient.invalidateQueries(['getPublicDesigns']);
      },
    }
  );

  const isFetching = useMemo(() => {
    return (
      queryClient.getQueryState('getUserByFirebaseId')?.isFetching ||
      designMutation.isLoading
    );
  }, [
    queryClient.getQueryState('getUserByFirebaseId'),
    designMutation.isLoading,
  ]);

  if (designs.length === 0)
    return (
      <Flex direction="column" h="100px" mt="1em" justifyContent="center">
        <Heading as="h4" size="sm" fontWeight={800}>
          This looks empty{' '}
        </Heading>
        <Heading as="h5" size="sm" fontWeight={300}>
          Try to save a template first!
        </Heading>
      </Flex>
    );

  return (
    <>
      <Flex alignItems="center" justifyContent="center" h="5px" mb="0.5em">
        {isFetching && (
          <RaceBy size={150} lineWeight={5} speed={1} color="grey" />
        )}
      </Flex>
      <HStack mb="1em" dir="row" align="center" justify="center">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </HStack>
      <Stack spacing="5">
        {designs
          .filter((design) => {
            if (
              search &&
              !design.name.toLowerCase().includes(search.toLowerCase())
            )
              return false;
            else return true;
          })
          .map((design) => (
            <OwnThumbnail
              key={design.id}
              id={design.id}
              set={() => {
                copyTemplateParams(design as Design);
                onClose();
              }}
              mutation={designMutation}
              isPublic={design.public}
              copiedFrom={design?.copiedFrom?.userName}
              timesCopied={design.timesCopied}
              imageSrc={
                design.thumbnailUrl !== 'null'
                  ? design.thumbnailUrl
                  : design.type.name === 'waves'
                  ? placeholderWaves
                  : design.type.name === 'bubble'
                  ? placeholderBubble
                  : design.type.name === 'corners'
                  ? placeholderCorners
                  : design.type.name === 'markers'
                  ? placeholderMarker
                  : design.type.name === 'isolines'
                  ? placeholderMarker
                  : placeholderMarker
              }
              caption={design.name}
            ></OwnThumbnail>
          ))}
      </Stack>
    </>
  );
};

export default Templates;
