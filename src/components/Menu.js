import React from "react";
import MenuItem from "./MenuItem"; // import MenuItem component

// component that receives manu object
const Menu = ({ menu }) => {
  return (
    <div className="menu">
      <h1>{menu.menuName} Menu</h1>
      {menu.menuItems.map((item) => (
        <MenuItem key={item.itemId} item={item} />
      ))}
    </div>
  );
};

export default Menu;
