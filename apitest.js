const express = require('express');
const app = express();
const {menu} = require('./menu');

// const axios = require('axios');

// const options = {
//  method: 'http://localhost:5000/products/:productID',
//  url: menu,
//  params: {
//   id: 1,
//  }
// };

// async function main() {
//   try {
//    const response = await axios.request(options);
//    console.log(response.data);
//   } catch (err) {
//    console.log(err);
//   }
// }
// main()


// ------------------------------------------------------------------------------------------------------
app.get('/api/products', (req, res) => {
 const newProducts = menu.map((product) => {
  const {id, category} = product
  return {id, category}
 })
 res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
 console.log(req.params)
 const {productID} = req.params
 const singleProduct = menu.find(
 (product)=> product.id === Number(productID)
)
if(!singleProduct) {
 return res.status(404).send('Product does not exist')
}
return res.json(singleProduct)
});

app.get('/api/v1/query', (req, res) => {
 const {search, limit} = req.query
 let sortedProducts = [...menu];
 if(search){
  sortedProducts = sortedProducts.filter((product) => {
   return product.category.startsWith(search);
  })
 }
 if(limit){
  sortedProducts = sortedProducts.slice(0, Number(limit));
 }
 if(sortedProducts.length < 1) {
  return res.status(200).json({success:true, data: []})
 }
 res.status(200).json(sortedProducts);
})

app.get('/api/dec', (req, res) => {
 let ascSort = menu.sort((a, b) => (a.price > b.price) ? 1 : -1)
 res.status(200).json(ascSort)
})

app.get('/api/asc', (req, res) => {
 let decSort = menu.sort((a, b) => (a.price < b.price) ? 1 : -1)
 res.status(200).json(decSort)
})

app.listen(5000, () => {
 console.log("server is listening on port 5000....")
});