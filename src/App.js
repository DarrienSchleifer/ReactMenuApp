import React from "react";
import MenuApp from "./components/MenuApp"; // import MenuApp component

const menuData = [
  {
    menuName: "Dinner", //category name
    menuItems: [
      // list of items in dinner category
      {
        itemId: 1,
        itemPrice: "12", // price
        itemName: "Lasagne", // name
        itemDescription: "Layers of pasta with cheese and meat.", //description
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

// component that renders the app
const App = () => {
  return (
    <div className="App">
      <MenuApp data={menuData} />
    </div>
  );
};

export default App;
