const { createConnection } = require("mongoose");

const db = createConnection("mongodb://localhost:27017/randomImg", err => {
  if (err) {
    console.log("------------")
    console.log("connect error", err)
    console.log("------------")
    return
  }
  console.log("connect success")
})

module.exports = db;