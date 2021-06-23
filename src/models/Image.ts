import IImage from '../interfaces/IImage';
import IPixel from '../interfaces/IPixel';

class Image implements IImage {
  private readonly pixels: string[][];

  constructor(pixels: string[][]) {
    this.pixels = pixels;
  }

  getColor = ({ row, column }: IPixel): string => {
    return this.isValid({ row, column }) ? this.pixels[row][column] : '';
  };

  setColor = ({ row, column }: IPixel, color: string): void => {
    this.pixels[row][column] = color;
  };

  private isNegative = (number: number): boolean => {
    return number < 0;
  };

  private width = (): number => {
    return this.pixels.length > 0 ? this.pixels.length - 1 : 0;
  };

  private height = (): number => {
    return this.pixels.length > 0 ? this.pixels[0].length - 1 : 0;
  };

  private isWithinRowBoundaries = (number: number): boolean => {
    return number > this.width();
  };

  private isWithinColumnBoundaries = (number: number): boolean => {
    return number > this.height();
  };

  private isValidRow = (row: number): boolean => {
    return !this.isNegative(row) && !this.isWithinRowBoundaries(row);
  };

  private isValidColumn = (column: number): boolean => {
    return !this.isNegative(column) && !this.isWithinColumnBoundaries(column);
  };

  isValid = ({ row, column }: IPixel): boolean => {
    return this.isValidRow(row) && this.isValidColumn(column);
  };

  draw = (): string => {
    let rowPixel = '\n';
    this.pixels.forEach(row => {
      row.forEach(pixel => {
        rowPixel = rowPixel.concat(pixel);
      });
      rowPixel = rowPixel.concat('\n');
    });

    return rowPixel;
  };
}

export default Image;
