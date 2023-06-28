const skills = [
    {skilliD: '1', skillName: 'HTML', skills: 'HTML5, WebGl'  },
    {skilliD: '2', skillName: 'CSS', skills: 'CSS Sprite, Svelte' },
    {skilliD: '3', skillName: 'JavaScript', skills: 'ES6' },
    {skilliD: '4', skillName: 'Python', skills: 'Turtle.py' },
    {skilliD: '5', skillName: 'Frontend', skills: 'React.js, Angular.js, Vue.js' },
    {skilliD: '6', skillName: 'Backend', skills: 'Express.js, Node.js, Java Spring' }
]


function getOne(id){
    return skills.find(skill => skill.skilliD === id);
}

function getAll(){
    return skills;
}

function create(identity){
    console.log('From the MODEL VIEW create() function I got here')
    identity.skilliD = Date.now() % 100;
    identity.skills = 'edit edit'
    console.log("Data about to get push onto skills object --->", identity);
    console.log("Specific data tht you want to display ---->", identity.skillName);
    skills.push(identity);

}

module.exports = {
    getOne,
    getAll,
    create
};

