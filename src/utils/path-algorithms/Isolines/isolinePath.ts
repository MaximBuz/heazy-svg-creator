// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as random } from '../../helpers/randomNumber';

export interface IIsolineCoords {
  handles: {
    right: number;
    left: number;
    top: number;
    bottom: number;
  };
  anchors: {
    right: number;
    left: number;
    top: number;
    bottom: number;
  };
}

function initializeCoords(seed, velocity, width, height, iteration): IIsolineCoords {
  return {
    handles: {
      right: (random(seed + 1) - 0.5) * (((velocity / 100) * height) / iteration),
      left: (random(seed + 2) - 0.5) * (((velocity / 100) * width) / iteration),
      top: (random(seed + 3) - 0.5) * (((velocity / 100) * width) / iteration),
      bottom: (random(seed) - 0.5) * (((velocity / 100) * height) / iteration),
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

  let start = `M ${x + size + init.anchors.right} ${y + init.anchors.right}`;
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
      .map((coord) => ` C${coord.h1.x} ${coord.h1.y} ${coord.h2.x} ${coord.h2.y} ${coord.x} ${coord.y}`)
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

  const isoline = [];
  for (let iteration = 2; iteration <= depth + 1; iteration++) {
    const sizeOffset = iteration * distance ;

    if (size - sizeOffset > 0)
      isoline.push(
        calculatePath(
          initializeCoords(seed, velocity, width, height, Math.log(iteration + 1)),
          size - sizeOffset,
          outerCenter,
          innerCenter,
          iteration,
          pressure
        )
      );
  }

  return isoline;
}
