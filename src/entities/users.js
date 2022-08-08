const db = require('../../models/index.js');

const getUsers = (req, res, next) => {
    db.user.findAll()
        .then((result) => {
            res.status(200).json(result).send();
        })
        .catch(() => {
            res.status(500).send();
        });
}

const getUser = (req, res, next) => {
    const username = req.params.username || '';

    db.user.findByPk(username)
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