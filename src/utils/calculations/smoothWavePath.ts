// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber } from './randomNumber';

export function smoothWavePath (
  seed: number = 0,
  width: number = 540,
  height: number = 960,
  balance: number = 0.5,
  velocity: number = 50,
  breaks: number = 2,
  stacks: number = 4,
  distance: number = 5,
  stroke: boolean = false
) {
  let waveHeight = height * balance
  const equal = width / breaks;
  const waves = [];
  for (let stack = 0; stack <= stacks; stack++) {
    const data = [`M0 ${waveHeight + stack * distance * (stack * distance)}`];
    for (let n = 1; n <= breaks; n++) {
      const random = (generateRandomNumber(seed+stack+n) - 0.5) * velocity;
      const smooth = {
        handle: {
          x: random < 0 ? (n - 1) * equal + equal / 2 - random : (n - 1) * equal + equal / 2 + random,
          y: waveHeight + random + stack * distance * (stack * distance),
        },
        x: n * equal,
        y: waveHeight + (generateRandomNumber(seed+stack+2*n) - 0.5) * velocity + stack * distance * (stack * distance),
      };
      data.push(`S${smooth.handle.x} ${smooth.handle.y} ${smooth.x} ${smooth.y}`);
    }
    !stroke && data.push(`L${width} ${height}`, `L0 ${height}Z`);
    waves.push(data.join(" "));
  }
  return waves;
}