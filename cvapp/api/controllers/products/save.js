module.exports = {
    inputs: {
        name: {type: 'string', required: true},
        description: {type: 'string', required: true},
        price: {type: 'number', required: true},
        dateOfRelease: {type: 'string', required: true},
    },

    // exits: {
    //     success: {
    //         viewTemplatePath: '/pages/products/list'
    //     }
    // },

    fn: async function(inputs) {
        await Product.create({name: inputs.name, description: inputs.description, price: inputs.price, dateOfRelease: inputs.dateOfRelease})
        this.res.redirect('/products')
    }
}