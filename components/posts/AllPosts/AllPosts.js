import s from './AllPosts.module.css';
import PostsGrid from '../PostsGrid/PostsGrid';

function AllPosts({ posts }) {
  return (
    <section className={s.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
