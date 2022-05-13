const zip = (a, b) => a.map((k, i) => [k, b[i]]);

export function getShrinkingSections (sections:number, waveSize:number): [number, number][] {
  let remainingWaveSize = waveSize;
  const cuts = [];

  for (let cut = 1; cut < sections; cut++) {
    let sectionSize = remainingWaveSize / 3;
    cuts.push(sectionSize);
    remainingWaveSize = remainingWaveSize - sectionSize;
  }

  cuts.forEach((_, index) => (cuts[index] = Math.floor(cuts[index] + remainingWaveSize / (sections - 1))));
  let previousSum = 0;

  const result = cuts.map((item) => (previousSum += item))
  result.unshift(0);

  const resultRev = Array.from(result).reverse()
  return zip(result, resultRev);
}
