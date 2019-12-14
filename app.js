//Setting up express server
var express = require('express')
var app = express()

//Accessing static files
app.use('/assets', express.static('assets'))

//Set the view engine
app.set('view engine', 'ejs')

//Routing
var router = require('./router.js')

app.use('/', router)
app.use('/results', router)

app.listen(3000, () => {console.log('App listening on port 3000...')})
