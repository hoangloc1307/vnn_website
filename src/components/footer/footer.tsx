import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FooterAddress from '~/components/footer/address';
import MENUS from '~/constants/menus';
import siteMetadata from '~/constants/siteMetadata';
import { Link } from '~/navigation';

export default function Footer() {
  const tFooter = useTranslations('Footer');
  const tNavLinks = useTranslations('NavLinks');

  return (
    <footer className='bg-footer pt-5'>
      {/* Top */}
      <div className='container'>
        <div className='grid lg:grid-cols-4'>
          {/* Address */}
          <div className='space-y-2 lg:col-span-2'>
            <h2 className='text-base font-semibold capitalize text-white'>{tFooter('address')}</h2>
            <FooterAddress />
          </div>

          {/* Quick Links */}
          <div className='hidden space-y-2 lg:block'>
            <h2 className='text-base font-semibold capitalize text-white'>{tFooter('quick-links')}</h2>
            <ul className='space-y-3 text-sm'>
              {MENUS.map((item, index) => (
                <li key={index} className='flex items-center gap-2.5 text-white/60'>
                  <Link
                    href={item.href}
                    className='block w-full duration-300 ease-in-out hover:text-white hover:underline'
                  >
                    <FontAwesomeIcon icon={faAngleRight} size='sm' className='mr-2' />
                    {tNavLinks(item.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News */}
          <div className='hidden space-y-2 lg:block'>
            <h2 className='text-base font-semibold capitalize text-white'>{tFooter('news')}</h2>
            <ul className='space-y-3 text-sm'>
              {/* {[].slice(0, 5).map((post, index) => (
                <li key={index} className='flex items-center gap-2.5 text-white/60'>
                  <Link
                    href={'/'}
                    title={post.title}
                    className='line-clamp-1 block w-full duration-300 ease-in-out hover:text-white hover:underline'
                  >
                    <FontAwesomeIcon icon={faAngleRight} size='sm' className='mr-2' /> {post.title}
                  </Link>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='bg-footer-image bg-[length:300%] bg-top bg-no-repeat pt-[30%] md:bg-[length:200%] md:pt-[15%] lg:bg-[length:100%] lg:pt-[10%]'>
        <div className='bg-[#004388]'>
          <div className='container'>
            <div className='flex flex-col items-center gap-y-6 py-5 text-sm sm:flex-row sm:items-end sm:justify-between'>
              {/* Logo */}
              <div className='space-y-2'>
                <div>
                  <Image
                    src={'/images/logo.png'}
                    alt='Logo VNN'
                    width={160}
                    height={50}
                    className='opacity-60 brightness-0 invert hover:opacity-100'
                  />
                </div>
                <ul className='flex items-center justify-center gap-2'>
                  <li>
                    <Link
                      href={siteMetadata.facebook}
                      className='group flex size-8 items-center justify-center rounded-full hover:bg-white'
                      target='_blank'
                    >
                      <FontAwesomeIcon
                        size='xl'
                        icon={faFacebookF}
                        className='text-white/60 group-hover:text-blue-600'
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={siteMetadata.youtube}
                      className='group flex size-8 items-center justify-center rounded-full hover:bg-white'
                      target='_blank'
                    >
                      <FontAwesomeIcon size='xl' icon={faYoutube} className='text-white/60 group-hover:text-red-500' />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Copyright */}
              <div className='space-y-2 text-white/60'>
                <ul className='flex flex-wrap gap-x-3'>
                  {['Terms', 'Site Map', 'Privacy and Cookie Policy'].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>© NOK CORPORATION. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
