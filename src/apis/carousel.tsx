import { CarouselItem } from '~/types/carousel';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchHomeCarousel(): Promise<CarouselItem[]> {
  // noStore();
  try {
    console.log('Fetching data...');
    const result = await new Promise<CarouselItem[]>((resolve) => {
      setTimeout(() => {
        resolve([
          { title: 'Tin tức 1' },
          { title: 'Tin tức 2' },
          { title: 'Tin tức 3' },
          { title: 'Tin tức 4' },
          { title: 'Tin tức 5' },
          { title: 'Tin tức 6' },
          { title: 'Tin tức 7' },
          { title: 'Tin tức 8' },
          { title: 'Tin tức 9' },
          { title: 'Tin tức 10' },
        ]);
      }, 3000);
    });
    console.log('Data fetch completed after 3 seconds.');
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch card data.');
  }
}
