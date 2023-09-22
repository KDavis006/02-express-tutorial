const fs = require('fs');
const path = require('path');
// fs.writeFileSync(path.join(__dirname, '/name.txt'), "This is new test file for today", (err) => {
//  if (err) {
//   console.error(err);
//   return
//  }
// });

// fs.appendFile(path.join(__dirname, '/name.txt'), ' My name is Kyle', (err) => {
//  if (err) {
//   console.error(err);
//   return}
//  })

// fs.unlink(path.join(__dirname, '/name.txt'), (err) => {
//  if (err) {
//   console.log(err);
//   return
//  }
// })

fs.mkdir(path.join(__dirname, '/Davis'), (err) => {
 if (err) {
  console.log(err);
  return
 }
})