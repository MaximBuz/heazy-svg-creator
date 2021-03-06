import { Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { useQueryClient } from 'react-query';
import { useDesign } from '../../contexts/Design';
import { useUserSpace } from '../../contexts/UserSpace';
import { Design, useUpdateDesignMutation } from '../../graphql/generated';
import { headers, endpoint } from '../../utils/apiConfig';

// Images
import placeholderWaves from '../../assets/Thumbnails/placeholderWaves.png';
import placeholderBubble from '../../assets/Thumbnails/placeholderBubble.png';
import placeholderCorners from '../../assets/Thumbnails/placeholderCorners.png';
import placeholderMarker from '../../assets/Thumbnails/placeholderMarker.png';
import placeholderIsolines from '../../assets/Thumbnails/placeholderIsolines.png';

// Components
import OwnThumbnail from './OwnThumbnail';
import { useAuth } from '../../contexts/Auth';

export interface ITemplatesProps {
  search: string;
  designs: Design[];
}

const Templates: React.FunctionComponent<ITemplatesProps> = ({ search, designs }) => {
  // Closing UserSpace
  const { onClose } = useUserSpace();

  // Setting template
  const { copyTemplateParams } = useDesign();

  // Auth
  const { idToken } = useAuth();

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
    <Stack spacing="5">
      {designs
        .filter((design) => {
          if (search && !design.name.toLowerCase().includes(search.toLowerCase())) return false;
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
                ? placeholderMarker // here put isolines placeholder
                : placeholderMarker // here put flare placeholder
            }
            caption={design.name}
          ></OwnThumbnail>
        ))}
    </Stack>
  );
};

export default Templates;
