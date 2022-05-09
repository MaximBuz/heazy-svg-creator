import { useState } from 'react';
import { IMarkerProps } from '../types/markerProps';
import { IMarkerSetterProps } from '../types/markerSetterProps';

const useMarkerOptions = (): {
  get: Omit<IMarkerProps, 'seed' | 'width' | 'height' | 'svgRef'>;
  set: IMarkerSetterProps;
} => {
  const [edgeJoin, setEdgeJoin] = useState<"miter" | "bevel" | "round">("bevel");
  const [startJoin, setStartJoin] = useState<"miter" | "bevel" | "round">("bevel");
  const [endJoin, setEndJoin] = useState<"miter" | "bevel" | "round">("bevel");
  const [strokeWidth, setStrokeWidth] = useState<number>(1);
  const [bgColor, setBgColor] = useState<string>('#FBAE3C');
  const [startColor, setStartColor] = useState<string>('#001e35');
  const [endColor, setEndColor] = useState<string>('#001b2f');
  const [shadowX, setShadowX] = useState<number>(0);
  const [shadowY, setShadowY] = useState<number>(0);
  const [shadowSD, setShadowSD] = useState<number>(10);
  const [shadowColor, setShadowColor] = useState<string>('#00000000');
  const [markerHeight, setMarkerHeight] = useState<number>(50);
  const [narrowness, setNarrowness] = useState<number>(50);
  const [ghost, setGhost] = useState<boolean>(true);

  return {
    get: {
      edgeJoin,
      startJoin,
      endJoin,
      strokeWidth,
      startColor,
      endColor,
      bgColor,
      shadowX,
      shadowY,
      shadowSD,
      shadowColor,
      markerHeight,
      narrowness,
      ghost,
    },
    set: {
      setEdgeJoin,
      setStartJoin,
      setEndJoin,
      setStrokeWidth,
      setStartColor,
      setEndColor,
      setBgColor,
      setShadowX,
      setShadowY,
      setShadowSD,
      setShadowColor,
      setMarkerHeight,
      setNarrowness,
      setGhost,
    },
  };
};

export default useMarkerOptions;
