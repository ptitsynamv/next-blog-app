import Hero from '../components/home-page/Hero/Hero';
import FeaturedPosts from '../components/home-page/FeaturedPosts/FeaturedPosts';
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head';

function HomePage({ featuredPost }) {
  return (
    <>
      <Head>
        <title>Mariia Blog</title>
        <meta name="description" value="NextJS app" />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPost} />
    </>
  );
}

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: { featuredPost },
  };
}

export default HomePage;
