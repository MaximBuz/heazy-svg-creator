import { generateRandomNumber as random } from '../../helpers/randomNumber';
import { IIsolineCoords } from '../types';

function initializeCoords(
  seed: number,
  velocity: number,
  width: number,
  height: number,
  iteration: number
): IIsolineCoords {
  const velocityHeight = (velocity / 100) * height;
  const velocityWidth = (velocity / 100) * width;
  const handlesRight = (random(seed + 1) - 0.5) * (velocityHeight / iteration);
  const handlesLeft = (random(seed + 2) - 0.5) * (velocityWidth / iteration);
  const handlesTop = (random(seed + 3) - 0.5) * (velocityWidth / iteration);
  const handlesBottom = (random(seed) - 0.5) * (velocityHeight / iteration);

  return {
    handles: {
      right: handlesRight,
      left: handlesLeft,
      top: handlesTop,
      bottom: handlesBottom,
    },
    anchors: {
      right: (random(seed) - 0.5) * (velocity / 100),
      left: (random(seed) - 0.5) * (velocity / 100),
      top: (random(seed) - 0.5) * (velocity / 100),
      bottom: (random(seed) - 0.5) * (velocity / 100),
    },
  };
}

function calculatePath(
  init: IIsolineCoords,
  size: number,
  outerCenter: { x: number; y: number },
  innerCenter: { x: number; y: number },
  iteration: number,
  pressure: number
) {
  const outerOffset = 1 / iteration;
  const innerOffset = 1 - outerOffset;

  const x = outerOffset * outerCenter.x + innerOffset * innerCenter.x;
  const y = outerOffset * outerCenter.y + innerOffset * innerCenter.y;

  const start = `M ${x + size + init.anchors.right} ${y + init.anchors.right}`;
  const coords = [
    {
      x: x + init.anchors.bottom,
      y: y + size + init.anchors.bottom,
      h1: {
        x: x + size - init.handles.right + init.anchors.right,
        y: y + size / pressure + init.anchors.right,
      },
      h2: {
        x: x + size / pressure + init.anchors.bottom,
        y: y + size + init.handles.bottom + init.anchors.bottom,
      },
    },
    {
      x: x - size + init.anchors.left,
      y: y + init.anchors.left,
      h1: {
        x: x - size / pressure + init.anchors.bottom,
        y: y + size - init.handles.bottom + init.anchors.bottom,
      },
      h2: {
        x: x - size + init.handles.left + init.anchors.left,
        y: y + size / pressure + init.anchors.left,
      },
    },
    {
      x: x + init.anchors.top,
      y: y - size + init.anchors.top,
      h1: {
        x: x - size - init.handles.left + init.anchors.left,
        y: y - size / pressure + init.anchors.left,
      },
      h2: {
        x: x - size / pressure + init.anchors.top,
        y: y - size + init.handles.top + init.anchors.top,
      },
    },
    {
      x: x + size + init.anchors.right,
      y: y + init.anchors.right,
      h1: {
        x: x + size / pressure + init.anchors.top,
        y: y - size - init.handles.top + init.anchors.top,
      },
      h2: {
        x: x + size + init.handles.right + init.anchors.right,
        y: y - size / pressure + init.anchors.right,
      },
    },
  ];
  return (
    start +
    coords
      .map(
        (coord) =>
          ` C${coord.h1.x} ${coord.h1.y} ${coord.h2.x} ${coord.h2.y} ${coord.x} ${coord.y}`
      )
      .join(' ')
  );
}

export function isolinePath(
  seed: number,
  width: number,
  height: number,
  velocity: number,
  depth: number,
  size: number,
  pressure: number,
  distance: number,
  innerOffsetX: number,
  innerOffsetY: number
): string[] {
  const outerCenter = {
    x: width / 2,
    y: height / 2,
  };

  const innerCenter = {
    x: outerCenter.x * innerOffsetX,
    y: outerCenter.y * innerOffsetY,
  };

  const isoline: string[] = [];
  for (let iteration = 2; iteration <= depth + 1; iteration++) {
    const sizeOffset = iteration * distance;

    if (size - sizeOffset > 0) {
      const init = initializeCoords(
        seed,
        velocity,
        width,
        height,
        Math.log(iteration + 1)
      );
      isoline.push(
        calculatePath(
          init,
          size - sizeOffset,
          outerCenter,
          innerCenter,
          iteration,
          pressure
        )
      );
    }
  }

  return isoline;
}
