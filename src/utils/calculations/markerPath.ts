// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as random } from './randomNumber';

export function markerPath(
  seed: number,
  width: number,
  height: number,
  markerHeight: number,
  zickZacks: number
): string {
  const equal = width / zickZacks;
  const path = [`M ${100} ${height/2}`];

  for (let i = 0; i < zickZacks; i++) {
    let rndm = random(seed + i) - 0.5;
    path.push(`l${equal} ${rndm * markerHeight}`);
  }

  // close it off ?

  return path.join(' ');
}
