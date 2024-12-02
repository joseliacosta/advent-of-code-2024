const fs = require("node:fs");
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const mergedList = data.split("\n");

  const firstList = mergedList
    .map((item) => {
      return item.split("   ")[0];
    })
    .sort((a, b) => a - b);

  const secondList = mergedList
    .map((item) => {
      return item.split("   ")[1];
    })
    .sort((a, b) => a - b);

  let total = 0;

  for (let i = 0; i < mergedList.length; i++) {
    total = total + Math.abs(firstList[i] - secondList[i]);
  }
  // part two
  
  let similarityScore = 0;
  firstList.forEach((itemFromFirstList) => {
    let accumulator = 0;
    secondList.forEach((itemFromSecondList) => {
      if (itemFromFirstList === itemFromSecondList) {
        accumulator++;
      }
    });
    similarityScore += itemFromFirstList * accumulator;
  });

  console.log("total score", total);
  console.log("similarity score", similarityScore);
});
