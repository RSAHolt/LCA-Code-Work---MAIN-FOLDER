import{getProducts,deleteProduct,insertProduct,updateProduct} from '../model/productsDb.js'

const getProductsCon = async(req,res)=>{
    res.json({products:await getProducts()})
}
const postProductsCon = async(req,res)=>{
    let {product_code,product_name,product_price,product_quantity} = req.body
    res.json({products:await insertProduct(product_code,product_name,product_price,product_quantity)})
}
const deleteProductsCon = async(req,res)=>{
    res.json({products:deleteProduct(req.params.id)})
}
const editProductsCon = async(req,res)=>{
    let {product_name,product_price,product_quantity,product_code} = req.body
    res.json({products:await updateProduct(product_name,product_price,product_quantity,product_code)})
}

export {getProductsCon, postProductsCon, deleteProductsCon,editProductsCon}