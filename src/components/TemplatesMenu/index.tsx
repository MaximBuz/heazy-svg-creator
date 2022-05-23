import React, { Dispatch, SetStateAction } from 'react';

// Design
import { Flex, Stack, Image, Heading } from '@chakra-ui/react';
import stackedWave from '../../Assets/Thumbnails/stackedWaves.svg';
import smoothStage from '../../Assets/Thumbnails/smoothStage.svg';
import marker from '../../Assets/Thumbnails/marker.svg';
import bubble from '../../Assets/Thumbnails/bubble.svg';
import Logo from '../../Assets/Logo.svg';
import GitHubButton from 'react-github-btn';

// Utils
import Thumbnail from './Thumbnail';
import { IDesignModes } from '../../Types/designModes';

export interface ILeftMenuProps {
  setDesign: Dispatch<SetStateAction<IDesignModes>>;
  activeDesign: string;
}

const LeftMenu: React.FunctionComponent<ILeftMenuProps> = ({ activeDesign, setDesign }) => {
  return (
    <Flex
      minW="180px"
      maxW="180px"
      height="100vh"
      bgColor="#1c1f27"
      direction="column"
      boxShadow="dark-lg"
      p="0"
      h="100%"
      zIndex={20}
    >
      <Flex
        minW="180px"
        maxW="180px"
        height="70px"
        zIndex={20}
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
        <Thumbnail
          isActive={activeDesign === 'waves'}
          setDesign={setDesign}
          image={stackedWave}
          caption="waves"
        ></Thumbnail>
        <Thumbnail
          isActive={activeDesign === 'bubble'}
          setDesign={setDesign}
          image={bubble}
          caption="bubble"
        ></Thumbnail>
        <Thumbnail
          isActive={activeDesign === 'corners'}
          setDesign={setDesign}
          image={smoothStage}
          caption="corners"
        ></Thumbnail>
        <Thumbnail
          isActive={activeDesign === 'marker'}
          setDesign={setDesign}
          image={marker}
          caption="marker"
        ></Thumbnail>
      </Stack>

      <Flex
        minW="180px"
        maxW="180px"
        height="70px"
        minH="70px"
        zIndex={20}
        bgColor="#262a33"
        justifyContent="space-around"
        alignItems="center"
        direction='column'
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
  );
};

export default LeftMenu;
