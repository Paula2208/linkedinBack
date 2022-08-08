const {encryptPassword, comparePassword, existUser} = require('../helpers/authHelpers');
const {isRegisterUser} = require('../guards/auth');
const db = require('../../models/index.js');

const logIn = (req, res, next) => {
    const username = req.body.username || '';
    const password = req.body.password || '';

    db.users.findByPk(username)
        .then((result) => {
            if(result){
                if(comparePassword(password, result.password)){
                    res.status(200).json({
                        login: true
                    }).send();
                }
                else{
                    res.status(400).json({
                        login: false
                    }).send();
                }
            }
            else{
                res.status(404).json({
                    login: false
                }).send();
            }
        })
        .catch(res.status(500).send());
}

const registerUser = async(req, res, next) => {
    const user = req.body;
    const p = encryptPassword(user.password);

    user.password = p;

    if(!isRegisterUser(user)){
        res.status(400).json({
            error: 'Guard failed'
        }).send();
        return;
    }

    const noAvailable = await existUser(user.username);

    if(!noAvailable){
        db.users.create(user)
            .then(u => {
                res.status(201).send();
            })
            .catch(() => {
                res.status(500).send();
            });
    }
    else{
        res.status(400).json({
            error: "username is already used"
        }).send();
    }

}

module.exports= {
    logIn,
    registerUser
};