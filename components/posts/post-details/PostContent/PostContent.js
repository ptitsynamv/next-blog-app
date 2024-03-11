import s from './PostContent.module.css';
import PostHeader from '../PostHeader/PostHeader';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const components = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className={s.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const language =
        code.className === 'language-javascript'
          ? 'javascript'
          : code.className;
      return (
        <SyntaxHighlighter
          language={language}
          children={code.children}
          style={atomDark}
        />
      );
    },
  };

  return (
    <article className={s.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
