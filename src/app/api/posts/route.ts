import { NextRequest } from 'next/server';
import CONFIGS from '~/constants/config';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale');
  const url = CONFIGS.BACKEND_URL + '/posts?lang=' + locale;
  const res = await fetch(url, {
    cache: 'no-store',
  });
  const data = await res.json();
  console.log('START ROUTE HANDLER');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 500);
  });
  console.log('END ROUTE HANDLER');
  return Response.json(data);
}

// Function to revalidateTag
// export function POST() {
//   revalidateTag('posts');
//   return Response.json(`revalidateTag['posts'] OK`);
// }
