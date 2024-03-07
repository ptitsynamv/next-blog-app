import Hero from '../components/home-page/Hero/Hero';
import FeaturedPosts from '../components/home-page/FeaturedPosts/FeaturedPosts';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage({ featuredPost }) {
  return (
    <>
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
