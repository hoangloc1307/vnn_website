import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { fetchHomeCarousel } from '~/apis/carousel';
import NewsCarousel from '~/components/carousel';
import { GenerateMetadata } from '~/types/metadata';

export async function generateMetadata({ params: { locale } }: GenerateMetadata) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return { title: t('about-us.title') };
}

export default async function AboutUsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const newsList = await fetchHomeCarousel();

  return (
    <div className='container flex flex-col gap-5 py-5'>
      {/* Content */}
      <div className='flex-grow space-y-3'>
        {/* Heading */}
        <h1 className='text-base font-semibold uppercase text-dark'>
          Thông điệp từ Tổng giám đốc: Mr. Yoshida Naofumi
        </h1>

        <div className='flex flex-col gap-3 md:flex-row lg:gap-5'>
          {/* GD Image */}
          <div
            className={clsx(
              'relative mx-auto aspect-[3/4] w-full max-w-[250px] overflow-hidden rounded-xl shadow-xl',
              'sm:max-w-xs',
              'md:w-1/3 md:max-w-none',
              'lg:max-w-lg',
              'xl:w-2/5 xl:max-w-[300px]',
              '2xl:max-w-[350px]',
            )}
          >
            {/* <Image src={'/images/company.jpg'} alt='company' fill className='object-cover' /> */}
            <div className='flex h-full w-full items-center justify-center bg-blue-300 text-xl font-semibold text-dark'>
              3:4
            </div>
          </div>

          {/* GD Message */}
          <div className='space-y-3 md:w-2/3 xl:w-3/5'>
            <h2 className='rounded bg-gradient-to-r from-[#94D9FF] to-[#dcebf8] p-2 text-sm font-semibold uppercase text-dark'>
              <FontAwesomeIcon icon={faHandshake} size='lg' className='mr-1' /> Cam kết của chúng tôi về quản lý có
              trách nhiệm
            </h2>
            <ul className='list-inside list-disc space-y-2 text-justify text-sm font-medium text-dark lg:text-base xl:text-lg 2xl:leading-9'>
              <li>
                Trách nhiệm luôn là giá trị định hướng mạnh mẽ tại Vietnam NOK, với việc quản lý có trách nhiệm là một
                phần nội tại trong chiến lược tạo ra giá trị và lợi nhuận lâu dài của công ty. Chúng tôi hiểu rằng với
                tư cách là một công ty, một công dân doanh nghiệp và một nhà đầu tư, chúng tôi đóng vai trò quan trọng
                trong việc giải quyết nhiều thách thức về môi trường và xã hội mà chúng tôi đang phải đối mặt ngày nay.
              </li>
              <li>
                Chúng tôi đã nỗ lực xây dựng hoạt động kinh doanh của mình trên nền tảng liêm chính và ứng xử có đạo
                đức, trong đó việc quản lý và đầu tư có trách nhiệm là một phần thiết yếu trong cam kết của chúng tôi về
                sự bền vững. Chúng tôi tiếp tục củng cố cam kết này, vốn là nền tảng cho sự thành công trong kinh doanh
                của chúng tôi, cho phép chúng tôi giảm thiểu rủi ro, tạo ra giá trị lâu dài và giành được niềm tin của
                khách hàng, đối tác kinh doanh, nhân viên, Tập đoàn NOK và cộng đồng nơi hiện tại chúng tôi sinh sống.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className='basis-1'>
        <NewsCarousel list={newsList} />
      </div>
    </div>
  );
}
