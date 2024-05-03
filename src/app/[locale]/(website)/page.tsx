import NewsCarousel from '@/app/[locale]/ui/carousel';

export default function Home() {
  return (
    <>
      {/* Hero video */}
      <section className='relative -mt-[79px] aspect-video max-h-screen w-full'>
        <video loop muted controls autoPlay className='absolute h-full w-full object-fill'>
          <source src='/videos/hero2.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* News/Events Carousel */}
      <div className='vnn-container py-10'>
        <NewsCarousel />
      </div>
    </>
  );
}
