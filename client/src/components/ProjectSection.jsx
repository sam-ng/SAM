import React from 'react';

import ProjectCard from './ProjectCard';

const ProjectSection = ({ data }) => {
  return (
    <section className="mt-10 flex flex-col justify-center">
      <h2 className="mx-6 text-2xl font-Raleway font-semibold my-2">
        Featured Projects
      </h2>
      <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {data.allMdx.nodes.map(({ frontmatter, id }) => {
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
