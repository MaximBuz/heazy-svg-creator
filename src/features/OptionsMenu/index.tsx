import React, { useRef } from 'react';

// Design
import { Flex, Stack, Heading, Divider, useDisclosure } from '@chakra-ui/react';

// Utils
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  contentWrapperStyles,
  dimensionsButtonStyles,
  wrapperStyles,
} from './Styles';
import DimensionsDrawer from './DimensionsDrawer';
import DownloadSection from './DownloadSection';
import { useDesign } from '../../contexts/DesignContext';
import { IOptionsMenuProps } from './types/OptionsMenu.types';

const OptionsMenu: React.FunctionComponent<IOptionsMenuProps> = ({
  svgRef,
  children,
}) => {
  const { setWidth, setHeight, canvasDimensions } = useDesign();

  /* ---------- PROPS ---------- */
  const { width, widthRatio, height, heightRatio } = canvasDimensions;

  /* ---------- DIMENSIONS DRAWER ---------- */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerButtonRef = useRef<HTMLDivElement | null>();

  return (
    <Flex {...wrapperStyles}>
      <Stack {...contentWrapperStyles}>
        {/* --------- DIMENSIONS BUTTON --------- */}
        <Heading as="h3" size="xs" textTransform="uppercase">
          Dimensions
        </Heading>
        <Flex
          as={motion.button}
          ref={drawerButtonRef}
          onClick={onOpen}
          {...dimensionsButtonStyles}
        >
          <Flex direction="column" textAlign="left">
            <Heading fontSize="sm" fontWeight="bolder">
              {`${widthRatio}:${heightRatio}`}
            </Heading>

            <Heading fontSize="sm" fontWeight="light" opacity={0.7}>
              {`${Math.floor(width)} x ${Math.floor(height)}`}
            </Heading>
          </Flex>
          <ChevronRightIcon boxSize={6} />
        </Flex>
        <Divider></Divider>
        {children} {/* --------- DESIGN SPECIFIC OPTIONS --------- */}
      </Stack>

      {/* --------- DOWNLOAD SECTION AT BOTTOM --------- */}
      <DownloadSection svgRef={svgRef} />

      {/* --------- DIMENSIONS DRAWER --------- */}
      <DimensionsDrawer
        isOpen={isOpen}
        onClose={onClose}
        drawerButtonRef={drawerButtonRef}
        setHeight={setHeight}
        setWidth={setWidth}
        height={height}
        width={width}
      />
    </Flex>
  );
};

export default OptionsMenu;
