module.exports = async function(req, res, proceed) {
    console.log(req.session.username)
    if(req.session.username) {
        console.log(req.session)
        return proceed()
    }
    return res.forbidden()
}