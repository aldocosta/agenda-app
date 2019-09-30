'use strict'

module.exports = function(app){
    const HomeController = app.server.controllers.home;
 
    app.get('/login', HomeController.login)
    app.post('/logar', HomeController.logar)
    app.post('/cadastrar', HomeController.cadastrar)
    app.get('/checktoken', HomeController.verifyToken)
    app.get('/some', HomeController.dosome)
}