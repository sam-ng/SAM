import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

import SocialLink from './SocialLink';

const Socials = () => {
  return (
    <div className="mt-10 flex flex-row justify-center items-center">
      <SocialLink
        href="https://www.linkedin.com/in/sam-ng4/"
        icon={<FaLinkedinIn />}
      />
      <SocialLink href="https://github.com/sam-ng" icon={<FaGithub />} />
      <SocialLink href="" icon={<FaEnvelope />} />
    </div>
  );
};

export default Socials;
