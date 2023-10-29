const route = require("express").Router()
const { readFileSync, writeFileSync } = require('fs')

route.post("/score", (req, res) => {
    const body = req.body
    const json1 = readFileSync("tests.json", "utf8")
    const object = JSON.parse(json1)
    object.scores.push(body)
    const json2 = JSON.stringify(object)
    writeFileSync("tests.json", json2)
    res.json({info:"Сохранено!"})
})

module.exports = route