const pool = require('./../config/db');
const Pool = require('./../config/db')

const selectData = () => {
    return Pool.query(`SELECT * FROM products`);
}

const insertData = (data) => {
    const {name,stock,price,category_id,category_name} = data;
    return Pool.query(`INSERT INTO products(name,stock,price,category_id,category_name) VALUES('${name}',${stock},${price},${category_id},'${category_name}')`);
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

const sortData = sort => {
    return pool.query(`select * from products ORDER BY price DESC `)
}
module.exports = {selectData, insertData,deleteData,updateData, searchData, searchName, sortData}