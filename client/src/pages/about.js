import React from 'react';

import Header from '../components/Header';
import Seo from '../components/SEO';

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

export const Head = () => <Seo title="About Me | Samuel Ng" />;

export default AboutMe;
