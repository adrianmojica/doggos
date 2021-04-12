var express = require('express');
var router = express.Router();
const axios = require('axios');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', (req, res)=>{
  axios.get('https://dog.ceo/api/breeds/list/all')
    .then(response=>{
      // handle success
      res.send(response.data)
    })
})

module.exports = router;
