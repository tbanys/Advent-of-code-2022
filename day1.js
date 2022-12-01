const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, 'input/day1.txt'), 'utf8');

const sums = input.split(/\n\n/).map((n) => n.split(/\n/).reduce((acc, cur) => acc + Number(cur), 0));

// get max value of sums
const max = sums.reduce((acc, cur) => Math.max(acc, cur), 0);

// get value of top 3 numbers in sums array and sum them
const top3sum = sums.sort((a, b) => b - a).slice(0, 3).reduce((acc, cur) => acc + cur, 0);

console.log({max});
console.log({top3sum});

// run "node day1.js" in terminal to get results
