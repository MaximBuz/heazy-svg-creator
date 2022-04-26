// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber } from './randomNumber';

export function smoothWavePath (
  seed: number = 0,
  width: number = 540,
  height: number = 960,
  balance: number = 0.5,
  velocity: number = 50,
  breaks: number = 2,
) {
  let waveHeight = height * balance
  const equal = width / breaks;
  const data = [`M0 ${waveHeight}`];
   for (let n = 1; n <= breaks; n++) {
    const random = (generateRandomNumber(seed+n) - 0.5) * velocity;
    const smooth = {
     handle: {
      x: random < 0 ? (n - 1) * equal + equal / 2 - random : (n - 1) * equal + equal / 2 + random,
      y: waveHeight + random,
     },
     x: n * equal,
     y: waveHeight + (generateRandomNumber(seed+2*n) - 0.5) * velocity,
    };
    data.push(`S${smooth.handle.x} ${smooth.handle.y} ${smooth.x} ${smooth.y}`);
   }
  data.push(`L${width} ${height}`, `L0 ${height}Z`);
  return data.join(' ')

}