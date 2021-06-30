module.exports = {
    exits: {
        error: {},
        success: {
            viewTemplatePath: 'pages/products/list'
        }
    },

    fn: async function() {
        return { products: [{name: 'Product 1', description: 'Product 1 description', price: 1000, dateOfRelease: '2021/06/30'},
                            {name: 'Product 2', description: 'Product 2 description', price: 1000, dateOfRelease: '2021/07/01'}
                           ]}
    }
}