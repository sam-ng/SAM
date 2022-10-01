import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

import SocialLink from './SocialLink';

const Socials = () => {
  return (
    <section className="mt-5 flex flex-row justify-center items-center">
      <SocialLink
        href="https://www.linkedin.com/in/sam-ng4/"
        icon={<FaLinkedinIn />}
      />
      <SocialLink href="https://github.com/sam-ng" icon={<FaGithub />} />
      <SocialLink href="mailto:ngsamu4@gmail.com" icon={<FaEnvelope />} />
    </section>
  );
};

export default Socials;
