const fs = require("node:fs");

fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const input = data.split("\n")
    console.log(input)
})