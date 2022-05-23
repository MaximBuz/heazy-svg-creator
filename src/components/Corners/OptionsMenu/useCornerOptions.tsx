import { useState } from 'react';
import { ICornerAllProps } from '../../../Types/Corners/cornerProps';
import { ICornerAllSetterProps } from '../../../Types/Corners/cornerSetterProps';

const useCornerOptions = (): {
  get: ICornerAllProps;
  set: ICornerAllSetterProps;
} => {
  const [solid, setSolid] = useState<number>(0);

  const [topLeftCorner, setTopLeftCorner] = useState<boolean>(true);
  const [topRightCorner, setTopRightCorner] = useState<boolean>(false);
  const [bottomLeftCorner, setBottomLeftCorner] = useState<boolean>(false);
  const [bottomRightCorner, setBottomRightCorner] = useState<boolean>(true);
  const [mirror, setMirror] = useState<boolean>(false);

  const [bgColor, setBgColor] = useState<string>('#ff0071ff');
  const [startColor, setStartColor] = useState<string>('#95ffda');
  const [endColor, setEndColor] = useState<string>('#95ffa1ff');

  const [shadowX, setShadowX] = useState<number>(0);
  const [shadowY, setShadowY] = useState<number>(0);
  const [shadowSD, setShadowSD] = useState<number>(10);
  const [shadowColor, setShadowColor] = useState<string>('#00000061');

  const [balance, setBalance] = useState<number>(0.3);
  const [velocity, setVelocity] = useState<number>(1);
  const [breaks, setBreaks] = useState<number>(4);
  const [stacks, setStacks] = useState<number>(0);
  const [distance, setDistance] = useState<number>(100);
  const [strokeShrink, setStrokeShrink] = useState<boolean>(false);
  const [strokeWidth, setStrokeWidth] = useState<number>(1);
  const [smooth, setSmooth] = useState<number>(0.2);

  return {
    get: {
      solid,

      topLeftCorner,
      topRightCorner,
      bottomLeftCorner,
      bottomRightCorner,
      mirror,

      bgColor,
      startColor,
      endColor,

      shadowX,
      shadowY,
      shadowSD,
      shadowColor,

      balance,
      velocity,
      breaks,
      stacks,
      distance,
      stroke: solid ? true : false,
      strokeShrink,
      strokeWidth,
      smooth
    },
    set: {
      setSolid,
      setSmooth,

      setTopLeftCorner,
      setTopRightCorner,
      setBottomLeftCorner,
      setBottomRightCorner,
      setMirror,

      setBgColor,
      setStartColor,
      setEndColor,

      setShadowX,
      setShadowY,
      setShadowSD,
      setShadowColor,
      
      setBalance,
      setVelocity,
      setBreaks,
      setStacks,
      setDistance,
      setStrokeShrink,
      setStrokeWidth,
    },
  };
};

export default useCornerOptions;
