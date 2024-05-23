import { getCarousel } from '~/apis/carousel';
import NewsCarousel from '~/components/carousel/carousel';

export default async function NewsCarouselWrapper({ category, locale }: { category: string; locale: string }) {
  const data = await getCarousel(category);

  return <NewsCarousel list={data} locale={locale} />;
}
