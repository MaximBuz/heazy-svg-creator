import React, { ReactNode, Ref } from 'react';

interface ISvgCanvasProps {
  width: number;
  height: number;
  svgRef: Ref<SVGSVGElement>;
  children: ReactNode;
}

const SvgCanvas: React.FunctionComponent<ISvgCanvasProps> = ({
  width,
  height,
  svgRef,
  children,
}) => {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      ref={svgRef}
    >
      {children}
    </svg>
  );
};

export default SvgCanvas;
