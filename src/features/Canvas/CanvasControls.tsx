import { Flex, Circle, Icon } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useUserSpace } from '../../contexts/UserSpaceContext';

import DiceIcon from './DiceIcon';
import SaveButton from './SaveButton';
import { ICanvasControlsProps } from './types/Canvas.types';

const CanvasControls: React.FunctionComponent<ICanvasControlsProps> = ({
  currentZoom,
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
    whileHover: { scale: 1.1 },
  };

  const { onClose: closeUserSpace } = useUserSpace();

  const onClickZoom = (amount: number, overwrite = false) => {
    closeUserSpace();

    if (overwrite) {
      setZoom(amount);
    } else {
      setZoom((v) => v + amount);
    }
  };

  const rotateControls = useAnimation();

  const handleButtonClick = async () => {
    setSeed((seed) => seed + 1);

    const rotateTo =
      Math.max((Math.random() - 0.5) * 360 * 6, 360 * 1) *
      (Math.random() < 0.5 ? -1 : 1);

    await rotateControls.start({
      rotate: [0, rotateTo],
      transition: { duration: 1, ease: 'backInOut' },
    });
  };

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

      {currentZoom !== 1 && (
        <Circle
          title="Reset zoom"
          {...CircleStyles}
          onClick={() => onClickZoom(1, true)}
        >
          <Icon boxSize="5" viewBox="0 0 334 334">
            <path
              d="M109.792 209V89.3117H157.013C166.052 89.3117 173.766 90.9286 180.156 94.1623C186.584 97.3571 191.474 101.896 194.825 107.779C198.214 113.623 199.909 120.5 199.909 128.409C199.909 136.357 198.195 143.195 194.766 148.922C191.338 154.61 186.37 158.974 179.864 162.013C173.396 165.052 165.565 166.571 156.37 166.571H124.753V146.234H152.279C157.11 146.234 161.123 145.571 164.318 144.247C167.513 142.922 169.89 140.935 171.448 138.286C173.045 135.636 173.844 132.344 173.844 128.409C173.844 124.435 173.045 121.084 171.448 118.357C169.89 115.63 167.493 113.565 164.26 112.162C161.065 110.721 157.032 110 152.162 110H135.097V209H109.792ZM174.429 154.532L204.175 209H176.24L147.136 154.532H174.429Z"
              fill="white"
            />
            <path
              d="M309.771 288.853L255.126 234.65C276.337 208.202 286.609 174.633 283.83 140.844C281.051 107.056 265.431 75.6159 240.183 52.9898C214.935 30.3638 181.978 18.2712 148.088 19.1986C114.197 20.1259 81.9506 34.0027 57.9777 57.9756C34.0048 81.9485 20.128 114.195 19.2007 148.085C18.2733 181.976 30.3659 214.933 52.9919 240.181C75.618 265.429 107.058 281.049 140.846 283.828C174.635 286.607 208.204 276.335 234.652 255.123L288.855 309.327C290.225 310.707 291.854 311.803 293.649 312.551C295.443 313.299 297.369 313.684 299.313 313.684C301.257 313.684 303.183 313.299 304.978 312.551C306.772 311.803 308.401 310.707 309.771 309.327C312.426 306.58 313.909 302.91 313.909 299.09C313.909 295.27 312.426 291.6 309.771 288.853ZM152.021 255.123C131.629 255.123 111.695 249.076 94.7397 237.747C77.7844 226.418 64.5692 210.315 56.7655 191.476C48.9618 172.636 46.92 151.905 50.8983 131.905C54.8766 111.904 64.6963 93.533 79.1157 79.1136C93.5351 64.6942 111.906 54.8745 131.907 50.8962C151.907 46.9179 172.638 48.9597 191.478 56.7634C210.317 64.5671 226.42 77.7823 237.749 94.7377C249.079 111.693 255.126 131.627 255.126 152.019C255.126 179.364 244.263 205.589 224.927 224.925C205.591 244.261 179.366 255.123 152.021 255.123Z"
              fill="white"
            />
          </Icon>
        </Circle>
      )}

      <Circle
        title="Zoom in"
        {...CircleStyles}
        onClick={() => onClickZoom(0.1)}
      >
        <Icon boxSize="5" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M15,10H12V7a1,1,0,0,0-2,0v3H7a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V12h3a1,1,0,0,0,0-2Zm6.71,10.29L18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
          />
        </Icon>
      </Circle>

      <Circle
        title="Zoom out"
        {...CircleStyles}
        onClick={() => onClickZoom(-0.1)}
      >
        <Icon boxSize="5" viewBox="0 0 24 24">
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Zm4-8H7a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"
          />
        </Icon>
      </Circle>

      <Circle
        title="Randomize your design"
        {...CircleStyles}
        p="2.5"
        onClick={handleButtonClick}
        borderWidth="5px"
        animate={rotateControls}
      >
        <DiceIcon />
      </Circle>
    </Flex>
  );
};

export default CanvasControls;
