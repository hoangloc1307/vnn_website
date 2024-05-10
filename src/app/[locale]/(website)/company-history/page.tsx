import clsx from 'clsx';
import moment from 'moment';
import { history } from '~/fake/history';

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

export default function CompanyHistory() {
  return (
    <div className='container py-5'>
      <h1 className='mb-5 text-lg font-semibold uppercase text-dark'>Lịch sử hình thành</h1>
      <div className='space-y-3 md:columns-2 lg:columns-3 xl:columns-4'>
        {history.map((item, index) => (
          <div key={index} className='overflow-hidden rounded-lg border bg-white shadow'>
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
      </div>
    </div>
  );
}
