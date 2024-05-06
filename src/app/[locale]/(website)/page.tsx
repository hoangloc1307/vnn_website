import NewsCarousel from '@/app/[locale]/ui/carousel';

export default function Home() {
  return (
    <div className='flex flex-col lg:h-[calc(100vh-79px)]'>
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
      <section className='vnn-container basis-1 py-2'>
        <NewsCarousel />
      </section>
    </div>
  );
}
