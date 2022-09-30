import React from 'react';

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="rounded-full bg-slate-500 border-solid border-black text-white p-2 m-2"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
