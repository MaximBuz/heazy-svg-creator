import React from 'react';
function getTransformation (direction: number):string {
  switch (direction) {
    case 0: {
      return "scale(1, 1)";
    }
    case 1: {
      return "scale(-1, 1)";
    }
    case 2: {
      return "scale(1, -1)";
    }
    case 3: {
      return "scale(-1, -1)";
    }
  }
}

interface SvgDirectionProps {
  width: number;
  height: number;
  stroke: boolean;
  strokeWidth: number;
  strokeShrink: boolean;
  classId: number;
  startColor: string;
  endColor: string;
  shadowX: number;
  shadowY: number;
  shadowSD: number;
  shadowColor: string;
  path: any[];
  direction: number;
}

const CornerSvgGroup: React.FunctionComponent<SvgDirectionProps> = (props) => {

  // destructure some params
  const { width, height, classId } = props;
  const { path, strokeShrink, stroke, strokeWidth } = props;
  const { direction } = props;
  const { shadowColor, shadowSD, shadowX, shadowY } = props;
  const { startColor, endColor } = props;

  // get transformatio property for mirroring
  const scale = getTransformation(direction)

  return (
    <g transform-origin={`${width / 2} ${height / 2}`} transform={scale}>
      <linearGradient id={`linear-gradient-${classId}`}>
        <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
        <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
      </linearGradient>

      {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
      {!stroke && (
        <filter id={`shadow-${classId}`} x="-20%" width="150%" y="-20%" height="150%">
          <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
        </filter>
      )}
      {path.map((wave, index) => (
        <path
          key={index}
          d={wave}
          fill="none"
          strokeLinecap="round"
          filter={!stroke ? `url(#shadow-${classId})` : undefined}
          stroke={stroke ? `url(#linear-gradient-${classId})` : undefined}
          strokeWidth={
            strokeWidth && strokeShrink ? strokeWidth - (strokeWidth / path.length) * index : strokeWidth
          }
          style={{
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
            fill: !stroke ? `url(#linear-gradient-${classId})` : undefined,
          }}
        ></path>
      ))}
    </g>
  );
};

export default CornerSvgGroup;
