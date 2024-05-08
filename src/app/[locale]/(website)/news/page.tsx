import { postList } from '@/fake/posts';
import { Link } from '@/navigation';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <div className='vnn-container py-5'>
      <h1 className='mb-5 text-lg font-semibold uppercase text-dark'>Sự kiện/Tin tức</h1>
      <ul className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-3'>
        {postList.map((post, index) => (
          <li key={index} className='overflow-hidden rounded-xl border bg-white shadow'>
            <Link href={'/news'}>
              {/* Image */}
              <div className='relative aspect-video w-full'>
                <Image src={`/images/${post.image}`} alt={post.title} fill className='object-cover' />
              </div>
              {/* Content */}
              <div className='px-4 py-2'>
                {/* Publish date */}
                <span className='text-xs text-gray-500 sm:text-sm'>
                  <FontAwesomeIcon icon={faCalendar} className='mr-2' />
                  {moment(post.createdDate, 'YYYYMMDD').format('DD-MM-YYYY')}
                </span>
                {/* Title */}
                <h2 className='line-clamp-2 py-2 font-semibold uppercase text-dark'>{post.title}</h2>
                {/* Description */}
                <p className='text line-clamp-6 text-dark'>{post.description}</p>
                {/* Read more */}
                {/* <Link href={'/news'} className='mt-2 inline-block w-full text-center text-primary'>
                  Xem thêm
                </Link> */}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
