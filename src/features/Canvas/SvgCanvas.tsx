import React, { ReactNode } from 'react';

interface ISvgCanvasProps {
  width: number;
  height: number;
  svgRef: any;
  children: ReactNode;
}

const SvgCanvas: React.FunctionComponent<ISvgCanvasProps> = ({width, height, svgRef, children}) => {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      enableBackground={`new 0 0 ${width} ${height}`}
      xmlSpace="preserve"
      ref={svgRef}
    >
      {children}
    </svg>
  );
};

export default SvgCanvas;
