const products = [
    { name: "Laptop", category: "Electronics", price: 1500 },
    { name: "Phone", category: "Electronics", price: 800 },
    { name: "Headphones", category: "Electronics", price: 200 },
    { name: "Table", category: "Furniture", price: 300 }
]
console.log(products[2].name)


// Update an object in an array  

products.forEach(products =>{
    if(products.name === "Phone"){
        products.price *= 1.10;
    }
    console.log(products.price)
});

// Get all products in the "Electronics" category that cost more than 1000.
const electronics = products.filter(product => product.category === "Electronics" && product.price > 1000);
console.log(electronics);
