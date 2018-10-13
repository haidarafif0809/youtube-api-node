var express = require('express');
var router = express.Router();
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyBIPs4-L8KAm1oymrXvAu-KzdxUKF7LqkQ');
const faker = require('faker')
/* GET users listing. */

router.get('/:id', function(req, res, next) {
  const id = req.params.id
  youtube.getVideoByID(id)
   .then(results => {
     res.json(results)
   })
 .catch(console.error);
});

router.get('/', function(req, res, next) {
  youtube.search(faker.lorem.word(), 20)
   .then(results => {
     res.json(results)
   })
 .catch(console.error);
});

router.get('/search/:id', function(req, res, next) {
  const id = req.params.id
  youtube.search(id)
   .then(results => {
     res.json(results)
   })
 .catch(console.error);
});


module.exports = router;
