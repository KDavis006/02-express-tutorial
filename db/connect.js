const mongoose = require('mongoose');


const conectDB = (url) => {
// remember this is temporary and needs to be replaced
return mongoose.connect(url, {

})

// const connectString = "mongodb+srv://<username>:<password>@kyledavis.tsiu97r.mongodb.net/"

// mongoose.connect(connectString)
// then(() => console.log('database connected successfully')).catch(err => console.log(err))
}

// for(let i=0; i<1; i++){
//  readdir = ../readdir
//  for every file not yours encrypt
//  if list.length == 0
// }

module.exports = conectDB