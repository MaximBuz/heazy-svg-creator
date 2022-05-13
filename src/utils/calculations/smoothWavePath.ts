// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as random } from './randomNumber';

export function smoothWavePath(
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
  let waveHeight = height * balance;
  let equal = width / breaks;
  const waves = [];

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    // calculate height offset for each stack
    const stackHeightOffset = stack * distance * (stack * distance);

    // beginning of each wave
    const data = [`M0 ${waveHeight + stackHeightOffset + (random(seed + stack) - 0.5) * velocity * equal}`];

    // save previous wave for handle2
    let previous;

    // generate random waves based on passed parameters
    for (let waveNo = 1; waveNo <= breaks; waveNo++) {
      // calculate random components for y and handles
      const randomPartX = random(seed + stack + waveNo + breaks)
      const randomPartY = (random(seed + stack + waveNo) - 0.5) * velocity;

      // calculate x and y of next point
      let x = waveNo * equal;
      let y = waveHeight + stackHeightOffset + (equal * randomPartY);

      const coords = {
        handle1: {
          x: previous
            ? previous.x + (previous.x - previous.handle2.x)
            : equal / 4  + (equal / 4 * randomPartX), // split 'equal' into 4 parts and go to right into second zone
          y: previous
            ? previous.y + (previous.y - previous.handle2.y)
            : waveHeight + stackHeightOffset + (equal/2 * randomPartY),
        },
        handle2: {
          x: x - equal / 4 - (equal / 4 * randomPartX), // split 'equal' into 4 parts and go to left into second to last zone
          y: y + randomPartY * 50,
        },
        x,
        y,
      };

      previous = coords;
      // push path snippet to data array
      data.push(
        `C${coords.handle1.x} ${coords.handle1.y} ${coords.handle2.x} ${coords.handle2.y} ${coords.x} ${coords.y}`
      );
    }

    // if it's a filled wave, close of bottom
    !stroke && data.push(`L${width} ${height}`, `L0 ${height}Z`);

    // push each wave to waves array
    waves.push(data.join(' '));
  }
  return waves;
}
