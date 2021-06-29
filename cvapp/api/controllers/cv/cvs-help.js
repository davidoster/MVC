module.exports = {
    friendlyName: 'Help on how to use CVS',
    description: 'Some description',

    inputs: {

    },

    exits: {
        success: {
            viewTemplatePath: 'pages/cv/view-help'
        }
    },

    fn:  async function (inputs) {

        // All done.
        return {};
    
      }
}