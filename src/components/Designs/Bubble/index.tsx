import React, { useId } from 'react';
import { bubblePath } from '../../../utils/path-algorithms/Bubble/bubblePath';
import { generateRandomNumber } from '../../../utils/helpers/randomNumber';
import { IBubbleAllProps, IBubbleProps } from './Types/bubbleProps';
import SvgCanvas from '../../Canvas/SvgCanvas';

const Bubble: React.FunctionComponent<IBubbleProps & IBubbleAllProps> = (props) => {

  // destructure some params
  const { width, height, svgRef, seed } = props;
  const { solid, strokeWidth } = props;
  const { velocity, size } = props;
  const { shadowColor, shadowSD, shadowX, shadowY } = props;
  const { bgColor, startColor, endColor } = props;

  // generate path
  const pathData = bubblePath(seed, width, height, velocity, size);

  const randomClassId = useId()
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
          <filter id={`shadow-${randomClassId}`}>
            <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
          </filter>
        )}
        <path
          d={pathData}
          fill="none"
          strokeLinecap="round"
          filter={solid ? `url(#shadow-${randomClassId})` : undefined}
          stroke={!solid ? `url(#linear-gradient-${randomClassId})` : undefined}
          strokeWidth={strokeWidth}
          style={{
            transformOrigin: 'center',
            transform: `rotate(${(generateRandomNumber(seed) - 0.5) * 360}deg)`,
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
            fill: solid ? `url(#linear-gradient-${randomClassId})` : undefined,
          }}
        ></path>
      </g>
    </SvgCanvas>
  );
};

export default Bubble;
