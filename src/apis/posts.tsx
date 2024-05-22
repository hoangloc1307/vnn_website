import { cookies } from 'next/headers';
import CONFIGS from '~/constants/config';
import { defaultLocale } from '~/constants/locales';
import { Post } from '~/types/post';

export async function getPosts(): Promise<Post[]> {
  const locale = cookies().get('NEXT_LOCALE')?.value || defaultLocale;
  const res = await fetch(`${CONFIGS.BASE_URL}/api/posts?locale=${locale}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  console.log('START FETCH');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 300);
  });
  console.log('END FETCH');

  return res.json();
}
