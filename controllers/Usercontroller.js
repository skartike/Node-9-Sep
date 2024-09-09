const users = require('../user.json');





function getUser(req,res){
    try{
        res.json(users)
    } catch(err){

    }
}




function getParticularUser(req,res){
    try{
        let id = parseInt(req.params.id)
        let user = users.find((user) => user.id === id)
        res.json(user);
    } catch(err){
        console.log(err)
    }
}


module.exports = {
    getUser,
    getParticularUser
}