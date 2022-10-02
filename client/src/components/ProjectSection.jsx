import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import ProjectCard from './ProjectCard';

const ProjectSection = ({ data }) => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-Raleway font-semibold my-2">
        Featured Projects
      </h2>
      <div className="mt-4 flex flex-row flex-wrap">
        {data.allMdx.nodes.map(({ frontmatter, id }) => {
          console.log(id);
          const { name, description, link, image, tags } = frontmatter;
          return (
            <ProjectCard
              href={link}
              image={image}
              alt={name}
              title={name}
              description={description}
              tags={tags}
              key={id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
