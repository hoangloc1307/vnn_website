import CONFIGS from '~/constants/config';
import { CarouselItem } from '~/types/carousel';

export async function getCarousel(category: string): Promise<CarouselItem[]> {
  console.log('START FETCH CAROUSEL', category);

  const fetchUrl = CONFIGS.BACKEND_URL + '/carousel?category=' + category;
  const result = await fetch(fetchUrl, {
    next: {
      tags: [`carousel-${category}`],
    },
  });

  if (!result.ok) {
    throw new Error('Failed to fetch data');
  }

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });

  console.log('END FETCH CAROUSEL', category);

  return result.json();
}
