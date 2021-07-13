module.exports = async function(req, res, proceed) {
    // console.log(req.session.username)
    // if(req.session.username) {
        console.log(req.headers, req.body)
        return proceed()
    // }
    return res.forbidden() // if under api/repsonses/forbidden.js exists runs that js file

    // otherwise we can set the status code and res.view
    res.status(403)
    return res.view('403')
}