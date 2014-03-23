/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {


  /**
   * Action blueprints:
   *    `/auth/login`
   */
   login: function (req, res) {
       // login dummy
       if (req.body && req.body.username == "demo" && req.body.password == "demo"){
           req.session.authenticated = true;
           console.log('Log in detected. User: ' + req.body.username);
           res.redirect('/app');
       }else{
           res.redirect('/login');
       }
  },


  /**
   * Action blueprints:
   *    `/auth/logout`
   */
   logout: function (req, res) {
       //destroy session
       req.session.destroy();
       res.redirect('/');
  },


  /**
   * Action blueprints:
   *    `/auth/isLoggedIn`
   */
   isLoggedIn: function (req, res) {
    // Send a JSON response
       var ans = (req.session.authenticated)? true : false;
       return res.json(ans);
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to AuthController)
   */
  _config: {}


};
