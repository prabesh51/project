// Henry Sutton = 103072963 

import React from "react";
import Footer from "./Footer"; // Import the Footer component
import Header from "./Header"; // Import the Header component

const Layout = ({ children }) => {
  return (
    <>
      <Header /> {/* Include the Header component */}
      <div>{children}</div> {/* Render the child components */}
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default Layout;
