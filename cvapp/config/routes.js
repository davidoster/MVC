/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/'                             : { view:   'pages/homepage' },
  '/login'                        : { action: 'users/login'},
  'POST /login'                   : { action: 'users/checklogin' },
  'GET /register'                 : { action: 'users/register' },
  'POST /register'                : { action: 'users/savenewuser' },
  'GET /logout'                   : { action: 'users/logout' },

  // CVS
  '/cvs'                          : { action: 'cv/cvs-basic'}, //locals: { layout: 'layouts/layout'}}, 
  '/cvs/help'                     : { action: 'cv/cvs-help'},


  // Product
  'GET /products'                 : { action: 'products/list'},
  'GET /products/new'             : { action: 'products/new'}, 
  // 'GET /products/new'          : { view: 'pages/products/new' }
  'POST /products/new'            : { action: 'products/save'},
  'GET /products/delete/:id'      : { action: 'products/delete'},
  'GET /products/edit/:id'        : { action: 'products/edit'},
  'POST /products/update'         : { action: 'products/update'},
  'GET /products/buy/:id'         : { action: 'products/buy'},

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
