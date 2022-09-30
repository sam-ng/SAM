import React from 'react';

import Layout from '../components/Layout';
import AboutSnippet from '../components/AboutSnippet';
import Socials from '../components/Socials';

export default function Home() {
  return (
    <Layout>
      <AboutSnippet />
      <Socials />
    </Layout>
  );
}
