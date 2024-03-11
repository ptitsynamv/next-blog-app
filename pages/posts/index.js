import AllPosts from '../../components/posts/AllPosts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head';

function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" value="List of all posts" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: { posts: allPosts },
  };
}

export default AllPostsPage;
