// https://stackoverflow.com/questions/1186414/whats-the-algorithm-to-calculate-aspect-ratio
export function getAspectRatio(val: number, lim: number): number[] {
  let lower = [0, 1];
  let upper = [1, 0];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const mediant = [lower[0] + upper[0], lower[1] + upper[1]];

    if (val * mediant[1] > mediant[0]) {
      if (lim < mediant[1]) {
        return upper;
      }
      lower = mediant;
    } else if (val * mediant[1] === mediant[0]) {
      if (lim >= mediant[1]) {
        return mediant;
      }
      if (lower[1] < upper[1]) {
        return lower;
      }
      return upper;
    } else {
      if (lim < mediant[1]) {
        return lower;
      }
      upper = mediant;
    }
  }
}
