// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber } from './randomNumber';

export function blobPath(
  seed: number,
  width: number,
  height: number,
  velocity: number,
  size: number,
) {
  // init path
  const path = [];

  // Generate a random number
  const random = Math.random();

  // calculate center point
  const center = {
    x: width / 2,
    y: height / 2,
  };
 
  // calculate starting point
  const start = {
    x: center.x - (generateRandomNumber(seed) * (velocity + size)),
    y: center.y + (generateRandomNumber(seed + random) * (velocity + size)),
  }
  path.push(`M ${start.x} ${start.y}`)

  // calculate first shorthand curve
  const first = {
    x: start.x, // has to be at the same point as the start to stay smooth
    y: start.y,
    handle: {
      x: start.x + (generateRandomNumber(seed + random * 2) * (velocity + size)),
      y: start.y + (generateRandomNumber(seed + random * 2) * (velocity + size))
    }
  }
  path.push(`S ${first.handle.x} ${first.handle.y} ${first.x} ${first.y}`)

  // calculate the second (top) shorthand curve
  const second = {
    x: center.x - (generateRandomNumber(seed) * (velocity / 2 + size)),
    y: center.y - (generateRandomNumber(seed + random * 3) * (velocity + size)),
    handle: {
      x: center.x - (generateRandomNumber(seed) * (velocity * 3 + size)),
      y: center.y - (generateRandomNumber(seed + random * 4) * (velocity + size))
    }
  }
  path.push(`S ${second.handle.x} ${second.handle.y} ${second.x} ${second.y}`)


  // calculate the third (right) shorthand curve
  const third = {
    x: center.x + (generateRandomNumber(seed) * (velocity + size)),
    y: center.y + ((generateRandomNumber(seed + random) -0.5) * ((velocity + size))),
    handle: {
      x: center.x + (generateRandomNumber(seed) * (velocity * 2 + size)),
      y: center.y - (generateRandomNumber(seed + random) * ((velocity + size)))
    }
  }
  path.push(`S ${third.handle.x} ${third.handle.y} ${third.x} ${third.y}`)

  // close off the blob by adding the first shorthand curve again
  path.push(`S ${first.handle.x} ${first.handle.y} ${first.x} ${first.y} Z`)

  return path;
}
// M -2 1   |   S -1 3 -2 1   |   S -3 -4 0 -4   |   S 6 -2 4 0   |   S -1 3 -2 1