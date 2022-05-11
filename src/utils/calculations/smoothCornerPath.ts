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
  let waveSize = height * (1-balance);
  let equal = waveSize / breaks;
  const waves = [];

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    // beginning of each wave
    const data = [`M0 0`,
      `C 0 0 0 ${waveSize + rndm(seed + stack) * 2 * velocity} 0 ${waveSize + rndm(seed + stack) * 2 * velocity - stack * distance * 5}`
    ];

    let previous;
    for (let n = 1; n < breaks; n++) {

      let x = n * equal
        + (rndm(seed + stack + n) - 0.5) * velocity
        + (rndm(seed + stack + n) - 0.5) * 50
        - stack * distance * 2
      
      let y = waveSize - n * equal
        + (rndm(seed + stack + n) - 0.5) * velocity
        + (rndm(seed + stack + n) - 0.5) * 50
        - stack * distance * 2

      const coords = {
        handle1: {
          x: previous ? previous.x - previous.handle2.x + previous.x: equal  + (rndm(seed + stack + n) - 0.5) * velocity - stack * distance * 3,
          y: previous ? previous.y - previous.handle2.y + previous.y: waveSize + (rndm(seed + stack + n) - 0.5) * velocity - stack * distance * 5,
        },
        handle2: {
          x: x - equal*0.3 - rndm(seed + stack + n) * 2 * velocity + stack * distance,
          y: y + equal*0.3 + rndm(seed + stack + n) * 2 * velocity - stack * distance,
        },
        x,
        y
      };

      previous = coords;

      // push path snippet to data array
      data.push(
        `C${coords.handle1.x} ${coords.handle1.y} ${coords.handle2.x} ${coords.handle2.y} ${coords.x} ${coords.y}`
      );
    }

    // if it's a filled wave, close of bottom
    data.push(`C `) &&
    // handle1 of last point
    data.push(`${previous.x - previous.handle2.x + previous.x  } ${previous.y - previous.handle2.y + previous.y } `) && 
    // handle2 of last point
    data.push(`${waveSize - stack * distance * 4} ${rndm(seed) * equal - stack * distance * 2 } `) &&
    // x and y of last point
    data.push(`${waveSize + rndm(seed) * velocity - stack * distance * 4 } 0 `) &&
    // close
    !stroke && data.push(`L0 0Z`);

    // push each wave to waves array
    waves.push(data.join(' '));
  }
  return waves;
}
