import { Flex, Circle, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { useUserSpace } from '../../contexts/UserSpace';
import { ICanvasControlsProps } from '../../types/canvasControlsProps';

import DiceIcon from './DiceIcon';
import SaveButton from './SaveButton';

const CanvasControls: React.FunctionComponent<ICanvasControlsProps> = ({
  seed,
  setSeed,
  setZoom,
  svgRef,
}) => {
  const CircleStyles = {
    maxW: '80px',
    maxH: '80px',
    as: motion.button,
    justifyContent: 'center',
    alignItems: 'center',
    bgColor: '#313640',
    p: '2',
    centerContent: true,
    borderColor: '#141820',
    borderWidth: '5px',
    whileHover: { scale: 1.1, rotate: -10 },
    whileTap: { scale: 0.9, rotate: 10 },
  };
  const { isOpen: userSpaceIsOpen, onClose: closeUserSpace } = useUserSpace();
  return (
    <Flex
      position="absolute"
      direction="column"
      gap="2px"
      bottom="10px"
      right="335px"
      justifyContent="center"
      alignItems="flex-end"
    >
      <SaveButton CircleStyles={CircleStyles} svgRef={svgRef} />

      {/* ZOOM IN  */}
      <Circle
        {...CircleStyles}
        onClick={() => {
          userSpaceIsOpen && closeUserSpace();
          setZoom((zoom) => zoom + 0.1);
        }}
      >
        <Icon boxSize="5" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M15,10H12V7a1,1,0,0,0-2,0v3H7a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V12h3a1,1,0,0,0,0-2Zm6.71,10.29L18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
          />
        </Icon>
      </Circle>

      {/* ZOOM OUT  */}
      <Circle
        {...CircleStyles}
        onClick={() => {
          userSpaceIsOpen && closeUserSpace();
          setZoom((zoom) => zoom - 0.1);
        }}
      >
        <Icon boxSize="5" viewBox="0 0 24 24">
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Zm4-8H7a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"
          />
        </Icon>
      </Circle>
      {/* randomize dice */}
      <Circle
        {...CircleStyles}
        p="2.5"
        onClick={() => {
          userSpaceIsOpen && closeUserSpace();
          setSeed(seed + 1);
        }}
        borderWidth="5px"
        whileTap={{ scale: 0.9, rotate: (Math.random() - 0.5) * 360 * 1.5 }}
      >
        <DiceIcon />
      </Circle>
    </Flex>
  );
};

export default CanvasControls;
