import {
  AnchorPoint,
  GetBezierArgs,
  GetHandleCoordsArgs,
  OpposedLineProperties,
} from './types';

const getOpposedLineProperties = (
  pointA: AnchorPoint,
  pointB: AnchorPoint
): OpposedLineProperties => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];

  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX),
  };
};

const getHandleCoords = ({
  current,
  previous = current,
  next = current,
  reverse,
  smoothing,
}: GetHandleCoordsArgs): AnchorPoint => {
  const opposedParallel = getOpposedLineProperties(previous, next);

  // If it is an end-control-point, add PI to the angle to go backward
  const angle = opposedParallel.angle + (reverse ? Math.PI : 0);
  const length = opposedParallel.length * smoothing;

  // The control point position is relative to the current point
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;
  return [x, y];
};

export const getBezier = ({
  point,
  index,
  anchorPoints,
  smoothing,
}: GetBezierArgs): string => {
  const currentIndex = index - 1 < 0 ? 0 : index - 1;

  const [handle1x, handle1y] = getHandleCoords({
    current: anchorPoints[currentIndex],
    previous: index >= 2 ? anchorPoints[index - 2] : undefined,
    next: point,
    reverse: false,
    smoothing,
  });

  const [handle2x, handle2y] = getHandleCoords({
    current: point,
    previous: anchorPoints[currentIndex],
    next: index + 1 < anchorPoints.length ? anchorPoints[index + 1] : undefined,
    reverse: true,
    smoothing,
  });

  return `C ${handle1x},${handle1y} ${handle2x},${handle2y} ${point[0]},${point[1]}`;
};
