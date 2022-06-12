import React, { Dispatch, memo, SetStateAction } from 'react';

// Design
import { Flex, Stack, Image, Heading } from '@chakra-ui/react';
import stackedWave from '../../assets/Thumbnails/stackedWaves.svg';
import smoothStage from '../../assets/Thumbnails/smoothStage.svg';
import marker from '../../assets/Thumbnails/marker.svg';
import bubble from '../../assets/Thumbnails/bubble.svg';
import isolines from '../../assets/Thumbnails/isolines.png';
import Logo from '../../assets/Logo.svg';
import GitHubButton from 'react-github-btn';

// Utils
import Thumbnail from './Thumbnail';
import { IDesignModes } from '../../types/designModes';
import { GetDesignTypesQuery } from '../../graphql/generated';

export interface ITemplateMenuProps {
  setDesign: Dispatch<SetStateAction<IDesignModes>>;
  activeDesign: number;
  designTypes: GetDesignTypesQuery | null;
}

const TemplateMenu: React.FunctionComponent<ITemplateMenuProps> = memo(
  ({ activeDesign, setDesign, designTypes }) => {
    return (
      <>
        <Flex
          minW="180px"
          maxW="180px"
          height="100vh"
          bgColor="#1c1f27"
          direction="column"
          boxShadow="dark-lg"
          p="0"
          h="100%"
          zIndex={2}
        >
          <Flex
            minW="180px"
            maxW="180px"
            height="70px"
            zIndex={2}
            bgColor="#262a33"
            justifyContent="space-around"
            alignItems="center"
          >
            <Image src={Logo} h="50%"></Image>
          </Flex>
          <Stack
            spacing={0}
            scrollBehavior="smooth"
            overflow="scroll"
            flexGrow={1}
            sx={{
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {designTypes ? (
              designTypes.designTypes.map((type) => (
                <Thumbnail
                  key={type.id}
                  isActive={activeDesign === type.id}
                  setDesign={setDesign}
                  image={
                    type.name === 'waves'
                      ? stackedWave
                      : type.name === 'bubble'
                      ? bubble
                      : type.name === 'corners'
                      ? smoothStage
                      : type.name === 'marker'
                      ? marker
                      : isolines // here put isolines placeholder
                  }
                  type={type}
                ></Thumbnail>
              ))
            ) : (
              <></>
            )}
          </Stack>

          <Flex
            minW="180px"
            maxW="180px"
            height="70px"
            minH="70px"
            zIndex={2}
            bgColor="#262a33"
            justifyContent="space-around"
            alignItems="center"
            direction="column"
          >
            <Heading lineHeight="1em" fontWeight="lighter" fontSize="2xl" fontFamily="Karla, sans-serif;">
              HEAZY.
            </Heading>
            {/* <Icon as={UilLinkedin} boxSize="8" cursor="pointer"></Icon> */}
            <GitHubButton
              href="https://github.com/MaximBuz/heazy-svg-creator"
              data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;"
              data-size="small"
              data-show-count="true"
              aria-label="Star MaximBuz/heazy-svg-creator on GitHub"
            >
              Star
            </GitHubButton>
          </Flex>
        </Flex>
      </>
    );
  }
);

export default TemplateMenu;
