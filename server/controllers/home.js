'use strict'

module.exports = function (app) {
    const HomeController = {
        /**Login se refere a view */
        login: (req, res) => {
            let crypto = app.config.cryptografia
            crypto.criptografar('aldo').
                then((data) => {
                    res.status(200).json({ a: data })
                })
        },
        logar: (req, res) => {
            let User = app.server.models.user

            User.findOne({ email: req.body.email }, function (err, user) {
                if (err) res.status(500).json({ error: err })
                if (user) {
                    User.decrypt(user.password, req.body.password)
                        .then((data) => {
                            if (data === true) {
                                let jwt = app.server.config.token
                                jwt.sign(req.body)
                                    .then((_data) => {
                                        if (_data) {
                                            res.status(200).json(data)
                                        }
                                    })
                                    .catch((err) => {
                                        res.status(500).json(err)
                                    })
                            }
                            else {
                                res.status(404).json(false)
                            }
                        })
                }
            })
        },
        /**Cadastra um novo usuario caso nao exista o email, retorna o token pra poder navegar */
        cadastrar: (req, res) => {
            let User = app.server.models.user
            User.findOne({ email: req.body.email })
                .exec()
                .then((data) => {
                    if (data) {//email ja existe
                        return res.status(401).json({ msg: 'Email já existente' })
                    }
                    let user = new User()
                    user.email = req.body.email
                    User.encrypt(req.body.password)
                        .then((enc) => {
                            user.password = enc
                            user.save()
                                .then(data => {
                                    let jwt = app.server.config.token
                                    jwt.sign(req.body)
                                        .then((_data) => {
                                            return res.status(201).json({ msg: 'Recurso criado', data: _data })
                                        })
                                        .catch((err) => {
                                            return res.status(404).json({ error: err })
                                        })
                                })
                                .catch((err) => {
                                    return res.status(404).json({ error: err })
                                })
                        })
                        .catch((err) => {
                            return res.status(404).json({ error: err })
                        })
                })
                .catch((err) => {
                    console.log(err)
                    res.status(404).json({ error: err })
                })


        },
        verifyToken: (req, res) => {
            let token = app.server.config.token
            let _token = req.headers["authorization"].split(" ")[1]
            token.checkToken(_token)
                .then((data) => {
                    if (data) {
                        res.status(200).json('ok')
                    }
                    else {
                        res.status(400).json('Token Invalido')
                    }
                })
                .catch((err)=>{
                    res.status(400).json(err)
                })
        }
    }

    return HomeController;
}