const isCreatePost = (body) => {
    return (
        'post_id' in body &&
        'username' in body &&
        'status_post' in body &&
        'content' in body &&
        'file' in body &&
        'totalReactions' in body &&
        'totalComments' in body &&
        'totalShares' in body
    )
}

module.exports = {
    isCreatePost
}