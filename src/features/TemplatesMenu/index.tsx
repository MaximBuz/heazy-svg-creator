import React, { Dispatch, memo, SetStateAction } from 'react';

// Design
import { Flex, Stack, Image, Text, Link } from '@chakra-ui/react';
import stackedWave from '../../assets/Thumbnails/stackedWaves.svg';
import smoothStage from '../../assets/Thumbnails/smoothStage.svg';
import marker from '../../assets/Thumbnails/marker.svg';
import bubble from '../../assets/Thumbnails/bubble.svg';
import isolines from '../../assets/Thumbnails/isolines.png';
import flare from '../../assets/Thumbnails/flare.png';
import Logo from '../../assets/Logo.svg';
import GitHubButton from 'react-github-btn';

// Utils
import Thumbnail from './Thumbnail';
import { IDesignMode } from '../../contexts/types/DesignContext.types';

export interface ITemplateMenuProps {
  setDesign: Dispatch<SetStateAction<IDesignMode>>;
  activeDesign: IDesignMode['name'];
  designTypes: IDesignMode[] | null;
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
              designTypes.map((type) => (
                <Thumbnail
                  key={type.id}
                  isActive={activeDesign === type.name}
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
                      : type.name === 'isolines'
                      ? isolines
                      : flare
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
            p="3"
          >
            {/* <Icon as={UilLinkedin} boxSize="8" cursor="pointer"></Icon> */}
            <GitHubButton
              href="https://github.com/MaximBuz/heazy-svg-creator"
              data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;"
              data-size="large"
              data-show-count="true"
              aria-label="Star MaximBuz/heazy-svg-creator on GitHub"
            >
              Star
            </GitHubButton>
            <Flex mt="-1.5" gap="5px" alignItems="center">
              <Link
                _hover={{ opacity: 1 }}
                opacity={0.5}
                fontSize="xs"
                href="https://heazy.studio/privacy"
              >
                Privacy
              </Link>
              <Text opacity={0.5}>|</Text>
              <Link
                _hover={{ opacity: 1 }}
                opacity={0.5}
                fontSize="xs"
                href="https://www.buymeacoffee.com/mbuzmaxim3"
              >
                Buy me a coffee
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  }
);

export default TemplateMenu;
