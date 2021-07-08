module.exports = {
    inputs: {
        username: { type: 'string', required: true },
        password: { type: 'string', required: true },
        fullname: { type: 'string', required: true }
    },
    exits: {
        success: {
            viewTemplatePath: 'pages/users/successfullregistration'
        }
    },
    fn: async function(inputs) {
        await User.create({username: inputs.username, password: inputs.password, 
                           fullName: inputs.fullname, isSuperAdmin: false})
        return {}
    }
}