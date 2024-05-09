import NewsCarousel from '@/app/ui/carousel';
import { GenerateMetadata } from '@/types/metadata';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({ params: { locale } }: GenerateMetadata) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return { title: t('about-us.title') };
}

export default function AboutUsPage() {
  return (
    <div className='vnn-container flex flex-col gap-5 py-5'>
      {/* lg:landscape:h-screen-without-header */}
      {/* Content */}
      <div className='flex flex-col gap-3 lg:flex-row lg:gap-7 '>
        {/* lg:landscape:flex-grow */}
        {/* GD Image */}
        <div className='flex flex-1 flex-col gap-3'>
          <div className='basis-1'>
            <h1 className='text-base font-semibold uppercase text-dark lg:text-lg xl:text-xl'>
              Thông điệp từ Tổng giám đốc: Mr. Yoshida Naofumi
            </h1>
          </div>
          <div className='flex-grow'>
            <div className='relative mx-auto aspect-[4/3] w-full max-w-sm md:max-w-xl'>
              <Image src={'/images/company.jpg'} alt='company' fill className='object-cover' />
            </div>
          </div>
        </div>

        {/* GD Message */}
        <div className='flex-1 space-y-3'>
          <h2 className='rounded bg-gradient-to-r from-[#94D9FF] to-[#dcebf8] p-2 text-sm font-semibold uppercase text-dark lg:text-base xl:text-lg'>
            <FontAwesomeIcon icon={faHandshake} size='lg' /> Cam kết của chúng tôi về quản lý có trách nhiệm
          </h2>
          <ul className='list-inside list-disc space-y-2 text-justify text-sm font-medium text-dark md:flex md:gap-5 md:space-y-0 lg:flex-col xl:landscape:text-base 2xl:landscape:text-lg 2xl:landscape:leading-8'>
            <li>
              Trách nhiệm luôn là giá trị định hướng mạnh mẽ tại Vietnam NOK, với việc quản lý có trách nhiệm là một
              phần nội tại trong chiến lược tạo ra giá trị và lợi nhuận lâu dài của công ty. Chúng tôi hiểu rằng với tư
              cách là một công ty, một công dân doanh nghiệp và một nhà đầu tư, chúng tôi đóng vai trò quan trọng trong
              việc giải quyết nhiều thách thức về môi trường và xã hội mà chúng tôi đang phải đối mặt ngày nay.
            </li>
            <li>
              Chúng tôi đã nỗ lực xây dựng hoạt động kinh doanh của mình trên nền tảng liêm chính và ứng xử có đạo đức,
              trong đó việc quản lý và đầu tư có trách nhiệm là một phần thiết yếu trong cam kết của chúng tôi về sự bền
              vững. Chúng tôi tiếp tục củng cố cam kết này, vốn là nền tảng cho sự thành công trong kinh doanh của chúng
              tôi, cho phép chúng tôi giảm thiểu rủi ro, tạo ra giá trị lâu dài và giành được niềm tin của khách hàng,
              đối tác kinh doanh, nhân viên, Tập đoàn NOK và cộng đồng nơi hiện tại chúng tôi sinh sống.
            </li>
          </ul>
        </div>
      </div>

      {/* Carousel */}
      <div className='basis-1'>
        <NewsCarousel />
      </div>
    </div>
  );
}
