const express = require('express')
const getImgApi = require('./controller/img')

const app = express()

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", "3.2.1")
    res.header("Content-Type", "application/json");
    next();
});

app.get('/api/api.php', getImgApi)

app.listen(552, () => {
    console.log("http://localhost:552");
})

