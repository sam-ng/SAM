import React from 'react';

import yourNameSky from '../images/yourNameSky.jpg';

import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-Raleway font-semibold my-2">
        Featured Projects
      </h2>
      <div className="mt-4">
        <ProjectCard
          href="https://github.com/sam-ng/Downcloud"
          image={yourNameSky}
          alt="Downcloud"
          title="Downcloud"
          description="Collaborative text editor, perfect for putting ideas down together."
          tags={[
            'ShareDB',
            'Elasticsearch',
            'Node.js',
            'Express.js',
            'EJS',
            'MongoDB',
          ]}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
