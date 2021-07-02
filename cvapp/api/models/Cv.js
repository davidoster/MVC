module.exports = {
    tableName: 'cvs',
    attributes: {
        name: {type: 'string', required: true},
        jobdescription: {type: 'string', required: true},
        address: {type: 'string', required: true} ,
        email: {type: 'string', required: true},
        mobile: {type: 'string', required: true},
        image: {type: 'string', required: true}
    }
}