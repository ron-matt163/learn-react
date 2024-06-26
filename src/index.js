import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const headerStyle = {};
  return (
    <header className="header">
      <h1 style={headerStyle}>Fast Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian Pizzas. Best you've ever tasted (probably)!</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaProp={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaProp }) {
  console.log(pizzaProp);

  // if (pizzaProp.soldOut) return null;
  return (
    <li className={`pizza ${pizzaProp.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaProp.photoName} alt={pizzaProp.name} />
      <div>
        <h3>{pizzaProp.name}</h3>
        <p>{pizzaProp.ingredients}</p>
        <span>{pizzaProp.soldOut ? "Sold Out" : pizzaProp.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = currHour >= openHour && currHour < closeHour;
  console.log(isOpen);

  // if (currHour >= openHour && currHour < closeHour) {
  //   alert("We are currently open");
  // } else {
  //   alert("Sorry! We're closed.");
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>We're closed! We're happy to welcome you between 12pm to 10pm.</p>
      )}
    </footer>
  );
}

function Order() {
  return (
    <div className="order">
      <p>It is {new Date().toLocaleTimeString()}. We are currently open!</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
