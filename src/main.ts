import log from 'debug';
import PaintBucket from './services/PaintBucket';
import IPixel from './interfaces/IPixel';
import Image from './models/Image';

const main = () => {
  const pixels: string[][] = [
    ['_', '#', '#', '#', '_', '_'],
    ['_', '#', '_', '_', '#', '_'],
    ['_', '#', '#', '#', '_', '_'],
    ['_', '#', '_', '_', '_', '_'],
  ];

  const image = new Image(pixels);
  const paintBucket = new PaintBucket(image);
  const imagePixel = { row: 0, column: 1 } as IPixel;
  const colorToBeReplacedWith = 'o';

  log.log(image.draw());

  const newColoredImage = paintBucket.paint(imagePixel, colorToBeReplacedWith);

  log.log(newColoredImage.draw());

  process.exit(0);
};

main();
