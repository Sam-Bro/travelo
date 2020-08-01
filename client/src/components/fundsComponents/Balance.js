import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { numberWithCommas } from "../../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.value);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <article class="center-content">
        <h4 class="balanceText">Your Balance</h4>
        <h1 class="yourBalance">${numberWithCommas(total)}</h1>
      </article>
    </>
  );
};
