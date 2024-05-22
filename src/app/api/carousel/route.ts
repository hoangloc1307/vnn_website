import { NextRequest } from 'next/server';
import { CarouselItem } from '~/types/carousel';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale');
  console.log(`carouse ${locale} ${new Date().toISOString()}`);

  const res = await new Promise<CarouselItem[]>((resolve) => {
    setTimeout(() => {
      resolve(
        locale === 'vi'
          ? [
              { title: 'Tin tức 1' },
              { title: 'Tin tức 2' },
              { title: 'Tin tức 3' },
              { title: 'Tin tức 4' },
              { title: 'Tin tức 5' },
              { title: 'Tin tức 6' },
              { title: 'Tin tức 7' },
              { title: 'Tin tức 8' },
              { title: 'Tin tức 9' },
              { title: 'Tin tức 10' },
            ]
          : [
              { title: 'News 1' },
              { title: 'News 2' },
              { title: 'News 3' },
              { title: 'News 4' },
              { title: 'News 5' },
              { title: 'News 6' },
              { title: 'News 7' },
              { title: 'News 8' },
              { title: 'News 9' },
              { title: 'News 10' },
            ],
      );
    }, 5000);
  });

  return Response.json(res);
}
