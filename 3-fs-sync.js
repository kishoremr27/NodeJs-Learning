const fs = require("fs");

const first = fs.readFileSync("./content/first.txt", "utf8");
const second = fs.readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

console.log("starting the task");
//If file is already there, it will override the content, otherwise it
// will create new file and text inside it
fs.writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
  //if we add flag it will not override, instead it adds to the existing content
);
console.log("finishing the task");
console.log("starting the next task");
//executes line by line
