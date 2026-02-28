if (20 <=21) {
    console.log(true);
}else{
    console.log(false);
}

let colour = "red" 

let result = colour === "red" ? console.log("stop") : colour === "yellow" ? console.log("awake") : colour === "green" ? console.log("goo"): "default"

   timeOfThings(22)                                                                 

let age = 60;

if (age<=12){
    console.log("ticket price $5");
}else if(age>=12 && age<=17){
    console.log("ticket price $10");
}else if(age>=18 && age<=59){
    console.log("ticket price $20");
}else{console.log("$15")}



function timeOfThings (hours){
    if (hours >=0 && hours <=12){
        console.log("GM");
        
    }
    else if(hours >=13 && hours<=18){
        console.log("GA");
        
    }else console.log("GE");
}
  
console.log(window);


function discountOfCalculator (dollor ){
  if (dollor>=100){
    console.log("20% discount");
 }
    else if (dollor >=50 && dollor<=99){
    console.log("10% discount");
 }
 else if (dollor <50)
    console.log("no discount");
    
}

discountOfCalculator(100)
discountOfCalculator(150)
discountOfCalculator(120)
discountOfCalculator(43)
discountOfCalculator(10)