const pool = require('./../config/db');
const Pool = require('./../config/db')

const selectData = () => {
    return Pool.query(`SELECT * FROM order_item`);
}

const insertData = (data) => {
    const {id_item,amount,price} = data;
    return Pool.query(`INSERT INTO order_item(id_item,amount,price) VALUES(${id_item},${amount},${price})`);
}

const updateData = (id,data) => {
    const {name,stock,price,category_id,category_name} = data;
    return Pool.query(`UPDATE products SET name='${name}',stock='${stock}',price='${price}', category_id='${category_id}', category_name='${category_name}' WHERE id='${id}'`);
}

const deleteData = id => {
    return Pool.query(`DELETE FROM products where id='${id}'`);
}

const searchData = id =>{
        return pool.query(`select * from products WHERE id ='${id}'`)
      }

const searchName = name =>{
        return pool.query(`select * from products WHERE name ='${name}'`)
      }
module.exports = {selectData, insertData,deleteData,updateData, searchData, searchName}