import s from './PostItem.module.css';
import Link from 'next/link';
import Image from 'next/image';

function PostItem({ post }) {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={s.post}>
      <Link href={linkPath}>
        <div className={s.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={s.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
