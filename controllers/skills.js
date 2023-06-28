
const Skill = require('../models/skill');

module.exports  = {index : index,
show,
create,
deleteFun}




function show(req,res){
    console.log(req.params.id, "<- req.params.id")
    res.render('skills/show.ejs', {identity: Skill.getOne(req.params.id)})
}

function index(req,res){
    console.log(Skill.getAll(), '<---- LOOK HERE');
    res.render('skills/index.ejs',{ skills:  Skill.getAll()});
}

function create(req,res){
    console.log(req.body , "<--- When you create From create function in controllers");
    Skill.create(req.body);
    // Skill.create(req.body);
    res.redirect('/skills');
    // res.render('/skills', {skills: Skill.getOne(req.params.id)});

}

function deleteFun(req,res){
    console.log(req.params.id, "<--- Will be deleted");
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}


