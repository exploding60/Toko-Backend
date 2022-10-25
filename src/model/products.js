const Pool = require('./../config/db')

// const selectData = (sortby, sort, page, limit) => {
const selectData = (page) => {
    return Pool.query(`SELECT * FROM products ORDER BY id limit 5 offset ${(page - 1) * 5}`);
    // return Pool.query(`SELECT * FROM products ORDER BY '${sortby}' '${sort}' limit ${limit} offset ${(page - 1) * limit}`);
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
        return Pool.query(`select * from products WHERE id ='${id}'`)
      }

const searchName = name =>{
        return Pool.query(`SELECT id,name,stock,price,category_id,category_name FROM products WHERE name ILIKE '${name}%' ORDER BY id`)
      }

// const sortData = sort => {
//     return Pool.query(`select * from products ORDER BY price DESC `)
// }

const sort = (sortby, sort, page, limit) => {
    return Pool.query(`SELECT * FROM products ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${(page - 1) * limit} `);
}

module.exports = {selectData, insertData,deleteData ,updateData, searchData, searchName, sort}