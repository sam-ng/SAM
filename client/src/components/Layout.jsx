import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="w-full flex flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
