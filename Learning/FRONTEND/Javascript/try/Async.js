async function fetchData(){
    try{
    const dataAPI = await fetch ("./Data.json") 
    const data = await dataAPI.json()
    console.log(data)
     const userNames = data.map(user => user.name);
        console.log(userNames);
} catch (error){
    console.log(error)
}
}fetchData()

