import React from 'react';

import Header from '../components/Header';
import Seo from '../components/SEO';

export default function AboutMe() {
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export const Head = () => <Seo title="Art | Samuel Ng" />;
