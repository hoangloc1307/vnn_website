import { MENUS } from '@/constants/menus';
import { Link } from '@/navigation';
import { ChevronRightIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('NavLinks');

  return (
    <footer className='bg-[#062754]'>
      {/* Top */}
      <div className='pt-5'>
        <div className='vnn-container '>
          <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4'>
            {/* Address */}
            <div className='col-span-1 md:col-span-2'>
              <h2 className='mb-1 text-base font-semibold capitalize text-white'>Address</h2>
              <ul className='space-y-1 text-sm'>
                <li className='flex items-center gap-2.5 text-white/60'>
                  <span>
                    <MapPinIcon className='size-4' />
                  </span>
                  <span>Plot 208 Amata IP, Bien Hoa City, Dong Nai Province, Vietnam</span>
                </li>
                <li className='flex items-center gap-2.5 text-white/60'>
                  <span>
                    <PhoneIcon className='size-4' />
                  </span>
                  <span>+84-251 3936311</span>
                </li>
                <li className='flex items-center gap-2.5 text-white/60'>
                  <span>
                    <EnvelopeIcon className='size-4' />
                  </span>
                  <span>system@nok.com.vn</span>
                </li>
              </ul>
            </div>
            {/* Quick Links */}
            <div className='col-span-1 hidden'>
              <h2 className='mb-1 text-base font-semibold capitalize text-white'>Quick Links</h2>
              <ul className='space-y-1 text-sm'>
                {MENUS.map((item, index) => (
                  <li key={index} className='flex items-center gap-2.5 text-white/60'>
                    <span>
                      <ChevronRightIcon className='size-4' />
                    </span>
                    <span className='flex-grow'>
                      <Link href={item.href} className='block transition-all hover:text-white hover:underline'>
                        {t(item.title)}
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* News */}
            <div className='col-span-1 hidden'>
              <h2 className='mb-1 text-base font-semibold capitalize text-white'>News</h2>
              <ul className='space-y-2 text-sm'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className='flex items-center gap-2.5 text-white/60'>
                    <span>
                      <ChevronRightIcon className='size-4' />
                    </span>
                    <span className='flex-grow'>
                      <Link href={'/'} className='block transition-all hover:text-white hover:underline'>
                        Bài viết {index + 1}
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={clsx(`bg-[url('/images/img_footer.svg')] bg-cover bg-right bg-no-repeat pt-10`)}>
        <div className='vnn-container'>
          <div className='flex flex-col items-center gap-y-6 py-5 text-sm'>
            <div>
              <div>
                <Image
                  src={'/images/logo.png'}
                  alt='Logo VNN'
                  width={160}
                  height={50}
                  className='opacity-60 brightness-0 invert hover:opacity-100'
                />
              </div>
              <ul className='flex items-center'>
                <li>
                  <Link href={'/'}>
                    <Image width={38} height={38} src={'/images/facebook.svg'} alt='VNN Facebook' />
                  </Link>
                </li>
                <li>
                  <Link href={'/'}>
                    <Image width={38} height={38} src={'/images/youtube.svg'} alt='VNN Youtube' />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='space-y-2 text-white/60'>
              <ul className='flex flex-wrap space-x-4'>
                {['Terms', 'Site Map', 'Privacy and Cookie Policy'].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>© NOK CORPORATION. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
