import React from 'react';
import Header from '../components/Header';

const AboutMe = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <div>Hi there! Working on setting this up.</div>
      </main>
    </>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Page describing me." />
  </>
);
export default AboutMe;
