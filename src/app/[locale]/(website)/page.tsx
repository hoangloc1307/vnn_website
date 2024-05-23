import { unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import CarouselSkeleton from '~/components/carousel/skeleton';
import NewsCarouselWrapper from '~/components/carousel/wrapper';

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className='flex flex-col lg:h-screen-without-header'>
      {/* Hero video */}
      <section className='lg:flex-grow'>
        <div className='relative aspect-video h-full w-full lg:aspect-auto'>
          <video loop muted controls autoPlay className='absolute h-full w-full object-cover'>
            <source src='/videos/hero2.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* News/Events Carousel */}
      <section className='basis-1 py-2'>
        <div className='container'>
          <h2 className='mb-2 text-base font-semibold uppercase text-dark'>News/Events</h2>
          <Suspense fallback={<CarouselSkeleton />}>
            <NewsCarouselWrapper category='home' locale={locale} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
