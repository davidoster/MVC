module.exports = {
    exits: {
        error: {},
        success: {
            viewTemplatePath: 'pages/products/list'
        }
    },

    fn: async function() {
        // await Product.create({name: 'Product 1', description: 'Product 1 description', price: 1000, dateOfRelease: '2021/06/30'})
        // var listOfProducts = await Product.find()
        // return { products: [{name: 'Product 1', description: 'Product 1 description', price: 1000, dateOfRelease: '2021/06/30'},
        //                     {name: 'Product 2', description: 'Product 2 description', price: 1000, dateOfRelease: '2021/07/01'}
        //                    ]}
        console.log(this.req)
        if(!this.req.session.isAdmin) {
            return { products: await Product.find(), isAdmin: false }
        } else {
            return { products: await Product.find(), isAdmin: this.req.session.isAdmin }
        }
            
    }
}