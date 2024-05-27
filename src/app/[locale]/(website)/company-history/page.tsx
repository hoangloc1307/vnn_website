import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import History from '~/components/company-history/history';
import { GenerateMetadata } from '~/types/metadata';
import genPageMetadata from '~/utils/seo';

export async function generateMetadata({ params: { locale } }: GenerateMetadata) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return genPageMetadata({ title: t('company-history.title'), locale });
}

export default function CompanyHistory({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className='container py-5 lg:flex lg:h-screen-without-header lg:flex-col'>
      <h1 className='mb-5 text-lg font-semibold uppercase text-dark lg:basis-1'>Lịch sử hình thành</h1>
      <div className='lg:flex-grow'>
        <Suspense>
          <History />
        </Suspense>
      </div>
    </div>
  );
}
