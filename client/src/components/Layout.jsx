import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-100 h-100 flex flex-col items-center">{children}</main>
    </>
  );
};

export default Layout;
