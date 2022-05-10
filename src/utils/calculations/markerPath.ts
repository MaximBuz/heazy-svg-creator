// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as random } from './randomNumber';

export function markerPath(
  seed: number,
  width: number,
  height: number,
  markerHeight: number,
  zickZacks: number,
  padding: number,
  mirror: boolean
): string {
  mirror = false;
  const equal = (width - padding * 2) / zickZacks;
  const path = [`M ${padding} ${mirror ? height / 2 - markerHeight * 5 : height / 2 + markerHeight * 5}`];

  for (let i = 0; i < zickZacks; i++) {
    let rndm;
    mirror
      ? (rndm = i % 2 !== 0 ? random(seed + i) - 1.7 : random(seed + i) + 0.7)
      : (rndm = i % 2 === 0 ? random(seed + i) - 1.7 : random(seed + i) + 0.7);
    const x = equal;
    const y = rndm * markerHeight * 10;

    path.push(`l${x} ${y}`);
  }

  // close it off ?

  return path.join(' ');
}
