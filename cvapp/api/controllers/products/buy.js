module.exports = {
    // await User.addToCollection(10, 'pets', 300);
    inputs: {
        id: { type: 'number' }
    },

    exits: {
        success: {
            viewTemplatePath: 'pages/products/list'
        }
    },

    fn: async function(inputs) {
        let products_id = inputs.id
        let user = await User.findOne({username: this.req.session.username})
        await User.addToCollection(user.id, 'orders', products_id)
    }
}