import React from 'react';

import { useSiteMetadata } from './hooks/useSiteMetadata';
import appleTouchIcon from '../images/favicon/appleTouchIcon';
import favicon16x16 from '../images/favicon/favicon16x16';
import favicon32x32 from '../images/favicon/favicon32x32';

const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="manifest" href="/src/images/favicon/site.webmanifest" />
      {children}
    </>
  );
};

export default Seo;
