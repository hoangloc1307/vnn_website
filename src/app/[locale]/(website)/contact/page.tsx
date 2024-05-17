import { unstable_setRequestLocale } from 'next-intl/server';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return <h1>Contact Page</h1>;
}
