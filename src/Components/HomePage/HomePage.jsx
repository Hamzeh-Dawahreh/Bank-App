import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./homepage.css";

export default function HomePage() {
  const [formValues, setFormValues] = useState({});
  const [cards, setCards] = useState([]);
  const [numberOfAccounts, setNumberOfAccounts] = useState(0);

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newCard = { ...formValues };
    setCards([...cards, newCard]);
    setFormValues({});
    setNumberOfAccounts(numberOfAccounts + 1);
  }
  function handleDelete(index) {
    setCards(cards.filter((card, i) => i !== index));
    setNumberOfAccounts(numberOfAccounts - 1);
  }

  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Customer Name</label>
          <input
            type="text"
            onChange={handleChange}
            name="customerName"
            value={formValues.customerName || ""}
          />
          <label htmlFor="">Account Number </label>
          <input
            type="text"
            onChange={handleChange}
            name="accountNumber"
            value={formValues.accountNumber || ""}
          />
          <label htmlFor="">Account Type </label>
          <input
            type="text"
            onChange={handleChange}
            name="accountType"
            value={formValues.accountType || ""}
          />
          <input type="submit" value="Submit" className="submit-button" />
        </form>
        <div className="cards-container">
          <div className="number">Number of Accounts: {numberOfAccounts}</div>
          {cards &&
            cards.map((card, index) => (
              <div key={index} className="card">
                <div className="id">{index + 1}</div>
                <div className="customerName">{card.customerName}</div>
                <div className="accountNumber">{card.accountNumber}</div>
                <div className="accountType">{card.accountType}</div>
                <button onClick={() => handleDelete(index)} className="delete">
                  Delete Account
                </button>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
