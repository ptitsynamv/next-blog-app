import s from './PostsGrid.module.css';
import PostItem from '../PostItem/PostItem';

function PostsGrid({ posts }) {
  return (
    <ul className={s.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
