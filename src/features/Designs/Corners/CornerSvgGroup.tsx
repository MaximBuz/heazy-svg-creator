import React from 'react';
import mirror from '../../../utils/helpers/getTransform';
import { ICornerSvgGroup } from './types/Corners.types';

const CornerSvgGroup: React.FunctionComponent<ICornerSvgGroup> = (props) => {
  // destructure some params
  const { width, height, classId } = props;
  const { path, strokeShrink, solid, strokeWidth } = props;
  const { direction } = props;
  const { shadowColor, shadowSD, shadowX, shadowY } = props;
  const { startColor, endColor } = props;

  return (
    <g
      transform-origin={`${width / 2} ${height / 2}`}
      transform={mirror(direction)}
    >
      <linearGradient id={`linear-gradient-${classId}`}>
        <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
        <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
      </linearGradient>

      {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
      {solid && (
        <filter
          id={`shadow-${classId}`}
          x="-20%"
          width="150%"
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
      {path.map((wave, index) => (
        <path
          key={index}
          d={wave}
          fill="none"
          strokeLinecap="round"
          filter={solid ? `url(#shadow-${classId})` : undefined}
          stroke={!solid ? `url(#linear-gradient-${classId})` : undefined}
          strokeWidth={
            strokeWidth && strokeShrink
              ? strokeWidth - (strokeWidth / path.length) * index
              : strokeWidth
          }
          style={{
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
            fill: solid ? `url(#linear-gradient-${classId})` : undefined,
          }}
        ></path>
      ))}
    </g>
  );
};

export default CornerSvgGroup;
