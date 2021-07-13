/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  'products/list'   : true,
  'users/register'  : 'users/isNotLoggedIn',
  'products/*'      : 'users/isLoggedIn',
  'products/rest/*' : 'users/isRestLoggedIn',
  'products/edit'   : 'users/isAdmin',
  'products/delete' : 'users/isAdmin',
  'users/login'     : 'users/isLoggedInShowLogout',
  // 'users/register'  : true, // how to change so the register form is only viewable to not loggedin users?

};
