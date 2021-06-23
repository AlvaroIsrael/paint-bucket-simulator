import IPixel from './IPixel';
import Image from '../models/Image';

interface IPaintBucket {
  paint({ row, column }: IPixel, colorToBeReplacedWith: string): Image;
}

export default IPaintBucket;
