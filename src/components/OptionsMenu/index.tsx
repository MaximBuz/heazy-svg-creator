import React, { Dispatch, ReactNode, Ref, SetStateAction, useRef } from 'react';

// Design
import { Flex, Stack, Heading, Divider, useDisclosure, useToast } from '@chakra-ui/react';

// Utils
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { contentWrapperStyles, dimensionsButtonStyles, wrapperStyles } from './Styles';
import DimensionsDrawer from './DimensionsDrawer';
import DownloadSection from './DownloadSection';

export interface IOptionsMenuProps {
  svgRef: Ref<SVGAElement | null>;
  width: number;
  height: number;
  widthRatio: number;
  heightRatio: number;
  handleWidthChange: Dispatch<SetStateAction<number>>;
  handleHeightChange: Dispatch<SetStateAction<number>>;
  children: ReactNode;
}

const OptionsMenu: React.FunctionComponent<IOptionsMenuProps> = ({
  svgRef,
  width,
  height,
  widthRatio,
  heightRatio,
  handleWidthChange,
  handleHeightChange,
  children,
}) => {
  /* ---------- NOTIFICATIONS ---------- */
  const toast = useToast();

  /* ---------- DIMENSIONS DRAWER ---------- */
  const {
    isOpen: isDimensionDrawerOpen,
    onOpen: onDimensionDrawerOpen,
    onClose: onDimensionDrawerClose,
  } = useDisclosure();
  const dimensionDrawerButtonRef = useRef();

  return (
    <Flex {...wrapperStyles}>
      <Stack {...contentWrapperStyles}>
        {/* --------- DIMENSIONS BUTTON --------- */}
        <Heading as="h3" size="xs" textTransform="uppercase">
          Dimensions
        </Heading>
        <Flex
          as={motion.button}
          ref={dimensionDrawerButtonRef}
          onClick={onDimensionDrawerOpen}
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
      <DownloadSection svgRef={svgRef} toast={toast} />

      {/* --------- DIMENSIONS DRAWER --------- */}
      <DimensionsDrawer
        isDimensionDrawerOpen={isDimensionDrawerOpen}
        onDimensionDrawerClose={onDimensionDrawerClose}
        dimensionDrawerButtonRef={dimensionDrawerButtonRef}
        handleHeightChange={handleHeightChange}
        handleWidthChange={handleWidthChange}
        height={height}
        width={width}
      />
    </Flex>
  );
};

export default OptionsMenu;
