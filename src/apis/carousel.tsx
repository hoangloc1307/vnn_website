import { cookies } from 'next/headers';
import CONFIGS from '~/constants/config';
import { CarouselItem } from '~/types/carousel';

export async function getCarousel(): Promise<CarouselItem[]> {
  const locale = cookies().get('NEXT_LOCALE')?.value;

  const result = await fetch(`${CONFIGS.BASE_URL}/api/carousel?locale=${locale}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!result.ok) {
    throw new Error('Failed to fetch data');
  }
  return result.json();
}
