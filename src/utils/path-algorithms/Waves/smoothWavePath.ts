import { getBezier } from '../pathSmoothener';
// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber as rndm } from '../../helpers/randomNumber';
import { getCoordinates as getInitialCoords } from './waveSectionDivider';
import { AnchorPoint } from '../types';

function getRandomAnchors(
  seed: number,
  velocity: number,
  breaks: number,
  waveSize: number,
  width: number
): AnchorPoint[] {
  // generate initial (non-random) x- and y-coordinates
  const pointCoordinates = getInitialCoords(breaks, width, waveSize);

  // save x and y coordinates for the wave
  const coordinates = [];

  for (let waveNo = 0; waveNo <= breaks; waveNo++) {
    // get X and Y coordinates
    const pointCoordinate = pointCoordinates[waveNo];
    const [initialX, initialY] = [pointCoordinate[0], pointCoordinate[1]];

    // calculate random components for y
    const random = rndm(seed + (waveNo + 1));
    const signedRandomPart = (random - 0.5) * velocity;

    // randomize y coordinate
    const y = initialY + (signedRandomPart * waveSize) / 3;
    const x = initialX;

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
  solid: boolean,
  smoothing: number
): string[] {
  const initialWaveSize = height * (1 - balance);

  // save each full wave in here
  const waves: string[] = [];

  // generate several stacked waves
  for (let stack = 0; stack <= stacks; stack++) {
    const currentWaveSize = initialWaveSize + stack * distance;
    const anchorPoints = getRandomAnchors(
      seed * (stack + 1),
      velocity,
      breaks,
      currentWaveSize,
      width
    );

    const commands = anchorPoints
      .map((point, index) =>
        getBezier({ point, index, anchorPoints, smoothing })
      )
      .join(' ');

    const path = solid
      ? ['M0 0', commands, `L${width} ${height}`, `L0 ${height}Z`]
      : [`M${anchorPoints[0][0]} ${anchorPoints[0][1]}`, commands]; // In case the wave is not filled, remove start and end line on the edges

    waves.push(path.join(' '));
  }
  return waves;
}
