// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as rndm } from './randomNumber';
import { getCoordinates } from './cornerWaveSectionDivider';

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
  let waveSize = (width + height) / 2 * (1 - balance);
  const pointCoordinates = getCoordinates(breaks, waveSize);

  // save stacks of waves here
  const waves = [];

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    // calculate height offset for each stack
    const stackHeightOffset = stack * distance;

    // beginning of each wave
    const data = [`M0 0`, `C 0 0 0 ${waveSize - stackHeightOffset} 0 ${waveSize - stackHeightOffset}`];

    /* 
    ----------------------
    HERE HANDLE IF STROKE!!
    ----------------------
    */

    // save previous wave for a smooth handle2
    let previous;

    // generate random waves based on passed parameters
    for (let waveNo = 0; waveNo < breaks; waveNo++) {
      
      // calculate random components for y and handles
      const randomPartX = (rndm(seed + stack + waveNo + breaks) - 0.5) * velocity;
      const randomPartY = (rndm(seed + stack + waveNo) - 0.5) * velocity;
   
      // get X and Y coordinates
      const pointCoordinate = pointCoordinates[waveNo]
      const [x, y] = [pointCoordinate[0] - stackHeightOffset, pointCoordinate[1] - stackHeightOffset]

      // construct full BezierCurve (C) coordinates
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

      // save previous wave for a smooth handle2
      previous = coords;

      // push path snippet to data array
      data.push(`C${coords.handle1.x} ${coords.handle1.y} ${coords.handle2.x} ${coords.handle2.y} ${coords.x} ${coords.y}`);
    }

    // if it's a filled wave, close of bottom
    !stroke && data.push(`L0 0Z`);

    // push each wave to waves array
    waves.push(data.join(' '));
  }
  return waves;
}
