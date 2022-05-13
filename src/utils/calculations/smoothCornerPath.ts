// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as rndm } from './randomNumber';
import { getShrinkingSections } from './cornerWaveSectionDivider';

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
  breaks = 4
  const sectionCuts = getShrinkingSections(breaks, waveSize);

  // save stacks of waves here
  const waves = [];

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    // calculate height offset for each stack
    const stackHeightOffset = stack * distance;

    // beginning of each wave
    const data = [`M0 0`, `C 0 0 0 ${waveSize - stackHeightOffset} 0 ${waveSize - stackHeightOffset}`];

    // save previous wave for handle2
    let previous;

    // generate random waves based on passed parameters
    for (let waveNo = 0; waveNo < breaks; waveNo++) {

      // get sectionEnds
      const sectionEnds = sectionCuts[waveNo]
      
      // calculate random components for y and handles
      const randomPartX = (rndm(seed + stack + waveNo + breaks) - 0.5) * velocity;
      const randomPartY = (rndm(seed + stack + waveNo) - 0.5) * velocity;

      // calculate the coordinates
      let x = sectionEnds[0] - stackHeightOffset
      let y = sectionEnds[1] - stackHeightOffset

      const coords = {
        handle1: {
          x: previous
            ? previous.x /* + (previous.x - previous.handle2.x) */
            : x,
          y: previous
            ? previous.y /* + (previous.y - previous.handle2.y) */
            : y ,
        },
        handle2: {
          x: x , 
          y: y ,
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
    !stroke && data.push(`L0 0Z`);

    // push each wave to waves array
    waves.push(data.join(' '));
  }
  return waves;
}
