// Dependencies
const express = require("express");

// EXPRESS Server
const app = express();

const PORT = process.env.PORT || 8080;

// Set up for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTER

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, function () {
  console.log(`🌎 ==> Server is now listening on port ${PORT}!`);
});
