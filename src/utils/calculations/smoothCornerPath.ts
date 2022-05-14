// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as rndm } from './randomNumber';
import { getCoordinates as getInitialCoords } from './cornerWaveSectionDivider';
import { getBezier } from './pathSmoothener';

// generates all anchor points (randomized) of a wave (not-smooth)
function getRandomAnchors(
  seed: number,
  velocity: number,
  breaks: number,
  waveSize: number
): [number, number][] {
  // generate initial (non-random) x- and y-coordinates
  const pointCoordinates = getInitialCoords(breaks, waveSize);

  // save x and y coordinates for the wave
  const coordinates = [];

  for (let waveNo = 0; waveNo < breaks; waveNo++) {

    // get X and Y coordinates
    const pointCoordinate = pointCoordinates[waveNo];
    let [initialX, initialY] = [pointCoordinate[0], pointCoordinate[1]];

    // calculate random components for y and handles
    const random = rndm(seed + waveNo);
    const signedRandomPart = (random - 0.5) * velocity;

    // randomize X and Y coordinates
    let x = initialX + (signedRandomPart * waveSize) / 3;
    let y = initialY + (signedRandomPart * waveSize) / 3;

    // handle if first point (needs to be at the edge of the canvas)
    if (waveNo === 0) {
      x = 0;
      y = waveSize + (signedRandomPart * waveSize) / 5;
    }

    // handle if last point (needs to be at the edge of the canvas)
    if (waveNo + 1 === breaks) {
      x = waveSize + (signedRandomPart * waveSize) / 5;
      y = 0;
    }

    coordinates.push([x, y]);
  }
  return coordinates;
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
  stroke: boolean,
  smoothing: number
): string[] {
  let initialWaveSize = ((width + height) / 2) * (1 - balance);

  // save each full wave in here
  const waves = [];

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    const currentWaveSize = initialWaveSize - stack * distance
    const anchorPoints = getRandomAnchors(seed * stack, velocity, breaks, currentWaveSize);

    let commands;
    let path;

    // In case the wave is not filled, remove start and end line on the edges
    if (stroke) {
      //@ts-ignore
      commands = anchorPoints.reduce((acc, point, index, array) => {
        return `${acc} ${getBezier(point, index, array, smoothing)}`;
      })
      path = [`M0 ${anchorPoints[0][1]}`, commands];
    } else {
      //@ts-ignore
      commands = anchorPoints.reduce((acc, point, index, array) => {
        return `${acc} ${getBezier(point, index, array, smoothing)}`;
      })
      path = [`M0 0`, commands];
      path.push(`L0 0Z`);
    }
    
    // push each wave to waves array
    waves.push(path.join(' '));
  }
  return waves;
}
