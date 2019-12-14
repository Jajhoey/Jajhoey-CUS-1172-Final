var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var encodedParser = bodyParser.urlencoded({extended: false})
//For accessing json data
const data = require(__dirname + '/assets/courses.json')

//Routes
router.get('/', encodedParser, (req, res) => {
  console.log(req.body);
  console.log(req.url);
  res.render('index.ejs', {data: data})
})

//Access to req.body comes from the body-parser module

router.post('/results', encodedParser, (req,res) => {
  console.log(req.body);
  console.log(req.query);
  var results = returnResults(data, req.body)
  res.render('results.ejs', {data: results})
})

//Takes the json file and res.body as parameters, then uses that data
//to search through the json objects for a match
//(req.body is the info passed to the post route (/results) from the searchForm form in the body)
function returnResults(json, body){
  var results = []
  json.forEach((course) => {
    if (course.title.toLowerCase().includes(body.input.toLowerCase())
    || course.course_code.toLowerCase().includes(body.input.toLowerCase())
    || course.instructor.toLowerCase().includes(body.input.toLowerCase())
    || course.type.toLowerCase().includes(body.input.toLowerCase())) {
      results.push(course)
    }

  })
  return results
}

module.exports = router
