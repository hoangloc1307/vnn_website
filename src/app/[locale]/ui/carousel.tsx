'use client';

import { Link } from '@/navigation';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';

export default function NewsCarousel() {
  const settings: Settings = {
    infinite: true,
    arrows: false,
    speed: 1000,
    cssEase: 'ease-in-out',
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    swipeToSlide: true,
    slidesToScroll: 5,
    slidesToShow: 5,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    ],
    dots: true,
    appendDots: (dots) => (
      <>
        <ul className='mt-2 flex items-center justify-center gap-2'>{dots}</ul>
      </>
    ),
    customPaging: (_) => (
      <span className='block size-4 cursor-pointer rounded-full ring-2 ring-primary duration-500 ease-in-out hover:bg-primary/30' />
    ),
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold uppercase text-dark'>News/Events</h2>
      <Slider {...settings}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className='p-2 2xl:p-5'>
            <Link href={'/'}>
              <div className='peer rounded-xl border bg-white p-2 shadow ring-2 ring-transparent duration-500 ease-in-out hover:ring-primary'>
                <div className='relative aspect-video w-full rounded-md md:rounded-lg lg:rounded-xl'>
                  <Image src='/images/logo.png' alt='Logo' fill className='object-contain' quality={100} />
                </div>
              </div>
              <h3 className='mt-2 text-center text-base font-semibold uppercase text-dark duration-500 ease-in-out peer-hover:text-primary'>
                Tin tức {index + 1}
              </h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
