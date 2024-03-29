import Image from 'next/image';

import classes from './Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/butterfly.jpg"
          alt="An image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Mariia</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
