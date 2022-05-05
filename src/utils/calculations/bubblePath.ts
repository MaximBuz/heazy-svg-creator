// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber } from './randomNumber';

export function bubblePath(seed: number, width: number, height: number, velocity: number, size: number) {
  size = 100;
  let center = { x: 0, y: 0 };
  let start = `M ${center.x + size} ${center.y}`;
  let coords = [
    {
      x: center.x,
      y: center.y + size,
      h1: { x: center.x + size, y: center.y + size / 2 },
      h2: { x: center.x + size / 2, y: center.y + size },
    },
    {
      x: center.x - size,
      y: center.y,
      h1: { x: center.x - size / 2, y: center.y + size },
      h2: { x: center.x - size, y: center.y + size / 2 },
    },
    {
      x: center.x,
      y: center.y - size,
      h1: { x: center.x - size, y: center.y - size / 2 },
      h2: { x: center.x - size / 2, y: center.y - size },
    },
    {
      x: center.x + size,
      y: center.y,
      h1: { x: center.x + size / 2, y: center.y - size },
      h2: { x: center.x + size, y: center.y - size / 2 },
    },
  ];

  return start + coords.map((c) => ` C${c.h1.x} ${c.h1.y} ${c.h2.x} ${c.h2.y} ${c.x} ${c.y}`).join(' ');
}
// M -2 1   |   S -1 3 -2 1   |   S -3 -4 0 -4   |   S 6 -2 4 0   |   S -1 3 -2 1
