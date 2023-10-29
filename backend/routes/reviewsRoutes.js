const route = require('express').Router()
const fs = require('fs')
const { readFileSync, writeFileSync } = require('fs')

route.get('/reviews', (req, res) => {

    fs.readFile("reviews.json", "utf8", (err, data) => {
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

route.post('/reviews/new', (req, res) => {
    const body = req.body;
    const json1 = readFileSync("reviews.json", "utf8")
    const object = JSON.parse(json1)
    object.reviews.push(body)
    const json2 = JSON.stringify(object)
    writeFileSync("reviews.json", json2)
    res.json({info: 'Сохранено!'})
} )

module.exports = route;