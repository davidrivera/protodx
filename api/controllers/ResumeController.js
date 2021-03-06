/**
 * ResumeController
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
    

  find:function(req, res, next){
    var _user = humanize(req.param('id')); 

    Resume.findOneByName(_user).done(function(err, r){
        r.skills = r.skills.split(','); 
        res.view({resume: r}); 
    }); 
  },  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ResumeController)
   */
  _config: {}

  
};
function propperCase(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
function humanize(str){
    var _str = str.split('-'); 

    var rval = ''; 
    for(var i = 0;  i < _str.length; i++){
        rval += propperCase(_str[i]) + ' '; 
    }

    return rval.substr(0, rval.length-1); 
}
