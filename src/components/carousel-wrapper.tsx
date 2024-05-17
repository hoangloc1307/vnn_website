import { fetchHomeCarousel } from '~/apis/carousel';
import NewsCarousel from '~/components/carousel';

export default async function NewsCarouselWrapper() {
  const homeNews = await fetchHomeCarousel();

  return <NewsCarousel list={homeNews} />;
}
