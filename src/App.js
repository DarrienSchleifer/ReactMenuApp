import React from "react";
import "./App.css"; // Optional: Add styles
import MenuApp from "./components/MenuApp"; // Import MenuApp component

const menuData = [
  {
    menuName: "Dinner",
    menuItems: [
      {
        itemId: 1,
        itemPrice: "12",
        itemName: "Lasagne",
        itemDescription: "Layers of pasta with cheese and meat.",
      },
      {
        itemId: 2,
        itemPrice: "10",
        itemName: "Cheese Ravioli",
        itemDescription: "Ravioli filled with ricotta cheese.",
      },
      {
        itemId: 3,
        itemPrice: "14",
        itemName: "Chicken Parmesan",
        itemDescription: "Breaded chicken with marinara sauce.",
      },
    ],
  },
  {
    menuName: "Dessert",
    menuItems: [
      {
        itemId: 4,
        itemPrice: "10",
        itemName: "Chocolate Lava Cake",
        itemDescription: "Molten chocolate cake.",
      },
      {
        itemId: 5,
        itemPrice: "8",
        itemName: "Tiramisu",
        itemDescription: "Coffee-flavored dessert.",
      },
      {
        itemId: 6,
        itemPrice: "5",
        itemName: "Cannolis",
        itemDescription: "Pastry filled with ricotta cheese.",
      },
    ],
  },
];

const App = () => {
  return (
    <div className="App">
      <MenuApp data={menuData} />
    </div>
  );
};

export default App;
