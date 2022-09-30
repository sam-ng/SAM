import React from 'react';

const ProjectCard = ({ href, image, alt, title, description, tags }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 hover:ease-in-out duration-300">
      <a className="w-full h-full" href={href}>
        <img className="w-full max-h-1/3" src={image} alt={alt}></img>
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold font-Raleway">{title}</h3>
          <p className="mt-2 text-gray-700 text-sm font-Raleway">
            {description}
          </p>
        </div>
        <div class="px-6 pb-2 flex flex-row flex-wrap items-center">
          {tags.map(tag => (
            <span className="mx-2 my-2 rounded-full px-3 py-1 bg-gray-200 text-sm font-semibold font-Raleway">
              {tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
