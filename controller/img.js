const getImg = require('../model/img.js')

const getImgApi = async (req, res) => {
    const rs = await getImg(req.query)
    const index = parseInt(Math.random() * (rs.length)) + 0

    const type = req.query.type

    if (type === 'json') {
        if (rs) {
            res.send({
                pic: rs[index].img
            })
        } else {
            res.send({
                code: 500,
                msg: 'get img error'
            })
        }
    } else {
        res.redirect(rs[index].img)
    }
}

module.exports = getImgApi