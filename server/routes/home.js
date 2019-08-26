'use strict'

module.exports = function(app){
    const HomeController = app.server.controllers.home;
 
    app.get('/login', HomeController.login)
    app.get('/logar', HomeController.logar)
}