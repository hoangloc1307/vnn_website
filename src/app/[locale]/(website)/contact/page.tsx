import { unstable_setRequestLocale } from 'next-intl/server';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className='container py-5'>
      <h1 className='mb-5 text-base font-semibold uppercase text-dark'>Contact</h1>
      <div className='h-screen-without-header-m'></div>
    </div>
  );
}
