// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as random } from '../../helpers/randomNumber';

export function bubblePath(
  seed: number,
  width: number,
  height: number,
  velocity: number,
  size: number
) {
  // calculate center point
  const center = {
    x: width / 2,
    y: height / 2,
  };

  // Init random constants for handles
  const randomRightHandle = (random(seed) - 0.5) * ((velocity / 100) * size);
  const randomBottomHandle =
    (random(seed + 1) - 0.5) * ((velocity / 100) * size);
  const randomLeftHandle = (random(seed + 2) - 0.5) * ((velocity / 100) * size);
  const randomTopHandle = (random(seed + 3) - 0.5) * ((velocity / 100) * size);

  // Init random constants for handles
  const randomRight = (random(seed + 4) - 0.5) * ((velocity / 100) * size);
  const randomBottom = (random(seed + 5) - 0.5) * ((velocity / 100) * size);
  const randomLeft = (random(seed + 6) - 0.5) * ((velocity / 100) * size);
  const randomTop = (random(seed + 7) - 0.5) * ((velocity / 100) * size);

  const start = `M ${center.x + size + randomRight} ${center.y + randomRight}`;

  const fourCoords = [
    {
      x: center.x + randomBottom,
      y: center.y + size + randomBottom,
      h1: {
        x: center.x + size - randomRightHandle + randomRight,
        y: center.y + size / 2 + randomRight,
      },
      h2: {
        x: center.x + size / 2 + randomBottom,
        y: center.y + size + randomBottomHandle + randomBottom,
      },
    },
    {
      x: center.x - size + randomLeft,
      y: center.y + randomLeft,
      h1: {
        x: center.x - size / 2 + randomBottom,
        y: center.y + size - randomBottomHandle + randomBottom,
      },
      h2: {
        x: center.x - size + randomLeftHandle + randomLeft,
        y: center.y + size / 2 + randomLeft,
      },
    },
    {
      x: center.x + randomTop,
      y: center.y - size + randomTop,
      h1: {
        x: center.x - size - randomLeftHandle + randomLeft,
        y: center.y - size / 2 + randomLeft,
      },
      h2: {
        x: center.x - size / 2 + randomTop,
        y: center.y - size + randomTopHandle + randomTop,
      },
    },
    {
      x: center.x + size + randomRight,
      y: center.y + randomRight,
      h1: {
        x: center.x + size / 2 + randomTop,
        y: center.y - size - randomTopHandle + randomTop,
      },
      h2: {
        x: center.x + size + randomRightHandle + randomRight,
        y: center.y - size / 2 + randomRight,
      },
    },
  ];

  return (
    start +
    fourCoords
      .map((c) => ` C${c.h1.x} ${c.h1.y} ${c.h2.x} ${c.h2.y} ${c.x} ${c.y}`)
      .join(' ')
  );
}
