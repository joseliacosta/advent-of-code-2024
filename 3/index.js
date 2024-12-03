const fs = require("node:fs");
function isValidInput(inputString) {
    // Define regex for valid format
    const pattern = /^\(\d+,\d+\)$/;
    return pattern.test(inputString);
}

fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split("\n")
    const parts = lines.map(item=> item.split("mul"))

    const matches = [];
    parts.forEach(part => {
        part.forEach(item => {

        const finalParenthesis = item.indexOf(")")
        const possibleOperation = item.slice(0,finalParenthesis+1)
            if(possibleOperation!=="") {
                if(isValidInput(possibleOperation)){
                    matches.push(possibleOperation);
                }
            }
        })

    })

    const calculationPerOperation = matches.map(item=>item.split(",")).map((item, index)=> {
        let newFirstItem = parseInt(item[0].replace("(", ""))
        let newSecondItem = parseInt(item[1].replace(")", ""))
        return newFirstItem * newSecondItem
    })
    const initialValue = 0;
    const total = calculationPerOperation.reduce((acc, cur) => {return acc+cur}, initialValue)
    console.log(calculationPerOperation)
    console.log(total)



})