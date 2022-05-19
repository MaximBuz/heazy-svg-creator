import { getBezier } from './../pathSmoothener';
// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as rndm } from '../randomNumber';
import { getCoordinates as getInitialCoords } from './waveSectionDivider';

function getRandomAnchors(
  seed: number,
  velocity: number,
  breaks: number,
  waveSize: number,
  width: number
): [number, number][] {
  // generate initial (non-random) x- and y-coordinates
  const pointCoordinates = getInitialCoords(breaks, width, waveSize);

  // save x and y coordinates for the wave
  const coordinates = [];

  for (let waveNo = 0; waveNo <= breaks; waveNo++) {
    // get X and Y coordinates
    const pointCoordinate = pointCoordinates[waveNo];
    let [initialX, initialY] = [pointCoordinate[0], pointCoordinate[1]];

    // calculate random components for y
    const random = rndm(seed + waveNo);
    const signedRandomPart = (random - 0.5) * velocity;

    // randomize y coordinate
    let y = initialY + (signedRandomPart * waveSize) / 3;
    let x = initialX;

    coordinates.push([x, y]);
  }
  return coordinates;
}

export function smoothWavePath(
  seed: number,
  width: number,
  height: number,
  balance: number,
  velocity: number,
  breaks: number,
  stacks: number,
  distance: number,
  stroke: boolean,
  smooth: number
): string[] {
  let initialWaveSize = height * (1 - balance);

  // save each full wave in here
  const waves = [];

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    const currentWaveSize = initialWaveSize + stack * distance;
    const anchorPoints = getRandomAnchors(seed * (stack + 1), velocity, breaks, currentWaveSize, width);

    let commands;
    let path;

    if (stroke) {
      //@ts-ignore
      commands = anchorPoints.reduce((acc, point, index, array) => {
        return `${acc} ${getBezier(point, index, array, smooth)}`; // change this
      });
      path = [`M${anchorPoints[0][0]} ${anchorPoints[0][1]}`, commands];
    } else {
      //@ts-ignore
      commands = anchorPoints.reduce((acc, point, index, array) => {
        return `${acc} ${getBezier(point, index, array, smooth)}`; // change this
      });
      path = [`M0 0`, commands];
      path.push(`L${width} ${height}`, `L0 ${height}Z`);
    }
    waves.push(path.join(' '));
  }
  return waves;
}
