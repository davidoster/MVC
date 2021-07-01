module.exports = {
    inputs: {
        id: { type: 'number'},

    },
    exits: {
        success: {
            // viewTemplatePath: 'pages/products/list'
        },
    },
    fn: async function(inputs) {
        await Product.destroy(inputs.id)
        this.res.redirect('/products') // GET localhost:1337/products
        return {}
    },

}