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
      `C 0 0 0 ${waveSize - stack * distance} 0 ${waveSize - stack * distance}`
    ];

    let previous;
    for (let n = 1; n < breaks; n++) {

      let x = n * equal - stack * distance
        + (rndm(seed + stack + n) - 0.5) * velocity * 3
        
      
      let y = waveSize - n * equal - stack * distance
        + (rndm(seed + stack + n + 1) - 0.5) * velocity * -3
        

      const coords = {
        handle1: {
          x: previous ? previous.x - previous.handle2.x + previous.x: equal  + (rndm(seed + stack + n) - 0.5) * velocity - stack * distance - rndm(seed) * velocity,
          y: previous ? previous.y - previous.handle2.y + previous.y: waveSize + (rndm(seed + stack + n + 1) - 0.5) * velocity - stack * distance - rndm(seed) * velocity,
        },
        handle2: {
          x: x - equal*0.3 - rndm(seed + stack + n) * 2 * velocity + stack * 20,
          y: y + equal*0.3 + rndm(seed + stack + n + 1) * 2 * velocity - stack * 20,
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

    // Last Coordinate
    

    // if it's a filled wave, close of bottom
    data.push(`C `) &&
    // handle1 of last point
    data.push(`${previous.x - previous.handle2.x + previous.x  } ${previous.y - previous.handle2.y + previous.y } `) && 
    // handle2 of last point
    data.push(`${waveSize - stack * distance} ${equal  + (rndm(seed + stack) - 0.5) * velocity - stack * distance - rndm(seed) * velocity} `) &&
    // x and y of last point
    data.push(`${waveSize - stack * distance } 0 `) &&
    // close
    !stroke && data.push(`L0 0Z`);

    // push each wave to waves array
    waves.push(data.join(' '));
  }
  return waves;
}
