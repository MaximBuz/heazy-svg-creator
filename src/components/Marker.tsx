import React from 'react';
import { markerPath } from '../utils/calculations/markerPath';
import { IMarkerAllProps, IMarkerProps } from '../utils/types/markerProps';

const Marker: React.FunctionComponent<IMarkerProps & IMarkerAllProps> = ({
  svgRef,
  seed,
  width,
  height,
  lineCap,
  lineJoin,
  strokeWidth,
  startColor,
  endColor,
  bgColor,
  shadowX,
  shadowY,
  shadowSD,
  shadowColor,
  markerHeight,
  zickZacks,
  ghost,
  ghostStartColor,
  ghostEndColor,
  padding,
  mirror,
  yPosition,
  pressure,
}) => {
  const pathData = markerPath(seed, width, markerHeight, zickZacks, padding, mirror, yPosition, pressure);
  const randomClassId = Math.round(Math.random() * 100);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      ref={svgRef}
    >
      <g transform-origin="center" transform={'scale(1, 1) rotate(0)'}>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${randomClassId}`}>
          <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
        </linearGradient>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        <filter id={`shadow-${randomClassId}`}>
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
    </svg>
  );
};

export default Marker;