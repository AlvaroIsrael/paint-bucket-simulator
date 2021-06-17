export const isNegative = (number: number): boolean => {
  return number < 0;
};

const isWithinRowBoundaries = (number: number, image: string[][]): boolean => {
  return number > image.length - 1;
};

export const isValidRow = (row: number, image: string[][]): boolean => {
  return !isNegative(row) && !isWithinRowBoundaries(row, image);
};

const isWithinColumnBoundaries = (number: number, image: string[][]): boolean => {
  return number > image[0].length - 1;
};

export const isValidColumn = (column: number, image: string[][]): boolean => {
  return !isNegative(column) && !isWithinColumnBoundaries(column, image);
};

export const isEqual = (colorFromImage: string, colorToBeReplaced: string): boolean => {
  return colorFromImage === colorToBeReplaced;
};
