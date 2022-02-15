import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/code.png"
          alt="An image showing of web-development"
          width={500}
          height={500}
        />
      </div>
      <h1>Hi, I'm Prabhat</h1>
      <p>
        I blog about web development- especially front-end framework like
        Angular and React.
      </p>
    </section>
  );
};

export default Hero;
