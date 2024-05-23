import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import NewsList from '~/components/news/list';
import { GenerateMetadata } from '~/types/metadata';

export async function generateMetadata({ params: { locale } }: GenerateMetadata) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return { title: t('news.title') };
}

export default function NewsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className='container py-5'>
      <h1 className='mb-5 text-base font-semibold uppercase text-dark'>Sự kiện/Tin tức</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsList locale={locale} />
      </Suspense>
    </div>
  );
}
