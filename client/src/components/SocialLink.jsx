import React from 'react';

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="rounded-full bg-slate-500 border-solid border border-black text-white p-2 m-2 hover:bg-slate-700"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
