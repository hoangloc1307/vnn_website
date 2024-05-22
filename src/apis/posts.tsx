import CONFIGS from '~/constants/config';
import { Post } from '~/types/post';

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${CONFIGS.BASE_URL}/api/posts`, {
    next: {
      tags: ['posts'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  console.log('fetch posts base on route handler - START');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });
  console.log('fetch posts base on route handler - END');

  return res.json();
}
