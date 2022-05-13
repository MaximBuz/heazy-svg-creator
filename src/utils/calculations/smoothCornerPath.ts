// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as rndm } from './randomNumber';

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
  let waveSize = height * (1 - balance);
  let equal = waveSize / breaks;
  const waves = [];

  velocity = 1;

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    // calculate height offset for each stack
    const stackHeightOffset = stack * distance;

    // beginning of each wave
    const data = [`M0 0`, `C 0 0 0 ${waveSize - stackHeightOffset} 0 ${waveSize - stackHeightOffset}`];

    // save previous wave for handle2
    let previous;

    // generate random waves based on passed parameters
    for (let waveNo = 1; waveNo < breaks; waveNo++) {
      // calculate random components for y and handles
      const randomPartX = (rndm(seed + stack + waveNo + breaks) - 0.5) * velocity;
      const randomPartY = (rndm(seed + stack + waveNo) - 0.5) * velocity;

      let x = waveNo * equal - stackHeightOffset - (equal / 1.5 * randomPartX);
      let y = waveSize - waveNo * equal - stackHeightOffset - (equal / 1.5 * randomPartY);

      const coords = {
        handle1: {
          x: previous
            ? previous.x + (previous.x - previous.handle2.x)
            : equal / 4 + (equal / 4) * randomPartX, // split 'equal' into 4 parts and go to right into second zone
          y: previous
            ? previous.y + (previous.y - previous.handle2.y)
            : waveSize + stackHeightOffset /* + (equal / 2) * randomPartY */,
        },
        handle2: {
          x: x - equal / 4 - (equal / 4) * randomPartX, // split 'equal' into 4 parts and go to left into second to last zone
          y: y + equal / 4 + (equal / 4) * randomPartY,
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

    // Last Coordinate

    // if it's a filled wave, close of bottom
    data.push(`C `) &&
      // handle1 of last point
      data.push(
        `${previous.x - previous.handle2.x + previous.x}
         ${previous.y - previous.handle2.y + previous.y} `
      ) &&
      // handle2 of last point
      data.push(
        `${waveSize - stackHeightOffset} 
         ${equal / 4 - (equal / 4) * rndm(seed) * velocity} `
      ) &&
      // x and y of last point
      data.push(`${waveSize - stackHeightOffset} 0 `) &&
      // close
      !stroke &&
      data.push(`L0 0Z`);

    // push each wave to waves array
    waves.push(data.join(' '));
  }
  return waves;
}
