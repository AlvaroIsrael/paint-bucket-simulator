import Image from '../models/Image';
import PaintBucket from '../services/PaintBucket';
import IPixel from '../interfaces/IPixel';

const pixels: string[][] = [
  ['_', '#', '#', '#', '_', '_'],
  ['_', '#', '_', '_', '#', '_'],
  ['_', '#', '#', '#', '_', '_'],
  ['_', '#', '_', '_', '_', '_'],
];

let image: Image;
let paintBucket: PaintBucket;

describe('Paint Bucket tool unity tests', () => {
  beforeEach(() => {
    image = new Image(pixels);
    paintBucket = new PaintBucket(image);
  });

  describe('Image.ts', () => {
    describe('getColor', () => {
      it('Should return a string representing the current pixel color.', () => {
        const fristPixelColor = pixels[0][0];
        const imagePixel = { row: 0, column: 0 } as IPixel;
        const imagePixelColor = image.getColor(imagePixel);

        expect(fristPixelColor).toEqual(imagePixelColor);
      });
    });

    describe('setColor', () => {
      it('Should be able to set the color from a pixel.', () => {
        const imagePixel = { row: 0, column: 0 } as IPixel;
        image.setColor(imagePixel, '*');
        const imagePixelColor = image.getColor(imagePixel);

        expect(imagePixelColor).toEqual('*');
        image.setColor(imagePixel, '_');
      });
    });

    describe('isValid', () => {
      it('Should return [false] if the pixel row is a negative number.', () => {
        const imagePixel = { row: -1, column: 0 } as IPixel;
        const isValidImage = image.isValid(imagePixel);

        expect(isValidImage).toBeFalsy();
      });

      it('Should return [false] if the pixel column is a negative number.', () => {
        const imagePixel = { row: 0, column: -1 } as IPixel;
        const isValidImage = image.isValid(imagePixel);

        expect(isValidImage).toBeFalsy();
      });

      it('Should return [false] if the row number is outside image width boundaries.', () => {
        const imagePixel = { row: 10, column: 0 } as IPixel;
        const isValidImage = image.isValid(imagePixel);

        expect(isValidImage).toBeFalsy();
      });

      it('Should return [false] if the column number is outside image height boundaries.', () => {
        const imagePixel = { row: 0, column: 10 } as IPixel;
        const isValidImage = image.isValid(imagePixel);

        expect(isValidImage).toBeFalsy();
      });

      it('Should return [true] if the pixel is valid.', () => {
        const imagePixel = { row: 0, column: 0 } as IPixel;
        const isValidImage = image.isValid(imagePixel);

        expect(isValidImage).toBeTruthy();
      });
    });

    describe('draw', () => {
      it('Should return a formated string, representing an image, that can be printed in the terminal.', () => {
        const imageString = image.draw();

        expect(imageString).toEqual('\n_###__\n_#__#_\n_###__\n_#____\n');
      });
    });
  });

  describe('PaintBucket.ts', () => {
    describe('paint', () => {
      it('Should return the unmodified image itself if the selected pixel color and the new color are the same.', () => {
        const imagePixel = { row: 0, column: 0 } as IPixel;
        const colorToBeReplacedWith = image.getColor(imagePixel);
        const newColoredImage = paintBucket.paint(imagePixel, colorToBeReplacedWith);

        expect(image).toEqual(newColoredImage);
      });

      it('Should return the unmodified image itself if the selected pixel is invalid.', () => {
        const imagePixel = { row: -1, column: 0 } as IPixel;
        const colorToBeReplacedWith = '_';
        const newColoredImage = paintBucket.paint(imagePixel, colorToBeReplacedWith);

        expect(image).toEqual(newColoredImage);
      });

      it('Should return the new colored image if everything is ok.', () => {
        const imagePixel = { row: 0, column: 1 } as IPixel;
        const newColoredImage = paintBucket.paint(imagePixel, 'o').draw();

        expect(newColoredImage).toEqual('\n_ooo__\n_o__#_\n_ooo__\n_o____\n');
      });
    });
  });
});
