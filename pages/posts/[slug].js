import PostContent from '../../components/posts/post-details/PostContent/PostContent';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailPage({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const post = getPostData(slug);

  return {
    props: { post },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFiles = getPostsFiles();

  const paths = postFiles.map((postFile) => ({
    params: { slug: postFile.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default PostDetailPage;
