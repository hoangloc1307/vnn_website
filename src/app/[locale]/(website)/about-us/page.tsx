import NewsCarousel from '@/app/[locale]/ui/carousel';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className='vnn-container flex flex-col sm:h-screen'>
      <section className='flex-grow py-5'>
        <div className='grid gap-y-4 md:grid-cols-2 md:gap-4'>
          {/* GD Image */}
          <div className='flex flex-col gap-4'>
            <h1 className='text-base font-semibold text-dark'>Thông điệp từ Tổng giám đốc: Mr. Yoshida Naofumi</h1>
            <div className='mx-auto flex aspect-[4/3] max-w-xs items-center justify-center border border-dark'>
              Hình tổng giám đốc
            </div>
          </div>
          {/* GD Message */}
          <div className='space-y-4'>
            <h2 className='bg-gradient-to-r from-[#00b0f0] to-[#dcebf8] px-2 py-1.5 text-xl font-semibold text-dark'>
              Cam kết của chúng tôi về quản lý có trách nhiệm
            </h2>
            <ul className='mt-2 space-y-4 text-justify font-medium text-dark lg:text-lg xl:text-xl'>
              <li>
                <p>
                  Trách nhiệm luôn là giá trị định hướng mạnh mẽ tại Vietnam NOK, với việc quản lý có trách nhiệm là một
                  phần nội tại trong chiến lược tạo ra giá trị và lợi nhuận lâu dài của công ty. Chúng tôi hiểu rằng với
                  tư cách là một công ty, một công dân doanh nghiệp và một nhà đầu tư, chúng tôi đóng vai trò quan trọng
                  trong việc giải quyết nhiều thách thức về môi trường và xã hội mà chúng tôi đang phải đối mặt ngày
                  nay.
                </p>
              </li>
              <li>
                <p>
                  Chúng tôi đã nỗ lực xây dựng hoạt động kinh doanh của mình trên nền tảng liêm chính và ứng xử có đạo
                  đức, trong đó việc quản lý và đầu tư có trách nhiệm là một phần thiết yếu trong cam kết của chúng tôi
                  về sự bền vững. Chúng tôi tiếp tục củng cố cam kết này, vốn là nền tảng cho sự thành công trong kinh
                  doanh của chúng tôi, cho phép chúng tôi giảm thiểu rủi ro, tạo ra giá trị lâu dài và giành được niềm
                  tin của khách hàng, đối tác kinh doanh, nhân viên, Tập đoàn NOK và cộng đồng nơi hiện tại chúng tôi
                  sinh sống.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='flex-1 py-5'>
        <NewsCarousel />
      </section>
    </div>
  );
}
