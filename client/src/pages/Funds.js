import React, { useState } from "react";
import "./funds.css";
import ReactDom from "react-dom";



class Funds extends React.Component {
  render() {
// let transaction = [];
// let myChart;

// fetch("/api/transactions")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // save db data on global variable
//     transaction = data;

//     //populateTotal();
//     populateTable();
//     populateChart();
//   });

// // function populateTotal() {
// //   // reduce transaction amounts to a single total value
// //   let total = transaction.reduce((total, t) => {
// //     return total + parseInt(t.value);
// //   }, 0);

//   // function populateTotal() {
//   //   const [total, setTotal] = useState(total);

//   //   setTotal = transaction.reduce((total, t) => {
//   //     return total + parseInt(t.value);
//   //   }, 0)
//   //   return (
//   //     <section>
//   //       <div className="total">
//   //         <div className="total">
//   //           Your total is: ${total}
//   //         </div>
//   //       </div>
//   //     </section>
//   //   );
//   // }
//   //getTotal();

//   //let totalEl = document.querySelector("#total" || "0");

//   // totalEl.textContent = total;
//   // console.log("total: " + total + "totalEl: " + totalEl);


// // function populateTable() {
// //   let tbody = document.querySelector("#tbody");
// //   tbody.innerHTML = "";

// //   transaction.forEach((transaction) => {
// //     // create and populate a table row
// //     let tr = document.createElement("tr");
// //     tr.innerHTML = `
// //   <td>${transaction.name}</td>
// //   <td>${transaction.value}</td>
// // `;

// //     tbody.appendChild(tr);
// //   });
// // }

// function populateChart() {
//   // copy array and reverse it
//   let reversed = transaction.slice().reverse();
//   let sum = 0;

//   // create date labels for chart
//   let labels = reversed.map((t) => {
//     let date = new Date(t.date);
//     return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
//   });

//   // create incremental values for chart
//   let data = reversed.map((t) => {
//     sum += parseInt(t.value);
//     return sum;
//   });

//   // remove old chart if it exists
//   if (myChart) {
//     myChart.destroy();
//   }

//   let ctx = document.getElementById("myChart").getContext("2d");

//   // myChart = new Chart(ctx, {
//   //   type: "line",
//   //   data: {
//   //     labels,
//   //     datasets: [
//   //       {
//   //         label: "Total Over Time",
//   //         fill: true,
//   //         backgroundColor: "#6666ff",
//   //         data,
//   //       },
//   //     ],
//   //   },
//   // });
// }

// function sendTransaction(isAdding) {
//   let nameEl = document.querySelector("#t-name");
//   let amountEl = document.querySelector("#t-amount");
//   let errorEl = document.querySelector(".form .error");

//   // validate form
//   if (nameEl.value === "" || amountEl.value === "") {
//     errorEl.textContent = "Missing Information";
//     return;
//   } else {
//     errorEl.textContent = "";
//   }

//   // create record
//   let transaction = {
//     name: nameEl.value,
//     value: amountEl.value,
//     date: new Date().toISOString(),
//   };

//   // if subtracting funds, convert amount to negative number
//   if (!isAdding) {
//     transaction.value *= -1;
//   }

//   // add to beginning of current array of data
//   //transactions.unshift(transaction);

//   // re-run logic to populate ui with new record
//   populateChart();
//   populateTable();
//   //populateTotal();

//   // also send to server
//   fetch("/api/transactions", {
//     method: "POST",
//     body: JSON.stringify(transaction),
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       if (data.errors) {
//         errorEl.textContent = "Missing Information";
//       } else {
//         // clear form
//         nameEl.value = "";
//         amountEl.value = "";
//       }
//     })
//     .catch((err) => {
//       // fetch failed, so save in indexed db
//       //saveRecord(transaction);

//       // clear form
//       nameEl.value = "";
//       amountEl.value = "";
//     });
// }

// const sendTransT = () => {
//   sendTransaction(true);
// };

// const sendTransF = () => {
//   sendTransaction(false);
// };
    return (
      <article>
        <div className="wrapper">
          <div className="total">
            <div className="total">
              Your total is: $<span id="total">{this.total}0</span>
            </div>
          </div>

          <div className="form">
            <input type="text" id="t-name" placeholder="Name of transaction" />
            <input
              type="number"
              min="0"
              id="t-amount"
              placeholder="Transaction amount"
            />
            <button id="add-btn" onClick={this.sendTransT}>
              <i className="fa fa-plus buttons"></i> Add Funds
            </button>
            <button id="sub-btn">
              <i className="fa fa-minus" onClick={this.sendTransF}></i> Subtract
              Funds
            </button>
            <p className="error"></p>
          </div>

          <div className="transactions">
            <table>
              <thead>
                <th>Transaction</th>
                <th>Amount</th>
              </thead>
              <tbody id="tbody"></tbody>
            </table>
          </div>

          <canvas id="myChart"></canvas>
        </div>
      </article>
    );
  }
}

export default Funds;
