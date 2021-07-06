module.exports = {
    inputs: {
        username: { type: 'string' },
        password: { type: 'string' }
    },

   

    fn: async function({username, password}) {
        if(username == 'admin' && password == 'admin') {
            this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
            this.req.session.userId = username; // <----- This is the actual login!!!!! :0)
            if (sails.hooks.sockets) {
                await sails.helpers.broadcastSessionChange(this.req);
            }
        }
        this.res.redirect('/products')
        
    }


}