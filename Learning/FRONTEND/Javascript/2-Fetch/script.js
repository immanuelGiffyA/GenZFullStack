const text = fetch("https://dummyjson.com/products");
console.log(text)

text.then(resp => resp.json()).then(a => {
    const section = document.querySelector("section");
    a.products.forEach(product => {
        section.innerHTML += `<p>${product.title}</p>`;
    })
}).catch(err => console.log(err)).finally(console.log("Byeee"))

