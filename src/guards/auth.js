const isRegisterUser = (body) => {
    return (
        'username' in body &&
        'password' in body &&
        'name' in body &&
        'bio' in body &&
        'connections' in body &&
        'pending' in body
    )
}

module.exports = {
    isRegisterUser,
};