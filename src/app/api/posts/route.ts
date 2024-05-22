import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import CONFIGS from '~/constants/config';
import { defaultLocale } from '~/constants/locales';

export async function GET() {
  const locale = cookies().get('NEXT_LOCALE')?.value || defaultLocale;
  const res = await fetch(`${CONFIGS.BACKEND_URL}/posts?lang=${locale}`, {
    next: {
      tags: ['posts'],
    },
  });
  const data = await res.json();
  console.log('fetch posts on backend from route handler - START');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 5000);
  });
  console.log('fetch posts on backend from route handler - END');
  return Response.json(data);
}

// Function to revalidateTag
export function POST() {
  revalidateTag('posts');
  return Response.json(`revalidateTag['posts'] OK`);
}
