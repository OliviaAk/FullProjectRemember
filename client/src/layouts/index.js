import React from "react";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div >
          {props.children}
      <Footer />
    </div>
  );
}
export default Layout;
