import log from 'debug';
import IPixel from './interfaces/IPixel';
import { isEqual, isValidColumn, isValidRow } from './shared/utils';

const fill = (letter: string[][], { row, column }: IPixel, colorToBeReplacedWith: string, currentColor: string) => {
  if (!isValidRow(row, letter)) {
    return;
  }

  if (!isValidColumn(column, letter)) {
    return;
  }

  const colorFromCurrentPixelAtImage = letter[row][column];

  if (!isEqual(colorFromCurrentPixelAtImage, currentColor)) {
    return;
  }

  letter[row][column] = colorToBeReplacedWith;

  fill(letter, { row: row - 1, column }, colorToBeReplacedWith, currentColor);
  fill(letter, { row: row + 1, column }, colorToBeReplacedWith, currentColor);
  fill(letter, { row, column: column - 1 }, colorToBeReplacedWith, currentColor);
  fill(letter, { row, column: column + 1 }, colorToBeReplacedWith, currentColor);
};

const floodFill = (letter: string[][], { row, column }: IPixel, colorToBeReplacedWith: string) => {
  const currentColor = letter[row][column];

  if (isEqual(currentColor, colorToBeReplacedWith)) {
    return letter;
  }

  fill(letter, { row, column }, colorToBeReplacedWith, currentColor);

  return letter;
};

const paintBucket = () => {
  const letter: string[][] = [
    ['_', '#', '#', '#', '_', '_'],
    ['_', '#', '_', '_', '#', '_'],
    ['_', '#', '#', '#', '_', '_'],
    ['_', '#', '_', '_', '_', '_'],
  ];

  // Proposed test cases.
  log.log(floodFill(letter, { row: 0, column: 1 } as IPixel, 'o'));
  // log.log(floodFill(letter, { row: 1, column: 3 } as IPixel, 'o'));
  // log.log(floodFill(letter, { row: 1, column: 3 } as IPixel, '#'));

  process.exit(0);
};

paintBucket();
