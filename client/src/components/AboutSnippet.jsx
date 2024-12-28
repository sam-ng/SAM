import React from 'react';

const AboutSnippet = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10 w-1/2">
      <h2 className="text-5xl font-bold font-Raleway">
        Hey there! I'm Samuel Ng.
      </h2>
      <p className="mt-5 text-xl text-center leading-loose font-Raleway">
        I'm currently a software developer for <a className="font-bold transition ease-in-out hover:text-sky-300" href='https://www.grantstreet.com/'>Grant Street Group</a>.
      </p>
      <p className="mt-5 text-xl text-center leading-loose font-Raleway">
        I graduated with a BS in computer science and applied mathematics & statistics from Stony Brook University. Always eager to learn and build new things.
      </p>
    </section>
  );
};

export default AboutSnippet;
