
const Skill = require('../models/skill');

module.exports  = {index : index,
show,
create}




function show(req,res){
    console.log(req.params.id, "<- req.params.id")
    res.render('skills/show.ejs', {identity: Skill.getOne(req.params.id)})
}

function index(req,res,next){
    res.render('skills/index.ejs',{ skills:  Skill.getAll()});
}

function create(req,res,next){
    console.log(req.body , "<--- When you create From create function in controllers");
    Skill.create(req.body);
    // Skill.create(req.body);
    res.redirect('/skills');
    // res.render('/skills', {skills: Skill.getOne(req.params.id)});

}


