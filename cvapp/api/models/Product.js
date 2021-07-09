module.exports = {
    tableName: 'products',
    attributes: {
        name: { type: 'string', required: true },
        description: { type: 'string', required: true } ,
        price: { type: 'number', columnType: 'FLOAT',  required: true },
        dateOfRelease: { type: 'string', required: true, columnName: 'releasedate' },
        customer: { // model User
            collection: 'user',
            via: 'product',
            through: 'order'
        },
    }
}