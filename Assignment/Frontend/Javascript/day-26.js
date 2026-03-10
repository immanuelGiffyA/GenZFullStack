function parent(name,callback){
callback(name);
}
function userGreet(jh) {
    console.log(`hello ${jh}`);
    
}
parent("giffy", userGreet);


setTimeout(()=>{
    console.log('hello');
    
},5000)

let id = setInterval(()=>{
    console.log('apply for each 1s');
    
},1000)

setTimeout(()=>{
    clearInterval(id)
},5000)

let count= 10
let countdown = setInterval(()=>{
    console.log(count)
    count--
    if(count<0)
    clearInterval(countdown)
},1000)

async function get(){
    try{

        
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await res.json()
console.log(data);

}catch(err){
    console.log(err);
}

}

get()

setTimeout(()=>{
    console.log("Be well");
    
},1000);

// promise
let p= new Promise((resolve,reject)=>{
    console.log('pending')
    let isloggedIn = false
    if(isloggedIn){
        resolve('welcome back')
    }else{
        reject('please login first')
    }
})
 p.then((data)=>{
    console.log(data);
})  .catch((err)=>{
    console.log(err);
})