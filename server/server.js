const express = require("express");
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/connection");
const app = express();
const inventoryRoutes = require('./api/routes/inventoryRoutes')
const userRoutes = require('./api/routes/userRoutes')


mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });
// db configuaration ends here
//registering cors
app.use(cors());
//configure body parser
// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//configure body-parser ends here
app.use(morgan("dev")); // configire morgan

app.use('/user', userRoutes)

app.use('/uploads', express.static('uploads'));

app.use('/inventory', inventoryRoutes)

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});