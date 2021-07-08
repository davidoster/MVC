module.exports = {
    exits: {
        error: {},
        success: {
            viewTemplatePath: 'pages/products/list'
        }
    },

    fn: async function() {
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