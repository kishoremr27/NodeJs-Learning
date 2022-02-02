const fs = require("fs");

console.log("Starting the task");

fs.readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;

  fs.readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;

    fs.writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("done with the task");
      }
    );
  });
});

console.log("Starting the next task");
