// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber } from './randomNumber';

export function smoothCornerPath(
  seed: number,
  width: number,
  height: number,
  balance: number,
  velocity: number,
  breaks: number,
  stacks: number,
  distance: number,
  stroke: boolean
): string[] {
  breaks = 3;
  velocity = 50;
  let waveSize = height * balance;
  let equal = waveSize / breaks;
  const waves = [];

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    // beginning of each wave
    const data = [
      `M0 0`,
      `C 0 0 0 ${waveSize} 0 ${waveSize}`,
    ]; // do some randomness on the handles!
    // generate random waves based on passed parameters
    let previous;
    for (let n = 1; n <= breaks; n++) {
      const random = (generateRandomNumber(seed + stack + n) - 0.5) * velocity;

      const coords = {
        handle1: {
          x: previous ? (previous.x - previous.handle2.x) + previous.x : generateRandomNumber(seed),
          y: previous ? (previous.y - previous.handle2.y) + previous.y : generateRandomNumber(seed),
        },
        handle2: {
          x: n * equal + random,
          y: waveSize - n * equal + random,
        },
        x: n * equal + random,
        y: waveSize - n * equal + random,
      };

      previous = coords;

      // push path snippet to data array
      data.push(
        `C${coords.handle1.x} ${coords.handle1.y} ${coords.handle2.x} ${coords.handle2.y} ${coords.x} ${coords.y}`
      );
    }

    // if it's a filled wave, close of bottom
    !stroke && data.push(`L0 0Z`);

    // push each wave to waves array
    waves.push(data.join(' '));
  }
  return waves;
}
