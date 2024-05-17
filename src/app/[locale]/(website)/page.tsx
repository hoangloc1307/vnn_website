import { unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import NewsCarouselWrapper from '~/components/carousel-wrapper';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
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
          <Suspense fallback={<div>Loading...</div>}>
            <NewsCarouselWrapper />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
