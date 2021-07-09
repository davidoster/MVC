module.exports = {
    exits: {
        error: {},
        success: {
            viewTemplatePath: 'pages/products/list'
        }
    },

    fn: async function() {
        // return { products: await Product.find(), isLoggedIn: this.req.session.username, isAdmin: this.req.session.isAdmin }
        if(this.req.session.username) {
            if(this.req.session.isAdmin) {
                return { products: await Product.find(), isLoggedIn: true, isAdmin: true }
            } else {
                return { products: await Product.find(), isLoggedIn: true, isAdmin: false }
            }
        } else {
            return { products: await Product.find(), isLoggedIn: false, isAdmin: false }
        }
    }
}