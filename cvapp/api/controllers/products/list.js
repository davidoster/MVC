const Product = require("../../models/Product")

module.exports = {
    exits: {
        error: {},
        success: {
            viewTemplatePath: 'pages/products/list'
        }
    },

    fn: async function() {
        var listOfProducts = await Product.find()
        // return { products: [{name: 'Product 1', description: 'Product 1 description', price: 1000, dateOfRelease: '2021/06/30'},
        //                     {name: 'Product 2', description: 'Product 2 description', price: 1000, dateOfRelease: '2021/07/01'}
        //                    ]}
        return { products: listOfProducts }
    }
}