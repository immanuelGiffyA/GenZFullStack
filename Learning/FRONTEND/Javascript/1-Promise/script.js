const data = new Promise((res, rej) => {
    const allUsers = [{id:1, name:"Varun"}]
    if(true){
        res(allUsers)
    }else{
        rej("Err");
    }
});
console.log(data);

data.then(res => console.log(res[0])).catch(err => console.log(err)).finally(console.log("HAii"));