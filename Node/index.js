const express = require("express");
const app = express()
const mysql = require('mysql');

const config = {
    host: 'mysql-db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const port =3000

app.get('/', (req, res) => {
    
    const connection = mysql.createConnection(config);
    connection.connect(function(err){
        if(err){
            res.send("Conexão com o Banco ainda não está ativa, tente novamente em alguns segundos.");
        }else{

            const sql = "INSERT INTO nodedb.people(name) values ('George')";
            connection.query(sql);
            console.log("Registro inserido.");
            
            connection.query("SELECT * FROM nodedb.people", function (err, result) {
            
                var nomes = '<ul>';
                result.forEach(data => {
                    nomes += "<li>"+data.id+"-"+data.name+"</li>";
                });

                nomes += "</ul>"
                connection.end();
                res.send("<h1>Full Cycle Rocks!</h1>"+nomes)
            
            })
        }
    })    
})

app.listen(port, () => {
    console.log("Aplicação Node subiu na porta "+port)
})