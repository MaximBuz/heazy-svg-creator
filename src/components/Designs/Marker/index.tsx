import React, { useId } from 'react';
import { markerPath } from '../../../utils/path-algorithms/Marker/markerPath';
import { IMarkerAllProps, IMarkerProps } from './Types/markerProps';
import SvgCanvas from '../../Canvas/SvgCanvas';

const Marker: React.FunctionComponent<IMarkerProps & IMarkerAllProps> = (props) => {

  // destructure some params
  const { width, height, svgRef, seed } = props;
  const { lineCap, lineJoin, strokeWidth } = props;
  const { markerHeight, zickZacks, padding, pressure } = props;
  const { mirror, yPosition } = props;
  const { ghost, ghostStartColor, ghostEndColor } = props;
  const { shadowColor, shadowSD, shadowX, shadowY } = props;
  const { bgColor, startColor, endColor } = props;

  // Generate path
  const pathData = markerPath(seed, width, markerHeight, zickZacks, padding, mirror, yPosition, pressure);
  const randomClassId = useId();
  return (
    <SvgCanvas width={width} height={ height} svgRef={svgRef} >
      <g transform-origin="center" transform={'scale(1, 1) rotate(0)'}>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${randomClassId}`}>
          <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
        </linearGradient>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        <filter id={`shadow-${randomClassId}`}  y="-20%" height="150%" x="-20%" width="150%">
          <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
        </filter>
        {ghost && (
          <>
            <linearGradient id={`ghost-linear-gradient-${randomClassId}`}>
              <stop offset="0%" stopColor={ghostStartColor} stopOpacity="100%" />
              <stop offset="100%" stopColor={ghostEndColor} stopOpacity="100%" />
            </linearGradient>
            <path
              d={pathData}
              fill="none"
              strokeLinecap={lineCap}
              strokeLinejoin={lineJoin}
              stroke={`url(#ghost-linear-gradient-${randomClassId})`}
              strokeWidth={strokeWidth}
              style={{
                transformOrigin: 'center',
                transform: 'scale(1.1,1.1)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              }}
            ></path>
          </>
        )}
        <path
          d={pathData}
          fill="none"
          strokeLinecap={lineCap}
          strokeLinejoin={lineJoin}
          filter={`url(#shadow-${randomClassId})`}
          stroke={`url(#linear-gradient-${randomClassId})`}
          strokeWidth={strokeWidth}
          style={{
            transformOrigin: 'center',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
          }}
        ></path>
      </g>
    </SvgCanvas>
  );
};

export default Marker;