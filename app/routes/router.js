var express = require("express");
var router = express.Router();
const {body, validationResult } = require("express-validator");

router.get("/", function (req, res){
    res.render("pages/index", {retorno: null, erros: null, })}
);

router.get("/cadastro", function(req, res){
    res.render("pages/cadastro", {retorno: null, erros: null})}
);

router.get("/login", function(req, res){
    res.render("pages/login", {retorno: null, erros: null})}
);

router.get("/produto", function(req, res){
    res.render("pages/produto", {retorno: null, erros: null})}
);

router.post("/cadastro", function(req, res){
    res.render("pages/cadastro")
});

router.post("/login", function(req, res){
    res.render("pages/login")
});

router.post("/produto", function(req, res){
    res.json("pages/produto")
});

router.post(
    "/cadastro",
    body("arealogin")
    .isInt({min: 3, max: 40})
    .withMessage("O nome deve ter no minimo 3 caracteres")
    .isEmail({min: 5, max: 50})
    .withMessage("O email deve ser válido")
    .isInt({min: 4, max: 15})
    .withMessage("A senha deve ser válida")
    .isInt({min: 4, max: 15})
    .withMessage("A senha deve ser a mesma que a anterior"),

    function (req, res){
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            console.log(errors);
            return res.render("pages/cadastro", {retorno: null, erro: errors, valores: req.body});
        }
        let senha = req.body.Senha
        let confirmar = req.body.Confirmar
        if(senha == confirmar){
            res.render("pages/index", {retorno: null, erros: null, })
        }else{
            "As duas senhas tem que ser iguais >:("
        }
    }
)

router.post(
    "/login",
    body("area-login")
    .isInt({min:5, max:50})
    .withMessage("O email deve ser válido")
    .isInt({min: 4, max: 15})
    .withMessage("A senha deve ser válida"),

    function(req, res){
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            console.log(errors);
            return res.render("pages/login", {retorno: null, erro: errors, valores: req.body})
        }
    }
)

module.exports = router