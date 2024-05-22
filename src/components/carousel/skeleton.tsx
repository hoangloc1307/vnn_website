import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function Item({ classItem }: { classItem?: string }) {
  return (
    <div className={`w-full px-2 py-1 ${classItem}`}>
      <div className='aspect-video w-full rounded-md bg-gray-300'>
        <div className='flex h-full items-center justify-center'>
          <svg
            className='h-10 w-10 text-gray-200'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 16 20'
          >
            <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
            <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
          </svg>
        </div>
      </div>
      <div className='mx-auto mt-2 h-4 w-20 rounded-full bg-gray-300' />
    </div>
  );
}

export default function CarouselSkeleton() {
  return (
    <div className='animate-pulse'>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 lg:gap-6'>
        <Item />
        <Item />
        <Item />
        <Item classItem='hidden sm:block' />
        <Item classItem='hidden md:block' />
        <Item classItem='hidden lg:block' />
      </div>
      <div className='flex w-full justify-center gap-3 py-2'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='size-5 rounded-full bg-gray-300' />
        ))}
      </div>
    </div>
  );
}
