import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>
        {/* <SidePanel /> */}
        {children}
      </main>
      <footer></footer>
    </>
  );
};

export default DefaultLayout;
