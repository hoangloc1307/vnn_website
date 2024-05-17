import { CarouselItem } from '~/types/carousel';
import { unstable_noStore as noStore } from 'next/cache';
import { cookies } from 'next/headers';
import { defaultLocale } from '~/constants/locales';

export async function fetchHomeCarousel(): Promise<CarouselItem[]> {
  const locale = cookies().get('NEXT_LOCALE')?.value || defaultLocale;
  try {
    console.log('Fetching data...');
    const result = await new Promise<CarouselItem[]>((resolve) => {
      setTimeout(() => {
        resolve(
          locale === 'vi'
            ? [
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
              ]
            : [
                { title: 'News 1' },
                { title: 'News 2' },
                { title: 'News 3' },
                { title: 'News 4' },
                { title: 'News 5' },
                { title: 'News 6' },
                { title: 'News 7' },
                { title: 'News 8' },
                { title: 'News 9' },
                { title: 'News 10' },
              ],
        );
      }, 500);
    });
    console.log('Data fetch completed after 3 seconds.');
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch card data.');
  }
}
