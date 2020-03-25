const express = require('express')

const routes = require('./routes')

const app = express()

app.use(express.json()) // Informa que o express deve converter o corpo da requisição para JSON

app.use(routes)

app.listen(3333)


//  Tipos de parâmetros

//  query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação) // request.query
//  Route Params: Parâmetros utilizado para identificar recursos // request.params
//  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos // request.body

//  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
//  NoSQL: MongoDB, CouchDB, etc

// Driver: SELECT * FROM users
// Query Builder: table('users').select('*').where()