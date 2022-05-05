// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber } from './randomNumber';

export function smoothWavePath(
  seed: number,
  width: number,
  height: number,
  balance: number,
  velocity: number,
  breaks: number,
  stacks: number,
  distance: number,
  stroke: boolean,
  direction: number
): string[] {
  let waveHeight = height * balance;
  let equal = width / breaks;
  const waves = [];

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    // beginning of each wave
    const data = [`M0 ${waveHeight + stack * distance * (stack * distance)}`];
    // generate random waves based on passed parameters
    for (let n = 1; n <= breaks; n++) {
      const random = (generateRandomNumber(seed + stack + n) - 0.5) * velocity;
      const smooth = {
        handle: {
          x: random < 0 ? (n - 1) * equal + equal / 2 - random : (n - 1) * equal + equal / 2 + random,
          y: waveHeight + random + stack * distance * (stack * distance),
        },
        x: n * equal,
        y:
          waveHeight +
          (generateRandomNumber(seed + stack + 2 * n) - 0.5) * velocity +
          stack * distance * (stack * distance),
      };

      // push path snippet to data array
      data.push(`S${smooth.handle.x} ${smooth.handle.y} ${smooth.x} ${smooth.y}`);
    }

    // if it's a filled wave, close of bottom
    !stroke && data.push(`L${width} ${height}`, `L0 ${height}Z`);

    // push each wave to waves array
    waves.push(data.join(' '));
  }
  return waves;
}
