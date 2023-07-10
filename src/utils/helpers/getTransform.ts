export default function mirror(direction: number): string {
  switch (direction) {
    case 0: {
      return 'scale(1, 1)';
    }
    case 1: {
      return 'scale(-1, 1)';
    }
    case 2: {
      return 'scale(1, -1)';
    }
    case 3: {
      return 'scale(-1, -1)';
    }
  }
}
