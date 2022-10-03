import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Art = ({ data }) => {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center mt-10 w-1/2">
        <h2 className="text-5xl font-bold font-Raleway">Art</h2>
        <p className="mt-5 text-xl text-center leading-loose font-Raleway">
          Here is home to some of my favorite pieces of art I've done over the
          years.
        </p>
      </section>
      <section className="mt-4 flex flex-row flex-wrap justify-center">
        {data.allMdx.nodes.map(({ frontmatter, id }) => {
          const { name, description, image } = frontmatter;
          return (
            <div
              className="mr-4 mb-4 max-w-lg rounded overflow-hidden shadow-lg hover:scale-105 hover:ease-in-out duration-300"
              key={id}
            >
              <GatsbyImage
                className="object-scale-down"
                image={getImage(image)}
                alt={name}
              />
              <div className="px-6 py-4">
                <h3 className="text-lg font-semibold font-Raleway">{name}</h3>
                <p className="mt-2 text-gray-700 text-sm font-Raleway">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export const artQuery = graphql`
  query {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "//art//" } } }
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
          dateStart
          dateEnd
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="Art | Samuel Ng" />;

export default Art;
