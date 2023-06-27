var express = require('express');
var router = express.Router();
//This requires the controller that exports Skills CRUD functions.
const skillsCtrl = require('../controllers/skills')
// const index = require('../controllers/skills')


// All actual paths starts with /skills
router.get('/', skillsCtrl.index);

//GET /skills/:id
router.get('/:id', skillsCtrl.show);





module.exports = router;