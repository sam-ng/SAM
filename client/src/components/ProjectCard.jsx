import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProjectCard = ({ href, image, alt, title, description, tags }) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg hover:scale-105 hover:ease-in-out duration-300">
      <a className="w-full h-full" href={href}>
        <div className="w-full min-h-1/2 h-fit">
          <GatsbyImage
            className="object-scale-down"
            image={getImage(image)}
            alt={alt}
          />
        </div>
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold font-Raleway">{title}</h3>
          <p className="mt-2 text-gray-700 text-sm font-Raleway">
            {description}
          </p>
        </div>
        <div className="px-6 pb-2 flex flex-row flex-wrap items-center">
          {tags.map((tag, i) => (
            <span
              className="mr-2 my-2 rounded-full px-3 py-1 bg-gray-200 text-sm font-semibold font-Raleway"
              key={i}
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
