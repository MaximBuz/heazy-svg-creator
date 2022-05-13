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
  let firstWaveSize = ((width + height) / 2) * (1 - balance);
  const pointCoordinates = getCoordinates(breaks, firstWaveSize);

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
      const currentWaveSize = firstWaveSize - stackHeightOffset;
      
      // get X and Y coordinates
      const pointCoordinate = pointCoordinates[waveNo];
      let [initialX, initialY] = [pointCoordinate[0] - stackHeightOffset, pointCoordinate[1] - stackHeightOffset];
      
      // calculate random components for y and handles
      const random = rndm(seed + stack + waveNo);
      const signedRandomPart = (random - 0.5) * velocity;
      const unsignedRandomPart = random * velocity;

      // randomize X and Y coordinates
      const x = initialX + signedRandomPart * currentWaveSize / 3 ;
      const y = initialY + signedRandomPart * currentWaveSize / 3 ;

      // construct BezierCurve (C) coordinates
      const coords: Partial<ICubicBezierCoords> = {}

      coords.x = x + signedRandomPart * currentWaveSize / 3 ;
      coords.y = y + signedRandomPart * currentWaveSize / 3 ;

      coords.handle1 = {}
      coords.handle1.x = previous?.x + (previous?.x - previous?.handle2.x)
      coords.handle1.y = previous?.y + (previous?.y - previous?.handle2.y)
      
      coords.handle2 = {}
      coords.handle2.x = x - ((x - previous?.x) / 4) - ((x - previous?.x) / 4) * unsignedRandomPart;
      coords.handle2.y = y + ((previous?.y - y) / 4) + ((previous?.y - y) / 4) * unsignedRandomPart;

      // handle if first point (needs to be at the edge of the canvas)
      if (waveNo === 0) {
        coords.handle1.x = 0;
        coords.handle1.y = 0;

        coords.handle2.x = 0;
        coords.handle2.y = currentWaveSize;

        coords.x = 0;
        coords.y = currentWaveSize + signedRandomPart * currentWaveSize / 5;
      }

      // handle first handle from edge going slightly to the right
      if (waveNo === 1) {
        coords.handle1.x = 0 + unsignedRandomPart * currentWaveSize / 3;;
        coords.handle1.y = currentWaveSize + signedRandomPart * currentWaveSize / 5;
      }

      // handle if last point (needs to be at the edge of the canvas)
      if (waveNo + 1 === breaks) {
        coords.handle2.x = currentWaveSize; 
        coords.handle2.y = 0 + unsignedRandomPart * currentWaveSize / 3;

        coords.x = currentWaveSize + signedRandomPart * currentWaveSize / 5;;;
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
