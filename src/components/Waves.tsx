import React from 'react';
import { smoothWavePath } from '../utils/calculations/wave-paths/smoothWavePath';
import { peakWavePath } from '../utils/calculations/wave-paths/peakWavePath';
import { IWaveProps } from '../utils/types/waveProps';
import SvgCanvas from './SvgCanvas';

const Waves: React.FunctionComponent<IWaveProps> = (props) => {
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
  ] as const;

  // destructure some params
  const { width, height, svgRef, type } = props;
  const { stroke, strokeShrink, strokeWidth } = props;
  const { shadowColor, shadowSD, shadowX, shadowY } = props;
  const { bgColor, startWaveColor, stopWaveColor } = props;

  // generate paths
  let wavesData;
  if (props.type === 'smooth') {
    wavesData = smoothWavePath(...pathParams);
  } else {
    wavesData = peakWavePath(...pathParams);
  }
  const randomClassId = Math.round(Math.random() * 100);

  return (
    <SvgCanvas width={width} height={height} svgRef={svgRef}>
      <g transform-origin="center" transform={'scale(1, 1) rotate(0)'}>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${type}-${randomClassId}`}>
          <stop offset="0%" stopColor={startWaveColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={stopWaveColor} stopOpacity="100%" />
        </linearGradient>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        {!stroke && (
          <filter id={`shadow-${type}-${randomClassId}`} x={0} width="100%" y="-20%" height="150%">
            <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
          </filter>
        )}
        {wavesData.map((wave, index) => (
          <path
            key={index}
            d={wave}
            fill="none"
            strokeLinecap="round"
            filter={!stroke ? `url(#shadow-${type}-${randomClassId})` : undefined}
            stroke={stroke ? `url(#linear-gradient-${type}-${randomClassId})` : undefined}
            strokeWidth={
              strokeWidth && strokeShrink
                ? strokeWidth - (strokeWidth / wavesData.length) * index
                : strokeWidth
            }
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: !stroke ? `url(#linear-gradient-${type}-${randomClassId})` : undefined,
            }}
          ></path>
        ))}
      </g>
    </SvgCanvas>
  );
};

export default Waves;
