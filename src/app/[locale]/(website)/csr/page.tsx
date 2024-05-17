import { unstable_setRequestLocale } from 'next-intl/server';

export default function CSRPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return <h1>CSR Page</h1>;
}
