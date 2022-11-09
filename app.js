const express = require("express");
const app = express();
//vvvvvvvvvvvvv VK vvvvvvvvvvvvvv

app.get("/",function(req,res){
    res.send("")
})

app.get("/cadastrar",function(req,res){
    res.send("")
})

app.post("/cadastrar",function(req,res){
    res.send("")
})

app.get("/login",function(req,res){
    res.send("")
})

app.post("/login",function(req,res){
    res.send("")
})


//^^^^^^^^^^^^^^^^^ VK ^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvv CS GO vvvvvvvvvvvvvvvvv


app.get("/carrinho",function(req,res){
    res.send("")
})

app.get("/carrinho/checkout",function(req,res){
    res.send("")
})

app.get("/carrinho/entrega",function(req,res){
    res.send("")
})

app.get("/carrinho/pagamento",function(req,res){
    res.send("")
})

app.get("/favoritos",function(req,res){
    res.send("")
})

//^^^^^^^^^^^^^^^^^^^ CS GO ^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvv Rogerio vvvvvvvvvvvvvvvvvvvvv

app.get("/catalogo",function(req,res){
    res.send("")
})

app.get("/promocoes",function(req,res){
    res.send("")
})

app.get("/:product_type",function(req,res){
    res.send("")
})

app.get("/:product_name",function(req,res){
    res.send("")
})

app.get("/produtos/:product_id",function(req,res){
    res.send("")
})

//^^^^^^^^^^^^^^^^^^ Rogerio ^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvv Heldin vvvvvvvvvvvvvvvvvvvvv

app.get("/admin/produtos",function(req,res){
    res.send("")
})

app.get("/admin/produtos/criar",function(req,res){
    res.send("")
})

app.get("/admin/produtos/editar/:product_id",function(req,res){
    res.send("")
})

app.get("/admin/produtos/deletar/:product_id",function(req,res){
    res.send("")
})

app.get("/admin/catalogos",function(req,res){
    res.send("")
})

app.get("/admin/catalogos/criar",function(req,res){
    res.send("")
})

app.get("/admin/catalogos/editar/:product_id",function(req,res){
    res.send("")
})

app.get("/admin/catalogos/deletar/:product_id",function(req,res){
    res.send("")
})

//^^^^^^^^^^^^^^^^^^ Heldin ^^^^^^^^^^^^^^^^^^^^^^



app.listen(6969,function(erro){
    if(erro){
        console.log("Erro ao iniciar")
    }
    else{
        console.log("Servidor iniciado")
    }

})