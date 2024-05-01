export default function Home() {
  return (
    <>
      {/* Hero video */}
      <section className='relative w-full pt-[56%] lg:pt-[44%]'>
        <video
          loop
          muted
          autoPlay
          className='absolute left-0 top-0 h-full w-full border-none bg-transparent outline-none'
        >
          <source src='/videos/hero.mp4' type='video/mp4' className='' />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
}
