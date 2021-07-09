module.exports = {
    inputs: {
        username: { type: 'string' },
        password: { type: 'string' }
    },

    exits: {
        badCombo: {
            description: `The provided email and password combination does not
            match any user in the database.`,
            responseType: 'unauthorized'
            // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
            // To customize the generic "unauthorized" response across this entire app, change that file
            // (see api/responses/unauthorized).
            //
            // To customize the response for _only this_ action, replace `responseType` with
            // something else.  For example, you might set `statusCode: 498` and change the
            // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
          }
    },

    fn: async function({username, password}) {
        
        let theUser = await User.findOne({username})
        // REMEMBER - npm install sails-hook-organics --save
        await sails.helpers.passwords.checkPassword(password, theUser.password).intercept('incorrect', 'badCombo')
        if(theUser.isSuperAdmin) {
        //if(username == 'admin' && password == 'admin') {
            console.log(this.req.session)
            this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
            this.req.session.username = username; // <----- This is the actual login!!!!! :0)
            this.req.session.userId = theUser.id
            this.req.session.isAdmin = true
            // if (sails.hooks.sockets) {
            //     await sails.helpers.broadcastSessionChange(this.req);
            // }
        }
        if(!theUser.isSuperAdmin) {
        //if(username == 'user' && password == 'user') {
            this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge
            this.req.session.username = username;
            this.req.session.userId = user.id
            this.req.session.isAdmin = false
        }

        console.log(this.req.session)
        this.res.redirect('/products')
        
    }


}