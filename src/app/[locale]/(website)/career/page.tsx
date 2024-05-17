import { unstable_setRequestLocale } from 'next-intl/server';

export default function CareerPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return <h1>Career Page</h1>;
}
