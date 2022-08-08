const db = require('../../models/index.js');

const getUsers = (req, res, next) => {
    db.users.findAll()
        .then((result) => {
            res.status(200).json(result).send();
        })
        .catch(() => {
            res.status(500).send();
        });
}

const getUser = (req, res, next) => {
    const username = req.params.username || '';

    db.users.findByPk(username)
        .then((result) => {
            if(result){
                res.status(200).json(result).send();
            }
            else{
                res.status(404).send();
            }
        })
        .catch(() => {
            res.status(500).send();
        });
}

module.exports= {
    getUsers,
    getUser
};