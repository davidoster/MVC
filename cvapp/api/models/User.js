module.exports = {
    tableName: 'users',
    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
  
      username: {
        type: 'string',
        required: true,
        unique: true,
        isEmail: true,
        maxLength: 200,
        example: 'mary.sue@example.com'
      },

      password: {
        type: 'string',
        required: true,
        description: 'Securely hashed representation of the user\'s login password.',
        protect: true,
        example: '2$28a8eabna301089103-13948134nad'
      },
  
      fullName: {
        type: 'string',
        required: true,
        description: 'Full representation of the user\'s name.',
        maxLength: 120,
        example: 'Mary Sue van der McHenst'
      },
  
      isSuperAdmin: {
        type: 'boolean',
        description: 'Whether this user is a "super admin" with extra permissions, etc.',
        extendedDescription:``
      },

      product: { // model Product 
        collection: 'product',
        via: 'customer',
        through: 'order'
      },


    }
}

