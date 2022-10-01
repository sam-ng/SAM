import React from 'react';
import { Link } from 'gatsby';

const NavBarLink = ({ pageName, path }) => {
  return (
    <div className="h-100 mx-4 px-4 ">
      <Link
        className="text-white font-Raleway text-lg font-bold text-center p-2 hover:text-sky-300"
        to={path}
      >
        {pageName}
      </Link>
    </div>
  );
};

export default NavBarLink;
