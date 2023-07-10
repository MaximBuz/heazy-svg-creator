// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as random } from '../../helpers/randomNumber';

export function markerPath(
  seed: number,
  width: number,
  markerHeight: number,
  zickZacks: number,
  padding: number,
  mirror: boolean,
  yPosition: number,
  pressure: number
): string {
  const equal = (width - padding * 2) / zickZacks;
  const path = [];

  // save the max and min marker height
  let minY = +Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < zickZacks; i++) {
    let rndm;
    mirror
      ? (rndm = i % 2 !== 0 ? random(seed + i) - 1.7 : random(seed + i) + 0.7)
      : (rndm = i % 2 === 0 ? random(seed + i) - 1.8 : random(seed + i) + 0.8);
    const x = equal + pressure + (random(seed + i) - 0.5) * equal;
    const y = rndm * markerHeight * 10;

    if (y < minY) minY = y;
    if (y > maxY) maxY = y;

    path.push(`l${x} ${y}`);
  }

  // add the starting point
  path.unshift(`M ${padding} ${yPosition}`);

  return path.join(' ');
}
