require('dotenv').config()
const express = require("express")
var bodyParser = require("body-parser")
const products = require('./src/routes/products')
const category = require('./src/routes/category')
const order = require('./src/routes/order')
const jwt = require('jsonwebtoken')
const app = express()
const port = 3000
const xss = require('xss-clean')
app.use(xss())
app.use(bodyParser.json())
app.use("/products", products)
app.use("/category", category)
app.use("/order", order)
// app.post('/login',(req,res) =>{
//   // Auth user
//   const username = req.body.username
//   const user = {name: username}
//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//   res.json({accessToken: accessToken})
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  app.get('/', function(req, res){
  res.send('id: ' + req.query.id);
});

// function authenticateToken(req,res, next){
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
//   if (token === null) return res.sendStatus(401)

//   jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user) =>{
//     if (err) return res.sendStatus(403)
//     req.user = user
//     next()
//   })
// }
