const pool = require('./../config/db');
const Pool = require('./../config/db')

const selectData = (page) => {
    return Pool.query(`SELECT * FROM products ORDER BY id limit 5 offset '${(page)}'`);
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
        return pool.query(`SELECT id,name,stock,price,category_id,category_name FROM products WHERE name ILIKE '${name}%' ORDER BY id`)
      }

const sortData = sort => {
    return pool.query(`select * from products ORDER BY price DESC `)
}
module.exports = {selectData, insertData,deleteData,updateData, searchData, searchName, sortData}