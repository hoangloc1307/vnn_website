import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getLocale } from 'next-intl/server';
import siteMetadata from '~/constants/siteMetadata';

export default async function FooterAddress() {
  const locale = await getLocale();

  return (
    <ul className='space-y-1 text-sm text-white/60'>
      <li>
        <FontAwesomeIcon icon={faLocationDot} size='lg' className='mr-2' />{' '}
        {locale === 'vi' ? siteMetadata.addressVI : siteMetadata.addressEN}
      </li>
      <li>
        <FontAwesomeIcon icon={faPhone} size='lg' className='mr-2' />
        {siteMetadata.phone}
      </li>
      <li>
        <FontAwesomeIcon icon={faEnvelope} size='lg' className='mr-2' />
        {siteMetadata.email}
      </li>
    </ul>
  );
}
