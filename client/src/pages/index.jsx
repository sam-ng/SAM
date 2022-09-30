import React from 'react';

import Layout from '../components/Layout';
import AboutSnippet from '../components/AboutSnippet';
import Socials from '../components/Socials';
import ProjectSection from '../components/ProjectSection';

export default function Home() {
  return (
    <Layout>
      <AboutSnippet />
      <Socials />
      <ProjectSection />
    </Layout>
  );
}
