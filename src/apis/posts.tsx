import CONFIGS from '~/constants/config';
import { Post } from '~/types/post';

export async function getPosts(locale: string): Promise<Post[]> {
  console.log('START FETCH POSTS', locale);

  const fetchUrl = CONFIGS.BACKEND_URL + '/posts?lang=' + locale;
  const res = await fetch(fetchUrl, {
    next: {
      tags: [`posts-${locale}`],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });

  console.log('END FETCH POSTS', locale);

  return res.json();
}
