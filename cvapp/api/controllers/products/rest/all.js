module.exports = {
    fn: async function() {
        const products = await Product.find().populate('customer')
        return products
    }
}