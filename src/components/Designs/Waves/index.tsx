import React, { useId } from 'react';
import { smoothWavePath } from '../../../utils/path-algorithms/Waves/smoothWavePath';
import { IWaveAllProps, IWaveProps } from './Types/waveProps';
import SvgCanvas from '../../Canvas/SvgCanvas';

const Waves: React.FunctionComponent<IWaveAllProps & IWaveProps> = (props) => {
  // set up params that are needed to generate a path
  const pathParams = [
    props.seed,
    props.width,
    props.height,
    props.balance,
    props.velocity,
    props.breaks,
    props.stacks,
    props.distance,
    props.stroke,
    props.smooth,
  ] as const;

  // destructure some params
  const { width, height, svgRef } = props;
  const { stroke, strokeShrink, strokeWidth } = props;
  const { shadowColor, shadowSD, shadowX, shadowY } = props;
  const { bgColor, startColor, endColor } = props;

  // generate paths
  let wavesData = smoothWavePath(...pathParams);

  const randomClassId = useId();

  return (
    <SvgCanvas width={width} height={height} svgRef={svgRef}>
      <g transform-origin="center" transform={'scale(1, 1) rotate(0)'}>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${randomClassId}`}>
          <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
        </linearGradient>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        {!stroke && (
          <filter id={`shadow-${randomClassId}`} x={0} width="100%" y="-20%" height="150%">
            <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
          </filter>
        )}
        {wavesData.map((wave, index) => (
          <path
            key={index}
            d={wave}
            fill="none"
            strokeLinecap="round"
            filter={!stroke ? `url(#shadow-${randomClassId})` : undefined}
            stroke={stroke ? `url(#linear-gradient-${randomClassId})` : undefined}
            strokeWidth={
              strokeWidth && strokeShrink
                ? strokeWidth - (strokeWidth / wavesData.length) * index
                : strokeWidth
            }
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: !stroke ? `url(#linear-gradient-${randomClassId})` : undefined,
            }}
          ></path>
        ))}
      </g>
    </SvgCanvas>
  );
};

export default Waves;
