module.exports = {


  // friendlyName: 'CVs Controller',


  // description: 'Cvs cv.',


  // inputs: {

  // },


  exits: {
    success: {
      // responseType: 'view',
      viewTemplatePath: 'pages/cv/view-basic'
    }
  },


  fn: async function () {

    // All done.
    return { 
      title: 'CVs Basic Format',
      h2_title: 'CV',
    }

  }


};
