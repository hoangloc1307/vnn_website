'use client';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import moment from 'moment';
import { useSearchParams } from 'next/navigation';
import { history } from '~/fake/history';
import { Link, usePathname } from '~/navigation';

const colors = [
  'from-[#ff87e8] to-[#ffdbf6]',
  'from-[#c9ecb4] to-[#edf8e8]',
  'from-[#8fdea0] to-[#dff3e3]',
  'from-[#8cadea] to-[#dee6f7]',
  'from-[#83d3ff] to-[#dbf0ff]',
  'from-[#ff8080] to-[#ffdada]',
  'from-[#fdcaa7] to-[#fef1e8]',
  'from-[#ffea91] to-[#fff9e1]',
];

const ITEM_PER_PAGE = 6;
const TOTAL_PAGE = Math.ceil(history.length / ITEM_PER_PAGE);

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const icon =
    direction === 'left' ? (
      <FontAwesomeIcon icon={faChevronLeft} className='size-3' />
    ) : (
      <FontAwesomeIcon icon={faChevronRight} className='size-3' />
    );
  const title = direction === 'left' ? 'Previous' : 'Next';

  const buttonContent =
    direction === 'left' ? (
      <>
        <span>{icon}</span>
        <span>{title}</span>
      </>
    ) : (
      <>
        <span>{title}</span>
        <span>{icon}</span>
      </>
    );

  return isDisabled ? (
    <div className='inline-flex h-9 cursor-not-allowed items-center justify-center gap-1 whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium text-gray-500'>
      {buttonContent}
    </div>
  ) : (
    <Link
      className='inline-flex h-9 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white'
      href={href}
    >
      {buttonContent}
    </Link>
  );
}

export default function History() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className='flex h-full flex-col gap-5'>
      <div className='relative lg:flex-grow lg:columns-3'>
        {history.slice((currentPage - 1) * ITEM_PER_PAGE, currentPage * ITEM_PER_PAGE).map((item, index) => (
          <div key={index} className='h-1/2 overflow-hidden'>
            <h2 className={clsx('bg-gradient-to-r px-2 py-1 font-semibold text-dark', colors[index % 8])}>
              {item.year}
            </h2>
            <ul className='list-inside list-disc space-y-2 px-4 py-2 text-sm font-medium text-dark'>
              {item.events.map((event, eventIdx) => (
                <li key={eventIdx}>
                  <span className='font-semibold'>{moment(event.date, 'YYYYMMDD').format('DD-MM-YYYY')}</span>:{' '}
                  {event.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className='absolute left-[33.15%] top-0 hidden h-full border-l border-gray-300 lg:block' />
        <div className='absolute left-[66.85%] top-0 hidden h-full border-l border-gray-300 lg:block' />
      </div>
      <div className='flex justify-between lg:basis-1'>
        <PaginationArrow direction='left' href={createPageURL(currentPage - 1)} isDisabled={currentPage <= 1} />
        <PaginationArrow
          direction='right'
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= TOTAL_PAGE}
        />
      </div>
    </div>
  );
}
