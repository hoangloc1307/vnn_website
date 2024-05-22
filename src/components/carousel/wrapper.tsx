import { getCarousel } from '~/apis/carousel';
import NewsCarousel from '~/components/carousel/carousel';

export default async function NewsCarouselWrapper({ category }: { category: string }) {
  const data = await getCarousel();

  return <NewsCarousel list={data} />;
}
