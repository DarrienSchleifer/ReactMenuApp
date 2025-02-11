import React from "react";
import Menu from "./Menu"; // import  menu component

// component that receives menu data
const MenuApp = ({ data }) => {
  return (
    <div className="menu-app">
      {data.map((menu) => (
        <Menu key={menu.menuName} menu={menu} />
      ))}
    </div>
  );
};

export default MenuApp;
