module.exports = {
    tableName: 'newproducts',
    attributes: {
        name: { type: 'string', required: true },
        description: { type: 'string', required: true } ,
        price: { type: 'number', columnType: 'FLOAT',  required: true },
        dateOfRelease: { type: 'string', required: true }
    }
}