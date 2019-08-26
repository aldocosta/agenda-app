module.exports = function(app){
    const HomeController = {
        login: (req, res) =>{
            let crypto = app.config.cryptografia
            crypto.criptografar('aldo').
            then((data)=>{
                res.status(200).json({a:data})
            })            
        },
        logar: (req,res)=>{
            let crypto = app.config.cryptografia
            crypto.verificarCripto('$2b$10$S4VeHk//B97bODDdf9.nPuyQw1O9pOC1aPcjwQrQRyKfwelu/E7W2','aldo')
            .then((data)=>{
                res.status(200).json({a:data})
            })
        }
    }

    return HomeController;
}