import React from 'react'
import BlockAndInline from './Components/BlockAndInline'
import { Sematic } from './Components/Sematic'
import { Formatting } from './Components/Formatting'
import Greeting from './Components/Greeting'

const userName ={name:"Giffy"}
const age = 21
let arr =["manju","sudalai","giffy"]
const msg={msg:"This is an Object"}
function App() {
  return (
    <>
      <BlockAndInline />
      <Sematic />
      <Formatting />
      {/* <Greeting userName={userName} age={age}/> */}
    </>
  )
}

export default App