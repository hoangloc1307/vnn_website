'use client';

import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import { Link } from '~/navigation';
import { CarouselItem } from '~/types/carousel';

type Props = {
  list: CarouselItem[];
  locale: string;
};

export default function NewsCarousel({ list, locale }: Props) {
  const settings: Settings = {
    infinite: true,
    arrows: false,
    speed: 1000,
    cssEase: 'ease-in-out',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    responsive: [
      { breakpoint: 639, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1023, settings: { slidesToShow: 5, slidesToScroll: 1 } },
    ],
    dots: true,
    appendDots: (dots) => (
      <>
        <ul className='flex items-center justify-center gap-3 py-2'>{dots}</ul>
      </>
    ),
    customPaging: (_) => (
      <span className='block size-3 cursor-pointer rounded-full ring-2 ring-primary duration-500 ease-in-out hover:bg-primary/30' />
    ),
  };

  return (
    <Slider {...settings}>
      {list.map((item, index) => (
        <div key={index} className='px-2 py-1 lg:px-3 xl:px-4 2xl:px-5'>
          <Link href={'/'}>
            <div className='peer relative aspect-video w-full overflow-hidden rounded-md bg-white shadow ring-2 ring-transparent duration-500 ease-in-out hover:ring-primary'>
              {/* <Image src='/images/16_9.png' alt='Logo' fill className='object-contain' quality={100} /> */}
              <div className='flex h-full w-full items-center justify-center bg-blue-300 text-xl font-semibold text-dark'>
                16:9
              </div>
            </div>
            <h3 className='mt-2 text-center text-xs font-semibold uppercase text-dark duration-500 ease-in-out peer-hover:text-primary sm:text-sm'>
              {item[`title_${locale}` as keyof CarouselItem]}
            </h3>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
