module.exports = {
    exits: {
        success: {
            viewTemplatePath: 'pages/homepage'
        }
    },
    fn: async function() {
        if(this.req.session.username) {
            delete this.req.session.username
            delete this.req.session.isAdmin
        }
        return {}
    }
}