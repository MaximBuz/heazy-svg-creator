import React, { LegacyRef, ReactNode } from 'react';

interface ISvgCanvasProps {
  width: number;
  height: number;
  ref: LegacyRef<SVGSVGElement>;
  children: ReactNode;
}

const SvgCanvas: React.FunctionComponent<ISvgCanvasProps> = ({width, height, ref, children}) => {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      ref={ref}
    >
      {children}
    </svg>
  );
};

export default SvgCanvas;
