
const logIn = (req, res, next) => {
    const username = req.body.username || '';
    const password = req.body.password || '';

}

const registerUser = (req, res, next) => {
    const user = req.body;

}

module.exports= {
    logIn,
    registerUser
};