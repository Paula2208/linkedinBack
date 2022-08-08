const bcrypt = require('bcryptjs');
const db = require('../../models/index.js');

const encryptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

const comparePassword = (password, hashed) => {
    return bcrypt.compareSync(password, hashed);
}
    
const existUser = (id) => new Promise((resolve, reject) => {
    db.user.findByPk(id)
        .then((result) => {
            if(result){
                resolve(true)
            }
            else{
                resolve(false)
            }
        })
        .catch(console.error);
});

module.exports = {
    encryptPassword, 
    comparePassword,
    existUser
}