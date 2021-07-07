module.exports = {
    inputs: {
        username: { type: 'string' },
        password: { type: 'string' }
    },

   

    fn: async function({username, password}) {
        let theUser = await User.findOne({username})
        if(theUser.isSuperAdmin) {
        //if(username == 'admin' && password == 'admin') {
            console.log(this.req.session)
            this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
            this.req.session.username = username; // <----- This is the actual login!!!!! :0)
            this.req.session.isAdmin = true
            // if (sails.hooks.sockets) {
            //     await sails.helpers.broadcastSessionChange(this.req);
            // }
        }
        if(!theUser.isSuperAdmin) {
        //if(username == 'user' && password == 'user') {
            this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
            this.req.session.username = username;
            this.req.session.isAdmin = false
        }

        console.log(this.req.session)
        this.res.redirect('/products')
        
    }


}