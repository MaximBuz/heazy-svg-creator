// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as rndm } from './randomNumber';
import { getCoordinates } from './cornerWaveSectionDivider';

interface IHandleCoords {
  x?: number;
  y?: number;
}

interface ICubicBezierCoords {
  handle1: IHandleCoords
  handle2: IHandleCoords
  x: number;
  y: number;
}

export function edgyCornerPath(
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
  let waveSize = ((width + height) / 2) * (1 - balance);
  const pointCoordinates = getCoordinates(breaks, waveSize);

  // save stacks of waves here
  const waves = [];

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    // calculate height offset for each stack
    const stackHeightOffset = stack * distance;

    // beginning of each wave
    const data = [`M0 0`];

    /* 
    ----------------------
    HERE HANDLE IF STROKE!!
    ----------------------
    */

    // save previous wave for a smooth handle2
    let previous;

    // generate random waves based on passed parameters
    for (let waveNo = 0; waveNo < breaks; waveNo++) {
      
      // get X and Y coordinates
      const pointCoordinate = pointCoordinates[waveNo];
      let [x, y] = [pointCoordinate[0] - stackHeightOffset, pointCoordinate[1] - stackHeightOffset];
      
      // calculate random components for y and handles
      const randomPartX = (rndm(seed + stack + waveNo + breaks) - 0.5) * velocity;
      const randomPartY = (rndm(seed + stack + waveNo) - 0.5) * velocity;

      // randomize X and Y coordinates
      x += randomPartX * waveSize / 5;
      y += randomPartY * waveSize / 5;

      // construct BezierCurve (C) coordinates
      const coords: Partial<ICubicBezierCoords> = {}

      coords.x = x
      coords.y = y

      coords.handle1 = {}
      coords.handle1.x = previous?.x /* + (previous.x - previous.handle2.x) */
      coords.handle1.y = previous?.y /* + (previous.y - previous.handle2.y) */
      
      coords.handle2 = {}
      coords.handle2.x = x
      coords.handle2.y = y

      // handle if first point (needs to be at the edge of the canvas)
      if (waveNo === 0) {
        coords.handle1.x = 0;
        coords.handle1.y = 0;

        coords.handle2.x = 0 /* some random number to the right */;
        coords.handle2.y = waveSize - stackHeightOffset;

        coords.x = 0;
        coords.y = waveSize - stackHeightOffset;
      }

      // handle if last point (needs to be at the edge of the canvas)
      if (waveNo + 1 === breaks) {
        coords.handle2.x = waveSize - stackHeightOffset; 
        coords.handle2.y = 0 /* some random number to the right */;

        coords.x = waveSize - stackHeightOffset;
        coords.y = 0;
      }

      // save previous wave for a smooth handle2
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
