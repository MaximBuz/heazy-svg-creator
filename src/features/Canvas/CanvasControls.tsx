import { Flex, Circle, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { Dispatch, Ref, SetStateAction } from 'react';
import { useAuth } from '../../contexts/Auth';
import { useDesign } from '../../contexts/Design';
import { useUserSpace } from '../../contexts/UserSpace';
import DiceIcon from './DiceIcon';

export interface ICanvasControlsProps {
  seed: number;
  setSeed: Dispatch<SetStateAction<number>>;
  setZoom: Dispatch<SetStateAction<number>>;
  svgRef: Ref<SVGAElement | null>;
}

const CanvasControls: React.FunctionComponent<ICanvasControlsProps> = ({
  seed,
  setSeed,
  setZoom,
  svgRef,
}) => {
  const { currentUser } = useAuth();
  const { onOpen } = useUserSpace();
  const { saveTemplate, design, waveState, bubbleState, cornerState, markerState } = useDesign();

  function handleSave() {
    if (currentUser) {
      let optionParameters;
      if (design === 'waves') optionParameters = waveState;
      if (design === 'bubble') optionParameters = bubbleState;
      if (design === 'corners') optionParameters = cornerState;
      if (design === 'marker') optionParameters = markerState;

      saveTemplate(optionParameters, 'test', currentUser.uid, 1, svgRef);
    }
    onOpen();
  }

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
      {/* Save Button  */}
      <Circle
        maxW="80px"
        maxH="80px"
        as={motion.button}
        justifyContent="center"
        alignItems="center"
        bgColor="#313640"
        p="2"
        borderWidth="5px"
        centerContent
        onClick={handleSave}
        borderColor="#141820"
        // @ts-ignore
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9, rotate: -15 }}
      >
        <Icon boxSize="5" viewBox="0 0 24 24" fill="white">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M20.71,9.29l-6-6a1,1,0,0,0-.32-.21A1.09,1.09,0,0,0,14,3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10A1,1,0,0,0,20.71,9.29ZM9,5h4V7H9Zm6,14H9V16a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Zm4-1a1,1,0,0,1-1,1H17V16a3,3,0,0,0-3-3H10a3,3,0,0,0-3,3v3H6a1,1,0,0,1-1-1V6A1,1,0,0,1,6,5H7V8A1,1,0,0,0,8,9h6a1,1,0,0,0,1-1V6.41l4,4Z"
          />
        </Icon>
      </Circle>

      {/* ZOOM IN  */}
      <Circle
        maxW="80px"
        maxH="80px"
        as={motion.button}
        justifyContent="center"
        alignItems="center"
        bgColor="#313640"
        p="2"
        centerContent
        onClick={() => setZoom((zoom) => zoom + 0.1)}
        borderColor="#141820"
        borderWidth="5px"
        // @ts-ignore
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9, rotate: 10 }}
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
        maxW="80px"
        maxH="80px"
        as={motion.button}
        justifyContent="center"
        alignItems="center"
        bgColor="#313640"
        p="2"
        borderWidth="5px"
        centerContent
        onClick={() => setZoom((zoom) => zoom - 0.1)}
        borderColor="#141820"
        // @ts-ignore
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9, rotate: 10 }}
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
        maxW="80px"
        maxH="80px"
        as={motion.button}
        justifyContent="center"
        alignItems="center"
        bgColor="#313640"
        p="2.5"
        centerContent
        onClick={() => setSeed(seed + 1)}
        borderWidth="5px"
        borderColor="#141820"
        // @ts-ignore
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9, rotate: (Math.random() - 0.5) * 360 * 1.5 }}
      >
        <DiceIcon />
      </Circle>
    </Flex>
  );
};

export default CanvasControls;
