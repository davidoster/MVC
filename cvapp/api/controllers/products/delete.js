module.exports = {
    inputs: {
        id: { type: 'number'},

    },
    exits: {
        error: {
            viewTemplatePath:  'pages/products/notfound'
        },
        // success: {
        //     viewTemplatePath: 'pages/products/notfound'
        // },
    },
    fn: async function(inputs) {
        if(await Product.findOne(inputs.id)) {
            await Product.destroy(inputs.id)
            this.res.redirect('/products') // GET localhost:1337/products
            // return { id: '' }
        } else {
            console.log('Not deleted')
            // return {id: inputs.id}
            throw 404
            // throw 404 && return {id: inputs.id}
            // throw return {error: 404, id: inputs.id}
            // return throw {error: 404, id: inputs.id}
            
        }
    },

}