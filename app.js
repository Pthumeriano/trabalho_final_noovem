const express = require("express");
const { dirname } = require("path");
const app = express();
const path = require("path");
const fs = require("fs");

const { engine } = require('express-handlebars');

app.set('views', path.join(__dirname + "/pages"));
app.set('view engine', 'handlebars');
app.engine('handlebars', engine());

app.use(express.static(__dirname + '/pages'));
app.use(express.static(path.join(__dirname, 'pages', 'images')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

function readAndServe(path, res) {
    fs.readFile(path, function(err, data) {
        res.end(data);
    })
}

//vvvvvvvvvvvvv VK vvvvvvvvvvvvvv

app.get("/", function(req, res) {
    res.send("")
})

app.get("/cadastrar", function(req, res) {
    res.send("")
})

app.post("/cadastrar", function(req, res) {
    res.send("")
})

app.get("/login", function(req, res) {
    res.send("")
})

app.post("/login", function(req, res) {
    res.send("")
})


//^^^^^^^^^^^^^^^^^ VK ^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvv CS GO vvvvvvvvvvvvvvvvv


app.get("/carrinho", function(req, res) {
    res.send("")
})

app.get("/carrinho/checkout", function(req, res) {
    res.send("")
})

app.get("/carrinho/entrega", function(req, res) {
    res.send("")
})

app.get("/carrinho/pagamento", function(req, res) {
    res.send("")
})

app.get("/favoritos", function(req, res) {
    res.send("")
})

//^^^^^^^^^^^^^^^^^^^ CS GO ^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvv Rogerio vvvvvvvvvvvvvvvvvvvvv

app.get("/catalogo", function(req, res) {
    res.send("")
})

app.get("/promocoes", function(req, res) {
    res.send("")
})

app.get("/:product_type", function(req, res) {
    res.send("")
})

app.get("/:product_name", function(req, res) {
    res.send("")
})

app.get("/produtos/:product_id", function(req, res) {
    res.send("")
})

//^^^^^^^^^^^^^^^^^^ Rogerio ^^^^^^^^^^^^^^^^^^^^^^

//vvvvvvvvvvvvvvvvvv Heldin vvvvvvvvvvvvvvvvvvvvv

app.get("/admin/painel", function(req, res) {
    res.sendFile(path.join(__dirname, "pages", "admin.html"));
})

app.get("/admin/produtos", function(req, res) {
    res.sendFile(path.join(__dirname, "pages", "admin.html"));
})

app.get("/admin/produtos/criar", function(req, res) {
    res.send("")
})

app.get("/admin/produtos/editar/:product_id", function(req, res) {
    const produtos = require("./produtos.json");
    produtos.forEach((produto) => {
        if (req.params.product_id == produto.id) {
            res.render('admin_editar_produtos', { id: produto.id, nome: produto.nome, preco: produto.preco, tag: produto.tag, descricao: produto.descricao })
        }
    })
})

app.post('/admin/produtos/editar', function(req, res) {
    let produtos = require('./produtos.json');
    const { id, nome, descricao, tag, preco } = req.body;
    produtos.forEach((produto, indice) => {
        if (id == produto.id) {
            const novoProduto = {
                id: produto.id,
                nome,
                descricao,
                tag,
                preco
            }
            produtos[indice] = novoProduto;
            fs.writeFile('./produtos.json', JSON.stringify(produtos), function(error) {
                if (error) {
                    console.log('erro')
                } else {
                    console.log('sucesso')
                }
            })
        }
    })
    res.redirect('/admin/painel')
})

app.get("/admin/produtos/deletar/:product_id", function(req, res) {
    let produtos = require("./produtos.json");
    produtos = produtos.filter(produto => req.params.product_id != produto.id);
    fs.writeFile('./produtos.json', JSON.stringify(produtos), function(error) {
        if (error) {
            console.log('erro')
        } else {
            console.log('sucesso')
        }
    });
    //res.redirect('/admin/painel')
})

app.get("/admin/catalogos", function(req, res) {
    res.send("")
})

app.get("/admin/catalogos/criar", function(req, res) {
    res.send("")
})

app.get("/admin/catalogos/editar/:product_id", function(req, res) {
    res.send("")
})

app.get("/admin/catalogos/deletar/:product_id", function(req, res) {
    res.send("")
})

//^^^^^^^^^^^^^^^^^^ Heldin ^^^^^^^^^^^^^^^^^^^^^^



app.listen(6969, function(erro) {
    if (erro) {
        console.log("Erro ao iniciar")
    } else {
        console.log("Servidor iniciado")
    }

})