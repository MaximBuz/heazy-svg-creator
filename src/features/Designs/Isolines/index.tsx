import React, { Ref, useId } from 'react';
import SvgCanvas from '../../Canvas/SvgCanvas';
import { useDesign } from '../../../contexts/DesignContext';
import { isolinePath } from '../../../utils/path-algorithms/Isolines/isolinePath';
import StrokeStyles from './strokeStyles';

const Isolines: React.FunctionComponent<{
  svgRef: Ref<SVGSVGElement | null>;
  seed: number;
}> = ({ seed, svgRef }) => {
  const { isolinesState, canvasDimensions } = useDesign();

  // destructure some params
  const { width, height } = canvasDimensions;
  const { zoom, x, y } = isolinesState;
  const { bgColor, startColor, endColor } = isolinesState;

  // generate paths
  const pathData = isolinePath(
    seed,
    width,
    height,
    isolinesState.velocity,
    isolinesState.depth,
    ((width + height) / 2) * isolinesState.radius,
    isolinesState.pressure,
    isolinesState.distance,
    isolinesState.innerOffsetX,
    isolinesState.innerOffsetY
  );

  const randomClassId = useId().replaceAll(':', '');
  return (
    <SvgCanvas width={width} height={height} svgRef={svgRef}>
      <g transform-origin="center" transform={'scale(1, 1) rotate(0)'}>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${randomClassId}`}>
          <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
        </linearGradient>

        {/* ACHTUNG ye dicker desto mehr */}
        <StrokeStyles strokeStyle={isolinesState.strokeStyle}></StrokeStyles>

        <g filter={isolinesState.strokeStyle > 1 && 'url(#strokeStyle)'}>
          {pathData.map((circle, index) => (
            <path
              // options
              d={circle}
              fill="none"
              strokeLinecap="round"
              stroke={`url(#linear-gradient-${randomClassId})`}
              strokeWidth={
                isolinesState.strokeShrink
                  ? isolinesState.strokeWidth / (index + 1)
                  : isolinesState.strokeWidth
              }
              style={{
                transformOrigin: 'center',
                transform: `scale(${zoom}) translate(${x}px, ${y}px)`,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              }}
            ></path>
          ))}
        </g>
      </g>
    </SvgCanvas>
  );
};

export default Isolines;
