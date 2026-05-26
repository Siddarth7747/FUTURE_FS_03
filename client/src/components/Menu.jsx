import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Menu.css";

const menuItems = [
  {
    category: "Coffee",
    name: "Caramel Dream Latte",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
  {
  category: "Coffee",
  name: "Hazelnut Cappuccino",
  price: "₹230",
  image: "https://images.unsplash.com/photo-1497636577773-f1231844b336",
},

{
  category: "Coffee",
  name: "Mocha Magic",
  price: "₹250",
  image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
},

{
  category: "Coffee",
  name: "Vanilla Cold Brew",
  price: "₹260",
  image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
},

{
  category: "Coffee",
  name: "Iced Americano",
  price: "₹190",
  image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
},

{
  category: "Coffee",
  name: "Irish Cream Latte",
  price: "₹270",
  image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571",
},

{
  category: "Coffee",
  name: "Cinnamon Flat White",
  price: "₹240",
  image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2",
},

{
  category: "Coffee",
  name: "Dark Chocolate Mocha",
  price: "₹280",
  image: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
},

{
  category: "Coffee",
  name: "Espresso Shot",
  price: "₹150",
  image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
},
  {
    category: "Coffee",
    name: "Classic Cappuccino",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    category: "Coffee",
    name: "Spanish Latte",
    price: "₹240",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    category: "Snacks",
    name: "Cheese Burger",
    price: "₹260",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    category: "Snacks",
    name: "French Fries",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f",
  },
  {
    category: "Drinks",
    name: "Mint Mojito",
    price: "₹170",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
  },
  {
    category: "Snacks",
    name: "Chicken Alfredo Pasta",
    price: "₹320",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
  },
  {
    category: "Snacks",
    name: "Creamy White Sauce Pasta",
    price: "₹290",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a",
  },
  {
    category: "Snacks",
    name: "Margherita Pizza",
    price: "₹340",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    category: "Snacks",
    name: "Farmhouse Pizza",
    price: "₹390",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  },
  {
    category: "Snacks",
    name: "Loaded Nachos",
    price: "₹250",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d",
  },
  {
    category: "Snacks",
    name: "Tandoori Paneer Pizza",
    price: "₹420",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
  {
    category: "Snacks",
    name: "Mexican Loaded Wrap",
    price: "₹260",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
  },
  {
  category: "Desserts",
  name: "Chocolate Brownie",
  price: "₹180",
  image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
},

{
  category: "Desserts",
  name: "Red Velvet Cake",
  price: "₹260",
  image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f",
},

{
  category: "Desserts",
  name: "Tiramisu Cup",
  price: "₹280",
  image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
},

{
  category: "Desserts",
  name: "Chocolate Donut",
  price: "₹140",
  image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
},

{
  category: "Desserts",
  name: "Ice Cream Sundae",
  price: "₹210",
  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
},

{
  category: "Desserts",
  name: "Choco Lava Cake",
  price: "₹230",
  image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
},

{
  category: "Desserts",
  name: "Strawberry Cupcake",
  price: "₹160",
  image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d",
},

{
  category: "Desserts",
  name: "Caramel Pudding",
  price: "₹190",
  image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
},
  {
    category: "Desserts",
    name: "Blueberry Cheesecake",
    price: "₹240",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
  },
  {
    category: "Desserts",
    name: "Belgian Chocolate Waffle",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d",
  },
  {
    category: "Desserts",
    name: "Nutella Pancakes",
    price: "₹260",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
  },
  {
  category: "Drinks",
  name: "Blue Lagoon",
  price: "₹190",
  image: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
},

{
  category: "Drinks",
  name: "Lemon Iced Tea",
  price: "₹160",
  image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87",
},

{
  category: "Drinks",
  name: "Watermelon Cooler",
  price: "₹180",
  image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054",
},

{
  category: "Drinks",
  name: "Cold Coffee Frappe",
  price: "₹230",
  image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
},

{
  category: "Drinks",
  name: "Chocolate Milkshake",
  price: "₹240",
  image: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
},

{
  category: "Drinks",
  name: "Pineapple Punch",
  price: "₹190",
  image: "https://images.unsplash.com/photo-1546173159-315724a31696",
},

{
  category: "Drinks",
  name: "Kiwi Mojito",
  price: "₹210",
  image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
},

{
  category: "Drinks",
  name: "Rose Milk",
  price: "₹170",
  image: "https://images.unsplash.com/photo-1553787499-6f9133860278",
},
  {
    category: "Drinks",
    name: "Strawberry Milkshake",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
  },
  {
    category: "Drinks",
    name: "Oreo Shake",
    price: "₹240",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
  },
  {
    category: "Drinks",
    name: "Mango Smoothie",
    price: "₹210",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
  },
  {
  category: "Drinks",
  name: "Classic Lemonade",
  price: "₹150",
  image:
    "https://images.unsplash.com/photo-1621263764928-df1444c5e859",
},
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section
  id="menu"
  className="menu bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
     "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.68)), url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8')",
  }}
>
      <div className="menu-top">
        <p>OUR SPECIAL MENU</p>
        <h1>Fresh Coffee & Tasty Snacks</h1>
      </div>

      <input
        type="text"
        placeholder="Search coffee..."
        className="w-full p-3 rounded-xl bg-zinc-900 text-white mb-8"
      />

      <div className="flex gap-4 mb-10 flex-wrap justify-center">
        {["All", "Coffee", "Snacks", "Drinks", "Desserts"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full ${
              activeCategory === cat
                ? "bg-yellow-500 text-black"
                : "bg-zinc-800 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {menuItems
          .filter(
            (item) =>
              activeCategory === "All" || item.category === activeCategory
          )
          .map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-black rounded-3xl overflow-hidden border border-zinc-800"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="menu-info">
                <span>{item.category}</span>
                <h2>{item.name}</h2>
                <h3>{item.price}</h3>

                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold transition duration-300">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}

export default Menu;