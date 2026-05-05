import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [name, setName] = useState ('Giffy')
    const [msg,setMsg] = useState ('hello')

//    case1
    useEffect(() =>{
console.log("sideeffect work every render ");
})

// case 2
useEffect(()=>{
    console.log("sideeffect work initial render");
},[]);

// case 3
useEffect(()=>{
    console.log("sideeffect work initial render and state change");
},[name,msg]);
 
return (
        <>
<h1>{name }</h1>
{msg}

<button onClick={()=>setName("manju")}>Name Change</button>
<button onClick={()=>setMsg("Welcome")}>Msg Change</button>
        </>
)}


export default Profile;