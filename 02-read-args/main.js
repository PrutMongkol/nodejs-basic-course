const fs = require("fs");

const filePath = "data.txt"
const input = process.argv[2]

fs.appendFileSync(filePath, input + "\n")