import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const AddTransaction = () => {
  const [name, setName] = useState("");
  const [value, setValue]= useState(0);

  const { addTransaction} = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      value: +value
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-styles">
          <label htmlFor="name" class="addTransacText">Transaction name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-styles">
          <label htmlFor="value" class="addTransacText">
            Amount <br />
            (negative - expense || positive - income)
          </label>
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
