const Order = require("../../models/Order")

module.exports = {
    // await User.addToCollection(10, 'pets', 300);
    inputs: {
        id: { type: 'number' }
    },

    // exits: {
    //     success: {
    //         viewTemplatePath: 'pages/products/list'
    //     }
    // },

    fn: async function(inputs) {
        let products_id = inputs.id
        let user = await User.findOne({username: this.req.session.username})
        let product = await Product.findOne({id: products_id})
        // let order = await User.addToCollection(user.id, 'product', product.id) // CAN'T do this because we can't put the price
        let sql = `INSERT INTO orders(createdat, updatedat, price, customer, product) VALUES($1, $2, $3, $4, $5)`
        let date =  Math.round(new Date().getTime() / 1000)
        let order = await sails.sendNativeQuery(sql, [date, date, product.price, user.id, product.id])
        // console.log(order)
        return this.res.redirect('/products')
    }
}