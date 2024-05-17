import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { fetchHomeCarousel } from '~/apis/carousel';
import NewsCarousel from '~/components/carousel';

export default async function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const productList = await fetchHomeCarousel();

  return (
    <div className='container space-y-5 py-5'>
      {/* Content */}
      <div className='space-y-3'>
        {/* Heading */}
        <h1 className='text-base font-semibold uppercase text-dark'>Sản phẩm của chúng tôi</h1>

        <div className='flex flex-col gap-3 lg:flex-row lg:gap-10 xl:gap-20'>
          <div className='space-y-3 text-justify indent-4 lg:w-1/2 lg:text-base xl:text-lg 2xl:leading-9'>
            <p>
              Việt Nam NOK chuyên sản xuất các sản phẩm Oil seals và O-Rings đạt chất lượng cao, chuyên cung cấp cho các
              ngành công nghiệp ôtô và công nghiệp phụ trợ liên quan khác.
            </p>
            <p>
              Năng lực sản xuất trên 500 triệu sản phẩm/năm, trong đó 80% xuất khẩu đến thị trường Nhật bản, châu âu… và
              20% cung cấp nội thị trường nội địa.
            </p>
            <p>
              Được kế thừa kinh nghiệm sản xuất seal trên 80 năm từ NOK Corporation (Japan), kết hợp với công nghệ sản
              xuất tiến tiến Việt Nam NOK tạo ra những sản phẩm với chất lượng cao và được khách hàng ghi nhận trong
              thời gian qua.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-3 lg:w-1/2'>
            <div className='relative aspect-video w-full overflow-hidden rounded-xl'>
              <Image src='/images/product_1.png' alt='VNN Product' fill quality={100} className='object-contain' />
            </div>
            <div className='relative aspect-video w-full overflow-hidden rounded-xl'>
              <Image src='/images/product_2.png' alt='VNN Product' fill quality={100} className='object-contain' />
            </div>
            <div className='relative aspect-video w-full overflow-hidden rounded-xl'>
              <Image src='/images/product_3.png' alt='VNN Product' fill quality={100} className='object-contain' />
            </div>
            <div className='relative aspect-video w-full overflow-hidden rounded-xl'>
              <Image src='/images/product_4.png' alt='VNN Product' fill quality={100} className='object-contain' />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div>
        <NewsCarousel list={productList} />
      </div>
    </div>
  );
}
