var express = require("express")
var mysql = require("mysql")
const app = express()

var con = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "123",
    database: "web_app"
})
    
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

con.connect()    

app.get("/", function(req, res){
    con.query('select * from customers', function(error, results){
        if ( error ){
            res.status(400).send('Error in database operation');
        } else {
            res.send("<h1>FullCyle Rocks =d</h1>\n"+ JSON.stringify(results));
        }
    });
})

app.post("/add", (req, res)=>{
    console.log(req.body)
    const insertQuery = "INSERT INTO customers SET ?";
      con.query(insertQuery, req.body,(error, results) =>{
        if ( error ) {
            console.log(error)
        }else{
            res.send("Usuário cadastrado");
        }
        
    });
})
app.listen(3000, () =>{
    console.log("Server Rodando na porta 3000")
})