import React from 'react';
import { Link } from 'gatsby';

import NavBarLink from './NavBarLink';

const NavBar = () => {
  return (
    <div className="bg-slate-700/75 px-10 py-4 flex flex-row justify-between items-center">
      <div className="ml-32">
        <h1 className="text-white text-5xl font-thin">
          <Link className="hover:text-sky-300" to="/">
            SAM
          </Link>
        </h1>
      </div>
      <div className="mr-32 h-100 flex flex-row justify-end items-center">
        <NavBarLink pageName="Home" path="/"></NavBarLink>
        <NavBarLink pageName="Art" path="/art"></NavBarLink>
        {/* <NavBarLink pageName="About Me" path="/about"></NavBarLink> */}
      </div>
    </div>
  );
};

export default NavBar;
