const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }

  res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `);
});

server.listen(8000);


// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Home page");
//   }
//   if (req.url === "/about") {
//     //Blocking code
//     for (let i = 0; i < 100; i++) {
//       for (let j = 0; j < 100; j++) {
//         console.log(`${i} ${j}`);
//       }
//     }
//     res.end("About");
//   }
//   //   res.end("Error Page");
// });

// server.listen(5000, () => {
//   console.log("Server listening on port 5000....");
// });
