import { pool } from "../config/config.js"

const getProducts = async() => {
    let [data] = await pool.query('SELECT * FROM products')
    return data
}
const deleteProduct = async(id)=>{
    await pool.query('DELETE FROM `shopleft`.`products` WHERE (`product_code` = ?)',[id])
    return await getProducts()
}
const insertProduct = async(product_code,product_name,product_price,product_quantity) =>{
    await pool.query('INSERT INTO `shopleft`.`products` (`product_code`, `product_name`, `product_price`, `product_quantity`) VALUES (?,?, ?,?)',[product_code,product_name,product_price,product_quantity])
    return await getProducts()
}
const updateProduct = async(product_name,product_price,product_quantity,product_code)=>{
    await pool.query('UPDATE `shopleft`.`products` SET `product_name` = ?, `product_price` = ?, `product_quantity` = ? WHERE (`product_code` = ?)',[product_name,product_price,product_quantity,product_code])
    return await getProducts()
}

export {getProducts,deleteProduct,insertProduct,updateProduct}