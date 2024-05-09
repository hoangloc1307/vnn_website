import NewsCard from '@/app/ui/news/news-card';
import { postList } from '@/fake/posts';
import { GenerateMetadata } from '@/types/metadata';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: GenerateMetadata) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return { title: t('news.title') };
}

export default function NewsPage() {
  return (
    <div className='vnn-container py-5'>
      <h1 className='mb-5 text-lg font-semibold uppercase text-dark'>Sự kiện/Tin tức</h1>
      <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:gap-7 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {postList.map((post, index) => (
          <li key={index}>
            <NewsCard news={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
