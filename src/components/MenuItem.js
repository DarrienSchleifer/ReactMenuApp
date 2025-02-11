import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <h2>
        {item.itemName} - ${item.itemPrice}
      </h2>
      <p>{item.itemDescription}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
