import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import AboutSnippet from '../components/AboutSnippet';
import Socials from '../components/Socials';
import ProjectSection from '../components/ProjectSection';

const Home = ({ data }) => {
  return (
    <Layout>
      <AboutSnippet />
      <Socials />
      <ProjectSection data={data} />
    </Layout>
  );
};

export const projectsQuery = graphql`
  query {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/data/projects//" } } }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      nodes {
        frontmatter {
          name
          description
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          link
          tags
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="Samuel Ng" />;

export default Home;
