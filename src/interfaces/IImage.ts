import IPixel from './IPixel';

interface IImage {
  getColor({ row, column }: IPixel): string;

  setColor({ row, column }: IPixel, color: string): void;

  isValid({ row, column }: IPixel): boolean;

  draw(): string;
}

export default IImage;
