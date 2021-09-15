//COPY THIS WHOLE PAGE AND PASTE IT ON APP.JS. AS APP.JS IS SET AS MAIN PAGE FOR NODE TO RECOGNIZE

//LESSON #1

// const http = require("http");
// //setup Server
// const server = http.createServer((req, res) => {
//   console.log("user hit the server");

//   // if we dont use this, the browser will spin and nothing will show up
//   // so lets end the communication and send header and body to the user who requested the server.
//   res.end("home page");
// });
// server.listen(5000);

//LESSON #2
//The probem with lesson #1 is we dont provide any data to send back to user(metadata- header and body) and also if we chane the url to localhost:5000/about or /contact or whatever nothing will change, no error will be given
const http = require("http");
const server = http.createServer((req, res) => {
  //to check any requested method then write:
  console.log(req.method);
  //to check the url or params of the url that is requested by user
  console.log(req.url);

  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>home page</h1>");
  res.end();
});
server.listen(5000);
