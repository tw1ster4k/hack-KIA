const route = require('express').Router()
const fs = require('fs')
const { readFileSync, writeFileSync } = require('fs')

route.get('/tests', (req, res) => {

    fs.readFile("tests.json", "utf8", (err, data) => {
        if(err) {
            console.log(err)
            return
        } 
        try {
            res.json(JSON.parse(data))
        } catch (Err) {
            console.log(Err)
        }
    } )
})

route.post('/tests/new', (req, res) => {
    const body = req.body;
    const json1 = readFileSync("tests.json", "utf8")
    const object = JSON.parse(json1)
    object.tests.push(body)
    const json2 = JSON.stringify(object)
    writeFileSync("tests.json", json2)
    res.json({info: 'Сохранено!'})
} )

module.exports = route