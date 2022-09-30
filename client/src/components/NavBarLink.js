import React from 'react';
import { Link } from 'gatsby';

// const Link = styled.a`
//   @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
//   color: white;
//   font-family: 'Raleway', sans-serif;
//   font-size: 18pt;
//   font-weight: 100;
//   text-align: center;
//   text-decoration: none;
//   padding: 10px 20px 10px 20px;
//   display: block;
//   transition: color 0.3s;
//   &:hover {
//     color: ${props => chooseColor(props.pageName)};
//   }
// `;

export default function NavBarLink({ pageName, path }) {
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
}
