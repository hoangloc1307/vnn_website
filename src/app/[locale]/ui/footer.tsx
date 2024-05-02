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
      <div className='pt-14'>
        <div className='vnn-container '>
          <div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4'>
            {/* Address */}
            <div className='col-span-1 md:col-span-2'>
              <h2 className='mb-5 text-2xl font-semibold capitalize text-white'>Address</h2>
              <ul className='space-y-2'>
                <li className='flex items-center gap-2.5 text-white text-opacity-60'>
                  <span>
                    <MapPinIcon className='size-5' />
                  </span>
                  <span>Plot 208 Amata IP, Bien Hoa City, Dong Nai Province, Vietnam</span>
                </li>
                <li className='flex items-center gap-2.5 text-white text-opacity-60'>
                  <span>
                    <PhoneIcon className='size-5' />
                  </span>
                  <span>+84-251 3936311</span>
                </li>
                <li className='flex items-center gap-2.5 text-white text-opacity-60'>
                  <span>
                    <EnvelopeIcon className='size-5' />
                  </span>
                  <span>system@nok.com.vn</span>
                </li>
              </ul>
            </div>
            {/* Quick Links */}
            <div className='col-span-1'>
              <h2 className='mb-5 text-2xl font-semibold capitalize text-white'>Quick Links</h2>
              <ul className='space-y-2'>
                {MENUS.map((item, index) => (
                  <li key={index} className='flex items-center gap-2.5 text-white text-opacity-60'>
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
            <div className='col-span-1'>
              <h2 className='mb-5 text-2xl font-semibold capitalize text-white'>News</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={clsx(`bg-[url('/images/img_footer.svg')] bg-cover bg-top bg-no-repeat pt-60`)}>
        <div className='vnn-container py-10'>
          <div>
            <Image
              src={'/images/logo.png'}
              alt='Logo VNN'
              width={160}
              height={50}
              className='opacity-60 brightness-0 invert hover:opacity-100'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
