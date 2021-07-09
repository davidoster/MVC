module.exports = {
    tableName: 'orders',
    attributes: {
        customer:  { model: 'user' },
        product:   { model: 'product' },
        price:     { type: 'number', columnType: 'FLOAT' }
    }
}