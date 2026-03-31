async function giffy() {
    try {
        const resp = await fetch("./data.txt");
        console.log(resp)
        const result = await resp.text();
        const section = document.querySelector("section");
        section.innerHTML = `<p>${result}</p>`
    }catch(err){
        console.log(err)
    }finally{
        console.log("Bro")
    }
}
// giffy();


const getData = async () => {
    try{
        //Resp
        const response = await fetch("https://dummyjson.com/products");
        console.log(response);
        //Resp .json() other
        const result = await response.json();
        console.log(result)
        const finalProducts = await result.products;
        
        //Iteration :-
        finalProducts.forEach(products => {
            const section = document.querySelector("section");
            section.innerHTML += `<p>${products.title}</p>`
        })
    }catch(err){
        console.log(err)
    }finally{
        console.log("Done")
    }
}
getData();