
const Skill = require('../models/skill');

module.exports  = {index,
show}




function show(req,res){
    console.log(req.params.id, "<- req.params.id")
}

function index(req,res,next){
    res.render('skills/index.ejs',{ skills:  Skill.getAll()});
}


