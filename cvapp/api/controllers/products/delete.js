module.exports = {
    inputs: {
        id: { type: 'number'},

    },
    fn: async function(inputs) {
        if(await Product.findOne(inputs.id)) {
            await Product.destroy(inputs.id)
            this.res.redirect('/products') // GET localhost:1337/products
        } else { // the user id was not found!!!! BUT this is NOOOOOOOTTTTTT AN ERROR
            // 1. send some backend var to ejs to display
            var result = `Product with id: ${inputs.id} was not found :((((` 
            // 2. send error code, e.g. 404
            this.res.status(404)
            // 3. use the notfound.ejs
            return this.res.view('pages/products/notfound', {result})
        }
    },
}