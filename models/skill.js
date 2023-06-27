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

module.exports = {
    getOne,
    getAll
};