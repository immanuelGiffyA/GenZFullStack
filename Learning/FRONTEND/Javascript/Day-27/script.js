let program = "start";


if (program === "start") {
    setTimeout(() => {
        console.log(program);
       setTimeout(()=>{
        console.log("ended");
        
       },2000)
    }, 1000);
}