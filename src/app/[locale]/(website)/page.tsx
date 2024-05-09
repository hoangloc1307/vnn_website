import NewsCarousel from '@/app/ui/carousel';

export default function Home() {
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
        <div className='vnn-container'>
          <NewsCarousel />
        </div>
      </section>
    </div>
  );
}
