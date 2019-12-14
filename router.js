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

//Access to the req.body comes from the body-parser module
router.get('/results', (req,res) => {
  console.log(req.query);
  console.log(req.body);
  var results = returnResults(data, req.query)
  res.render('results.ejs', {data: results})
})

router.post('/results', encodedParser, (req,res) => {
  console.log(req.body);
  console.log(req.query);
  var results = returnResults(data, req.query)
  res.render('results.ejs', {data: results})
})

//Takes the json file and res.query as input,
//then returns an array of json objects including that res.query
function returnResults(json, input){
  var results = []
  json.forEach((course) => {
    var lowerCaseTitle = course.title.toLowerCase()
    var lowerCaseCode = course.course_code.toLowerCase()
    var lowerCaseInstructor = course.instructor.toLowerCase()
    var lowerCaseType = course.type.toLowerCase()
    if (course.title.includes(input.title) || lowerCaseTitle.includes(input.title)) {
      results.push(course)
    }
    if(course.course_code.includes(input.course_code) || lowerCaseCode.includes(input.course_code)){
      results.push(course)
    }
    if(course.instructor.includes(input.instructor) || lowerCaseInstructor.includes(input.instructor)){
      results.push(course)
    }
    if(course.type.includes(input.type) || lowerCaseType.includes(input.type)){
      results.push(course)
    }

  })
  return results
}

module.exports = router
