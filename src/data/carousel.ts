import robe from '../assets/images/pages/main/slider/1.webp';
import decoration from '../assets/images/pages/main/slider/2.webp';
import pillow from '../assets/images/pages/main/slider/3.jpg';
import sweater from '../assets/images/pages/main/slider/4.webp';
import souvenir from '../assets/images/pages/main/slider/5.webp';
import wand from '../assets/images/pages/main/slider/6.webp';
import all from '../assets/images/pages/main/slider/7.webp';
import { CATEGORIES } from '../models/enums';

export interface ISlides {
  id: number;
  img: string;
  alt: string;
  title: string;
  text: string;
  link: string;
}

export const slides: ISlides[] = [
  {
    id: 1,
    img: robe,
    alt: 'robe',
    title: 'Robes',
    text: 'Add a touch of magic from the wizarding world to your wardrobe with this extensive collection of Harry Potter clothing. The perfect gift for any Harry Potter fan.',
    link: CATEGORIES.ROBES,
  },
  {
    id: 2,
    img: decoration,
    alt: 'decoration',
    title: 'Decorations',
    text: 'Explore a selection of featured and custom made decorations. Perfect for gifting any witch or wizard to add to their collection.',
    link: CATEGORIES.DECORATIONS,
  },
  {
    id: 3,
    img: pillow,
    alt: 'pillow',
    title: 'Pillows',
    text: 'Add a touch of magic from the wizarding world to your home with a unique range of Harry Potter homeware.',
    link: CATEGORIES.PILLOWS,
  },
  {
    id: 4,
    img: sweater,
    alt: 'sweater',
    title: 'Sweaters',
    text: 'Add a touch of magic from the wizarding world to your wardrobe with this extensive collection of Harry Potter clothing. The perfect gift for any Harry Potter fan.',
    link: CATEGORIES.SWEATERS,
  },
  {
    id: 5,
    img: souvenir,
    alt: 'souvenir',
    title: 'Souvenirs',
    text: 'Explore a selection of featured and custom made souvenirs. Perfect for gifting any witch or wizard to add to their collection.',
    link: CATEGORIES.SOUVENIRS,
  },
  {
    id: 6,
    img: wand,
    alt: 'wand',
    title: 'Wands',
    text: 'Add your personal touch to one of our replica wands with our brand new wand engraving service! Create a truly magical and one-of-a-kind wand, unique to you.',
    link: CATEGORIES.WANDS,
  },
  {
    id: 7,
    img: all,
    alt: 'all products',
    title: 'All products',
    text: 'Find incredible treasures along with amazing offers here on best loved Harry Potter merchandise. Get it before it magically disappears forever!',
    link: CATEGORIES.ALL,
  },
];
