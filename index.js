const express = require("express")
var bodyParser = require("body-parser")
const products = require('./src/routes/products')
const category = require('./src/routes/category')
const order = require('./src/routes/order')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use("/products", products)
app.use("/category", category)
app.use("/order", order)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  app.get('/', function(req, res){
  res.send('id: ' + req.query.id);
});

