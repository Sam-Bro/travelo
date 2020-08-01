const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const connectDB = require('./config/db')
const dotenv = require("dotenv")

dotenv.config({path: './config/config.env'});

connectDB();


const transactions = require('./routes/transactions')

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json())

if(process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
}

app.use('/api/v1/transactions', transactions)

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));


// const PORT = process.env.PORT || 3002;
// const app = express();
// app.use(logger("dev"));

// app.use(compression());

// const transactions = require('./routes/transactions')

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static("client/build"));
// // }

// if(process.env.NODE_ENV === 'development') {
//   app.use(logger('dev'));
// }

// mongoose.connect(
//   "mongodb://localhost/travelo",
//   { useNewUrlParser: true },
//   function (error) {
//     if (error) throw error;
//     app.listen(PORT, () => {
//       console.log(`🌎 ==> API server now on port ${PORT}!`);
//     });
//   }
// );

// // routes
// app.use('/api/v1/transactions', transactions)

// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
