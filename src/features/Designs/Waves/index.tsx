import React, { Ref, useId } from 'react';
import { smoothWavePath } from '../../../utils/path-algorithms/Waves/smoothWavePath';
import SvgCanvas from '../../Canvas/SvgCanvas';
import { useDesign } from '../../../contexts/DesignContext';

const Waves: React.FunctionComponent<{
  svgRef: Ref<SVGSVGElement | null>;
  seed: number;
}> = ({ seed, svgRef }) => {
  const { waveState, canvasDimensions } = useDesign();
  const { width, height } = canvasDimensions;
  const { solid, strokeShrink, strokeWidth } = waveState;
  const { shadowColor, shadowSD, shadowX, shadowY } = waveState;
  const { bgColor, startColor, endColor } = waveState;

  // set up params that are needed to generate a path
  const pathParams = [
    seed,
    width,
    height,
    waveState.balance,
    waveState.velocity,
    waveState.breaks,
    waveState.stacks,
    waveState.distance,
    waveState.solid,
    waveState.smooth,
  ] as const;

  // generate paths
  const wavesData = smoothWavePath(...pathParams);

  const randomClassId = useId().replaceAll(':', '');

  return (
    <SvgCanvas width={width} height={height} svgRef={svgRef}>
      <g transform-origin="center" transform={'scale(1, 1) rotate(0)'}>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${randomClassId}`}>
          <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
        </linearGradient>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        {solid && (
          <filter
            id={`shadow-${randomClassId}`}
            x={0}
            width="100%"
            y="-20%"
            height="150%"
          >
            <feDropShadow
              dx={shadowX}
              dy={shadowY}
              stdDeviation={shadowSD}
              floodColor={shadowColor}
            />
          </filter>
        )}
        {wavesData.map((wave, index) => (
          <path
            key={index}
            d={wave}
            fill="none"
            strokeLinecap="round"
            filter={solid ? `url(#shadow-${randomClassId})` : undefined}
            stroke={
              !solid ? `url(#linear-gradient-${randomClassId})` : undefined
            }
            strokeWidth={
              strokeWidth && strokeShrink
                ? strokeWidth - (strokeWidth / wavesData.length) * index
                : strokeWidth
            }
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: solid
                ? `url(#linear-gradient-${randomClassId})`
                : undefined,
            }}
          ></path>
        ))}
      </g>
    </SvgCanvas>
  );
};

export default Waves;
