import React, { useState } from "react";
import "./funds.css";

import { Header } from "../components/fundsComponents/Header";
import { Balance } from "../components/fundsComponents/Balance";
import { IncomeExpenses } from "../components/fundsComponents/IncomeExpenses"
import {TransactionList} from "../components/fundsComponents/TransactionList"
import {AddTransaction} from "../components/fundsComponents/AddTransaction"

import {GlobalProvider} from "../context/GlobalState"


function Funds() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
}


export default Funds;
