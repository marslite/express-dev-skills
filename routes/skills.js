var express = require('express');
var router = express.Router();
//This requires the controller that exports Skills CRUD functions.
const skillsCtrl = require('../controllers/skills')
// const index = require('../controllers/skills')


// All actual paths starts with /skills
router.get('/', skillsCtrl.index);

//GET /skills/:id
router.get('/:id', skillsCtrl.show);

//Create a route 
router.post('/', skillsCtrl.create);

//Create a delete route
router.delete('/:id', skillsCtrl.deleteFun);



module.exports = router;


// localhost:3000/skills/1