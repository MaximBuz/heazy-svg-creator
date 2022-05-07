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
  breaks = 1;
  let waveStart = height * balance;
  let waveWidth = waveStart;
  let equal = Math.sqrt(waveStart ** 2 + waveWidth ** 2) / breaks;
  const waves = [];

  console.log(height);
  console.log(waveStart);

  /* 
  
  START FROM 0, 0, it will be so much easier to reason about!!
  
  */

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    // beginning of each wave
    const data = [`M0 ${waveStart + stack * distance * (stack * distance)}`];
    // generate random waves based on passed parameters
    for (let n = 1; n <= breaks; n++) {
      const random = (generateRandomNumber(seed + stack + n) - 0.5) * velocity;
      const smooth = {
        handle: {
          x: random < 0 ? (n - 1) * equal + equal / 2 - random : (n - 1) * equal + equal / 2 + random,
          y: waveStart + random + stack * distance * (stack * distance),
        },
        x: n * equal,
        y: n * equal,
        // +
        // (generateRandomNumber(seed + stack + 2 * n) - 0.5) * velocity +
        // stack * distance * (stack * distance),
      };

      // push path snippet to data array
      data.push(`S${smooth.handle.x} ${smooth.handle.y} ${smooth.x} ${smooth.y}`);
    }

    // if it's a filled wave, close of bottom
    !stroke && data.push(`L0 ${height}Z`);

    // push each wave to waves array
    waves.push(data.join(' '));
  }
  return waves;
}
