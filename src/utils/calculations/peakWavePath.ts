// calculates svg data attribute for wave with peaky peaks
import { generateRandomNumber } from './randomNumber';

export function peakWavePath(
  seed: number,
  width: number,
  height: number,
  balance: number,
  velocity: number,
  breaks: number,
  stacks: number,
  distance: number,
  stroke: boolean
) {
  let waveHeight = height * balance
  const equal = width / breaks;
  const waves = [];
  for (let stack = 0; stack <= stacks; stack++) {
    const data = [`M0 ${waveHeight + stack * distance * (stack * distance)}`];
    for (let n = 1; n <= breaks; n++) {
      data.push(`L${n * equal} ${waveHeight + (generateRandomNumber(seed+stack+2*n) - 0.5) * velocity + stack * distance * (stack * distance)}`);
    }
    !stroke && data.push(`L${width} ${height}`, `L0 ${height}Z`);
    waves.push(data.join(" "));
  }
  return waves;
}
