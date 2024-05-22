import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Image from 'next/image';
import { Link } from '~/navigation';

type News = {
  news: {
    title: string;
    image: string;
    createdDate: string;
    description: string;
  };
};

export default function NewsCard({ news }: News) {
  return (
    <Link
      href={'/news'}
      className='block h-full overflow-hidden rounded-lg border bg-white shadow ring-2 ring-transparent duration-500 ease-in-out hover:ring-primary'
    >
      {/* Image */}
      <div className='relative aspect-video w-full'>
        {/* <Image src={`/images/${news.image}`} alt={news.title} fill className='object-cover' /> */}
        <div className='flex h-full w-full items-center justify-center bg-blue-300 text-xl font-semibold text-dark'>
          16:9
        </div>
      </div>
      {/* Content */}
      <div className='px-4 py-2'>
        {/* Publish date */}
        <span className='text-xs text-gray-500 sm:text-sm'>
          <FontAwesomeIcon icon={faCalendar} className='mr-2' />
          {moment(news.createdDate, 'YYYYMMDD').format('DD-MM-YYYY')}
        </span>
        {/* Title */}
        <h2 className='my-2 line-clamp-2 font-semibold uppercase text-dark'>{news.title}</h2>
        {/* Description */}
        <p className='text line-clamp-6 text-dark'>{news.description}</p>
        {/* Read more */}
        {/* <Link href={'/news'} className='mt-2 inline-block w-full text-center text-primary'>
        Xem thêm
      </Link> */}
      </div>
    </Link>
  );
}
