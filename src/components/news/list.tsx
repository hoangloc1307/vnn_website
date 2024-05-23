import { getPosts } from '~/apis/posts';
import NewsCard from '~/components/news/card';

export default async function NewsList({ locale }: { locale: string }) {
  const posts = await getPosts(locale);

  return (
    <ul className='grid grid-cols-1 gap-3 md:gap-7 lg:grid-cols-2 xl:grid-cols-3'>
      {posts.map((post, index) => (
        <li key={index}>
          <NewsCard news={post} />
        </li>
      ))}
    </ul>
  );
}
