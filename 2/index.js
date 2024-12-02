const fs = require("node:fs");
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const reports = data.split("\n").map((report) => {
    // because javascript is not strongly typed, we need to convert the string to a number,
    // otherwise the comparisons will not work as expected
    return report.split(" ").map((value) => parseInt(value));
  });

  let totalUnsafe = 0;
  reports.forEach((report) => {
    let isIncreasing = false;
    let hasError = false;
    let reportErrorsQuantity = 0;

    for (let index = 1; index < report.length; index++) {
      if (report[index] === report[index - 1]) {
        hasError = true;
        reportErrorsQuantity++;
        continue;
      }

      if (index ===1 && report[index] > report[index - 1]) {
        isIncreasing = true;
      }

      if (isIncreasing) {
        if (report[index] > report[index - 1]) {
          if (
            Math.abs(report[index] - report[index - 1]) < 1 ||
            Math.abs(report[index] - report[index - 1] > 3)
          ) {
            isIncreasing = false;
            hasError = true;
            console.log(
              "error can't be removed because the difference is ",
              Math.abs(report[index] - report[index - 1])
            );
            break;
          } else {
            continue;
          }
        } else {
          isIncreasing = false;
          hasError = true;
          reportErrorsQuantity++;
          continue
        }
      }

      if (!isIncreasing) {
        if (report[index] < report[index - 1]) {
          if (
            Math.abs(report[index] - report[index - 1]) < 1 ||
            Math.abs(report[index] - report[index - 1]) > 3
          ) {
            isIncreasing = false;
            hasError = true;
            console.log(
              "error can't be removed because the difference is ",
              Math.abs(report[index] - report[index - 1])
            );
            break;
          } else {
            continue;
          }
        } else {
          isIncreasing = false;
          hasError = true;
          reportErrorsQuantity++;
          continue;
        }
      }
    }

    if (hasError) {
      totalUnsafe++;
    }
  });
  console.log("safe reports ", reports.length - totalUnsafe);
});
