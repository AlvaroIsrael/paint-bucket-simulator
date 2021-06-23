import IPixel from '../interfaces/IPixel';
import IPaintBucket from '../interfaces/IPaintBucket';
import Image from '../models/Image';

class PaintBucket implements IPaintBucket {
  private readonly image: Image;

  constructor(image: Image) {
    this.image = image;
  }

  private isEqual = (colorFromImage: string, colorToBeReplaced: string): boolean => {
    return colorFromImage === colorToBeReplaced;
  };

  private fill = ({ row, column }: IPixel, colorToReplaceWith: string, basePixelColor: string): void => {
    const currentPixelColor = this.image.getColor({ row, column });

    if (!this.isEqual(currentPixelColor, basePixelColor)) {
      return;
    }

    this.image.setColor({ row, column }, colorToReplaceWith);

    this.fill({ row: row - 1, column }, colorToReplaceWith, basePixelColor);
    this.fill({ row: row + 1, column }, colorToReplaceWith, basePixelColor);
    this.fill({ row, column: column - 1 }, colorToReplaceWith, basePixelColor);
    this.fill({ row, column: column + 1 }, colorToReplaceWith, basePixelColor);
  };

  paint = ({ row, column }: IPixel, colorToReplaceWith: string): Image => {
    const basePixelColor = this.image.getColor({ row, column });

    if (!basePixelColor) {
      return this.image;
    }

    if (this.isEqual(basePixelColor, colorToReplaceWith)) {
      return this.image;
    }

    this.fill({ row, column }, colorToReplaceWith, basePixelColor);

    return this.image;
  };
}

export default PaintBucket;
