export function zip(a, b) {
  return a.map((k, i) => [k, b[i]]);
}
