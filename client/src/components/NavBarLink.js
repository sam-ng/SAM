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

function chooseColor(pageName) {
  if (pageName === 'Home') return 'skyblue';
  else if (pageName === 'Art') return 'red';
  else if (pageName === 'About Me') return 'orange';
}

export default function NavBarLink({ pageName, href }) {
  return (
    <Link className="" to={href}>
      {pageName}
    </Link>
  );
}
