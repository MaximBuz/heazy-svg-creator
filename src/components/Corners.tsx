import React from 'react';
import { ICornerAllProps, ICornerProps } from '../utils/types/cornerProps';
import { smoothCornerPath } from '../utils/calculations/smoothCornerPath';
import { edgyCornerPath } from '../utils/calculations/edgyCornerPath';

const Corners: React.FunctionComponent<ICornerProps & ICornerAllProps> = ({
  svgRef,
  seed,
  width,
  height,

  topLeftCorner,
  topRightCorner,
  bottomLeftCorner,
  bottomRightCorner,
  mirror,

  balance,
  velocity,
  breaks,
  stacks,
  distance,
  stroke,
  strokeWidth,
  strokeShrink,
  smooth,

  startColor,
  endColor,
  bgColor,

  shadowX,
  shadowY,
  shadowSD,
  shadowColor,
}) => {
  let topLeft, topRight, bottomLeft, bottomRight, mirrored;

  // If mirrored, generate only on path, else, each on its own
  if (mirror) {
    mirrored = smoothCornerPath(seed, width, height, balance, velocity, breaks, stacks,distance, stroke, smooth);
  } else {
    topLeftCorner &&
      (topLeft = smoothCornerPath(seed, width, height, balance, velocity, breaks, stacks,distance, stroke, smooth));
    topRightCorner &&
      (topRight = smoothCornerPath(seed + 1, width, height, balance, velocity, breaks, stacks,distance, stroke, smooth));
    bottomLeftCorner &&
      (bottomLeft = smoothCornerPath(seed + 2, width, height, balance, velocity, breaks, stacks,distance, stroke, smooth));
    bottomRightCorner &&
      (bottomRight = smoothCornerPath(seed + 3, width, height, balance, velocity, breaks, stacks,distance, stroke, smooth));
  }

  const randomClassId = Math.round(Math.random() * 100);

  if (mirror) return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      ref={svgRef}
    >

      {/* ----- TOP LEFT CORNER ----- */}
      {topLeftCorner && (
        <g transform-origin={`${width / 2} ${height / 2}`} transform={'scale(1, 1) rotate(0)'}>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${randomClassId}`}>
          <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
        </linearGradient>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        {!stroke && (
          <filter id={`shadow-${randomClassId}`} x="-20%" width="150%" y="-20%" height="150%">
            <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
          </filter>
        )}
        {mirrored.map((wave, index) => (
          <path
            key={index}
            d={mirror ? mirrored[index] : wave}
            fill="none"
            strokeLinecap="round"
            filter={!stroke ? `url(#shadow-${randomClassId})` : undefined}
            stroke={stroke ? `url(#linear-gradient-${randomClassId})` : undefined}
            strokeWidth={
              strokeWidth && strokeShrink ? strokeWidth - (strokeWidth / mirrored.length) * index : strokeWidth
            }
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: !stroke ? `url(#linear-gradient-${randomClassId})` : undefined,
            }}
          ></path>
        ))}
      </g>
      )}
      

      {/* ----- TOP RIGHT CORNER ----- */}
      {topRightCorner && (
        <g transform-origin={`${width / 2} ${height / 2}`} transform={'scale(-1, 1) rotate(0)'}>
        <linearGradient id={`linear-gradient-${randomClassId}`}>
          <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
        </linearGradient>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        {!stroke && (
          <filter id={`shadow-${randomClassId}`} x="-20%" width="150%" y="-20%" height="150%">
            <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
          </filter>
        )}
        {mirrored.map((wave, index) => (
          <path
            key={index}
            d={mirror ? mirrored[index] : wave}
            fill="none"
            strokeLinecap="round"
            filter={!stroke ? `url(#shadow-${randomClassId})` : undefined}
            stroke={stroke ? `url(#linear-gradient-${randomClassId})` : undefined}
            strokeWidth={
              strokeWidth && strokeShrink
                ? strokeWidth - (strokeWidth / mirrored.length) * index
                : strokeWidth
            }
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: !stroke ? `url(#linear-gradient-${randomClassId})` : undefined,
            }}
          ></path>
        ))}
      </g>
      )}
      

      {/* ----- BOTTOM LEFT CORNER ----- */}
      {bottomLeftCorner && (
        <g transform-origin={`${width / 2} ${height / 2}`} transform={'scale(1, -1) rotate(0)'}>
          <linearGradient id={`linear-gradient-${randomClassId}`}>
            <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
            <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
          </linearGradient>

          {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
          {!stroke && (
            <filter id={`shadow-${randomClassId}`} x="-20%" width="150%" y="-20%" height="150%">
              <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
            </filter>
          )}
          {mirrored.map((wave, index) => (
            <path
              key={index}
              d={mirror ? mirrored[index] : wave}
              fill="none"
              strokeLinecap="round"
              filter={!stroke ? `url(#shadow-${randomClassId})` : undefined}
              stroke={stroke ? `url(#linear-gradient-${randomClassId})` : undefined}
              strokeWidth={
                strokeWidth && strokeShrink
                  ? strokeWidth - (strokeWidth / mirrored.length) * index
                  : strokeWidth
              }
              style={{
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
                fill: !stroke ? `url(#linear-gradient-${randomClassId})` : undefined,
              }}
            ></path>
          ))}
        </g>
      )}

      {/* ----- BOTTOM RIGHT CORNER ----- */}
      {bottomRightCorner && (
        <g transform-origin={`${width / 2} ${height / 2}`} transform={'scale(-1, -1) rotate(0)'}>
          <linearGradient id={`linear-gradient-${randomClassId}`}>
            <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
            <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
          </linearGradient>

          {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
          {!stroke && (
            <filter id={`shadow-${randomClassId}`} x="-20%" width="150%" y="-20%" height="150%">
              <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
            </filter>
          )}
          {mirrored.map((wave, index) => (
            <path
              key={index}
              d={mirror ? mirrored[index] : wave}
              fill="none"
              strokeLinecap="round"
              filter={!stroke ? `url(#shadow-${randomClassId})` : undefined}
              stroke={stroke ? `url(#linear-gradient-${randomClassId})` : undefined}
              strokeWidth={
                strokeWidth && strokeShrink
                  ? strokeWidth - (strokeWidth / mirrored.length) * index
                  : strokeWidth
              }
              style={{
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
                fill: !stroke ? `url(#linear-gradient-${randomClassId})` : undefined,
              }}
            ></path>
          ))}
        </g>
      )}

    </svg>
  );

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
      <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
      <linearGradient id={`linear-gradient-${randomClassId}`}>
        <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
        <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
      </linearGradient>

      {/* ----- TOP LEFT CORNER ----- */}
      {topLeftCorner && (
        <g transform-origin={`${width / 2} ${height / 2}`} transform={'scale(1, 1) rotate(0)'}>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        {!stroke && (
          <filter id={`shadow-${randomClassId}`} x="-20%" width="150%" y="-20%" height="150%">
            <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
          </filter>
        )}
        {topLeft.map((wave, index) => (
          <path
            key={index}
            d={mirror ? mirrored[index] : wave}
            fill="none"
            strokeLinecap="round"
            filter={!stroke ? `url(#shadow-${randomClassId})` : undefined}
            stroke={stroke ? `url(#linear-gradient-${randomClassId})` : undefined}
            strokeWidth={
              strokeWidth && strokeShrink ? strokeWidth - (strokeWidth / topLeft.length) * index : strokeWidth
            }
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: !stroke ? `url(#linear-gradient-${randomClassId})` : undefined,
            }}
          ></path>
        ))}
      </g>
      )}
      

      {/* ----- TOP RIGHT CORNER ----- */}
      {topRightCorner && (
        <g transform-origin={`${width / 2} ${height / 2}`} transform={'scale(-1, 1) rotate(0)'}>
        <linearGradient id={`linear-gradient-${randomClassId}`}>
          <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
        </linearGradient>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        {!stroke && (
          <filter id={`shadow-${randomClassId}`} x="-20%" width="150%" y="-20%" height="150%">
            <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
          </filter>
        )}
        {topRight.map((wave, index) => (
          <path
            key={index}
            d={mirror ? mirrored[index] : wave}
            fill="none"
            strokeLinecap="round"
            filter={!stroke ? `url(#shadow-${randomClassId})` : undefined}
            stroke={stroke ? `url(#linear-gradient-${randomClassId})` : undefined}
            strokeWidth={
              strokeWidth && strokeShrink
                ? strokeWidth - (strokeWidth / topRight.length) * index
                : strokeWidth
            }
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: !stroke ? `url(#linear-gradient-${randomClassId})` : undefined,
            }}
          ></path>
        ))}
      </g>
      )}
      

      {/* ----- BOTTOM LEFT CORNER ----- */}
      {bottomLeftCorner && (
        <g transform-origin={`${width / 2} ${height / 2}`} transform={'scale(1, -1) rotate(0)'}>
          <linearGradient id={`linear-gradient-${randomClassId}`}>
            <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
            <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
          </linearGradient>

          {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
          {!stroke && (
            <filter id={`shadow-${randomClassId}`} x="-20%" width="150%" y="-20%" height="150%">
              <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
            </filter>
          )}
          {bottomLeft.map((wave, index) => (
            <path
              key={index}
              d={mirror ? mirrored[index] : wave}
              fill="none"
              strokeLinecap="round"
              filter={!stroke ? `url(#shadow-${randomClassId})` : undefined}
              stroke={stroke ? `url(#linear-gradient-${randomClassId})` : undefined}
              strokeWidth={
                strokeWidth && strokeShrink
                  ? strokeWidth - (strokeWidth / bottomLeft.length) * index
                  : strokeWidth
              }
              style={{
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
                fill: !stroke ? `url(#linear-gradient-${randomClassId})` : undefined,
              }}
            ></path>
          ))}
        </g>
      )}

      {/* ----- BOTTOM RIGHT CORNER ----- */}
      {bottomRightCorner && (
        <g transform-origin={`${width / 2} ${height / 2}`} transform={'scale(-1, -1) rotate(0)'}>
          <linearGradient id={`linear-gradient-${randomClassId}`}>
            <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
            <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
          </linearGradient>

          {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
          {!stroke && (
            <filter id={`shadow-${randomClassId}`} x="-20%" width="150%" y="-20%" height="150%">
              <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
            </filter>
          )}
          {bottomRight.map((wave, index) => (
            <path
              key={index}
              d={mirror ? mirrored[index] : wave}
              fill="none"
              strokeLinecap="round"
              filter={!stroke ? `url(#shadow-${randomClassId})` : undefined}
              stroke={stroke ? `url(#linear-gradient-${randomClassId})` : undefined}
              strokeWidth={
                strokeWidth && strokeShrink
                  ? strokeWidth - (strokeWidth / bottomRight.length) * index
                  : strokeWidth
              }
              style={{
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
                fill: !stroke ? `url(#linear-gradient-${randomClassId})` : undefined,
              }}
            ></path>
          ))}
        </g>
      )}

    </svg>
  );
};

export default Corners;
