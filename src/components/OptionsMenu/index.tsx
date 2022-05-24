import React, { Dispatch, ReactNode, Ref, SetStateAction, useRef } from 'react';

// Design
import { Flex, Stack, Heading, Divider, useDisclosure, useToast } from '@chakra-ui/react';

// Utils
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { contentWrapperStyles, dimensionsButtonStyles, wrapperStyles } from './Styles';
import DimensionsDrawer from './DimensionsDrawer';
import DownloadSection from './DownloadSection';
import { ICanvasDimensions } from '../Designs/Canvas/Types/canvasDimensions';

export interface IOptionsMenuProps {
  svgRef: Ref<SVGAElement | null>;
  dimensions: ICanvasDimensions;
  handleWidthChange: Dispatch<SetStateAction<number>>;
  handleHeightChange: Dispatch<SetStateAction<number>>;
  children: ReactNode;
}

const OptionsMenu: React.FunctionComponent<IOptionsMenuProps> = (props) => {
  /* ---------- PROPS ---------- */
  const { svgRef, children, dimensions } = props;
  const { width, widthRatio, height, heightRatio } = dimensions;
  const { handleWidthChange, handleHeightChange } = props;

  /* ---------- NOTIFICATIONS ---------- */
  const toast = useToast();

  /* ---------- DIMENSIONS DRAWER ---------- */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerButtonRef = useRef();

  return (
    <Flex {...wrapperStyles}>
      <Stack {...contentWrapperStyles}>
        {/* --------- DIMENSIONS BUTTON --------- */}
        <Heading as="h3" size="xs" textTransform="uppercase">
          Dimensions
        </Heading>
        <Flex as={motion.button} ref={drawerButtonRef} onClick={onOpen} {...dimensionsButtonStyles}>
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
        isOpen={isOpen}
        onClose={onClose}
        drawerButtonRef={drawerButtonRef}
        handleHeightChange={handleHeightChange}
        handleWidthChange={handleWidthChange}
        height={height}
        width={width}
      />
    </Flex>
  );
};

export default OptionsMenu;
