const express = require("express")
const mysql = require("mysql")
const app = express()

const con = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "123",
    database: "web_app"
})    

const sql = `INSERT INTO people (name) VALUES ('Tiago')`
con.query(sql)


app.get("/", function(req, res){
    con.query(sql)
    res.send("Usuário cadastrado !!!");
})

app.get("/list", function(req, res){
    con.query('select * from people', function(error, results){
        if ( error )  {
            console.log(error)  
        } else {
            res.send("<h1>FullCyle Rocks!!!</h1>\n"+ JSON.stringify(results));
        }
    });
})

app.listen(3000, () =>{
    console.log("Server Rodando na porta 3000")
})