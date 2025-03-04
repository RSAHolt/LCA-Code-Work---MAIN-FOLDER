let div = document.getElementById('div')

const getData = async()=>{
    let {products} = await (await fetch('http://localhost:3000/products',{
        method:'POST',
        body: JSON.stringify({name:'Matthew'}),
        headers:{
            "Content-Type":"application/json"
        }
    })).json()
    console.log(products);
    products.forEach(prod => {
        div.innerHTML+=
        `
        <tr>
            <td>${prod.
                product_code}</td>
            <td>${prod.product_name}</td>
            <td>${prod.
                product_price
                }</td>
            <td>${prod.
                product_quantity
                }</td>
        </tr>
        `
    });
}

getData()