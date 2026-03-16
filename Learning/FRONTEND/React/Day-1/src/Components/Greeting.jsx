import React from 'react'

const Greeting = ({userName,age}) => {
    console.log(userName,age );
    
  return (
    <>
        <section> 
            <p>haii name</p>
            <p>{age}</p>
            {/* <p>{students}</p>
            <p>{res.msg}</p> */}
        </section>
    </>
  )
}

export default Greeting