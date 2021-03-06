const express = require("express"); 
const app = express(); 
const db = require("./models");
 


// parse requests of content-type - application/json
app.use(express.json());  

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));    


// 
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


// simple route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to postgres application.</h1>");
});

app.use("/api", require('./routes'))

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
