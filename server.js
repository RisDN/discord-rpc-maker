function szerverStart() {
    const express = require('express')
    const path = require('path')
    const app = express()
    const port = 3325

    app.use(express.static(path.join(__dirname + '/public')))
    app.set('views', path.join(__dirname + '/public/views'));

    app.set('view engine', 'ejs')
    app.use(express.urlencoded({ extended: true }))

    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    })
    app.get('/', (req, res) => {
        res.render('index')
    })
}

module.exports = { szerverStart };