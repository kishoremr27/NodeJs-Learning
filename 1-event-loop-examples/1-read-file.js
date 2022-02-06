const fs = require("fs");

console.log("Starting the first task");

fs.readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(res);
  console.log("Complete the next task");
});

console.log("Starting the next task");
