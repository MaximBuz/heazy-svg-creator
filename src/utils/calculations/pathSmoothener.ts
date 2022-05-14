const getOpposedLineProperties = (pointA, pointB) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];

  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX),
  };
};

const getHandleCoords = (current, previous, next, reverse, smoothing) => {
  previous = previous || current;
  next = next || current;

  const opposedParallel = getOpposedLineProperties(previous, next);

  // If is end-control-point, add PI to the angle to go backward
  const angle = opposedParallel.angle + (reverse ? Math.PI : 0);
  const length = opposedParallel.length * smoothing;

  // The control point position is relative to the current point
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;
  return [x, y];
};

export const getBezier = (point, index, anchorPoints, smoothing) => {
  // start control point
  const [handle1x, handle1y] = getHandleCoords(
    anchorPoints[index - 1],
    anchorPoints[index - 2],
    point,
    undefined,
    smoothing
  );
  // end control point
  const [handle2x, handle2y] = getHandleCoords(
    point,
    anchorPoints[index - 1],
    anchorPoints[index + 1],
    true,
    smoothing
  );
  return `C ${handle1x},${handle1y} ${handle2x},${handle2y} ${point[0]},${point[1]}`;
};
