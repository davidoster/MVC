module.exports = {
    inputs: {
        id: { type: 'number'},

    },
    exits: {
        // error: {
        //     viewTemplatePath:  'pages/products/notfound'
        // },
        // success: {
        //     viewTemplatePath: 'pages/products/notfound'
        // },
    },
    fn: async function(inputs,exits) {
        if(await Product.findOne(inputs.id)) {
            await Product.destroy(inputs.id)
            this.res.redirect('/products') // GET localhost:1337/products
        } else {
            console.log('Not deleted')
            this.res.status(404)
            result = `Product has not been found with id: ${inputs.id}`
            return this.res.view('pages/products/notfound', {result})
        }
    },

}