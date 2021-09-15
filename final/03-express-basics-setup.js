//COPY THIS WHOLE PAGE AND PASTE IT ON APP.JS. AS APP.JS IS SET AS MAIN PAGE FOR NODE TO RECOGNIZE

const http = require("http");

//setup Server
const server = http.createServer((req, res) => {
  console.log("user hit the server");

  // if we dont use this, the browser will spin and nothing will show up
  // so lets end the communication and send header and body to the user who requested the server.
  res.end("home page");
});

server.listen(5000);
