module.exports = {
    inputs: {
        username: { type: 'string' },
        password: { type: 'string' }
    },

   

    fn: async function({username, password}) {
        if(username == 'admin' && password == 'admin') {
            console.log(this.req.session)
            this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
            this.req.session.username = username; // <----- This is the actual login!!!!! :0)
            // if (sails.hooks.sockets) {
            //     await sails.helpers.broadcastSessionChange(this.req);
            // }
        }
        console.log(this.req.session)
        this.res.redirect('/products')
        
    }


}