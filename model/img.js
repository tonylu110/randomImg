const { Schema } = require("mongoose");
const db = require("../util/db");

const modelPc = db.model("pc", new Schema({
    img: {type: String}
}))

const modelMp = db.model("mp", new Schema({
    img: {type: String}
}))

const getImg = (postData) => {
    const device = postData.sort

    if (device === 'mp') {
        return modelMp.find().then(res => {
            return res
        })
    } else {
         return modelPc.find().then(res => {
            return res
        })
    }
}

module.exports = getImg