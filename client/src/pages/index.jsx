import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import AboutSnippet from '../components/AboutSnippet';
import Socials from '../components/Socials';
import ProjectSection from '../components/ProjectSection';

export default function Home({ data }) {
  return (
    <Layout>
      <AboutSnippet />
      <Socials />
      <ProjectSection data={data} />
    </Layout>
  );
}

export const projectsQuery = graphql`
  query {
    allMdx(sort: { order: ASC, fields: frontmatter___order }) {
      nodes {
        frontmatter {
          name
          order
          description
          link
          tags
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="Samuel Ng" />;
