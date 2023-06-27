const skills = [
    {skilliD: 'Skill 1', skillName: 'HTML' },
    {skilliD: 'Skill 2', skillName: 'CSS' },
    {skilliD: 'Skill 3', skillName: 'JavaScript' },
    {skilliD: 'Skill 4', skillName: 'Python' },
    {skilliD: 'Skill 1', skillName: 'React.js' },
    {skilliD: 'Skill 1', skillName: 'Express.js' },
    {skilliD: 'Skill 1', skillName: 'Node.js' }
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