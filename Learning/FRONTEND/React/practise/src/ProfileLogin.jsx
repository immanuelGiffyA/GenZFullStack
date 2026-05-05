import React from 'react'

const ProfileLogin = () => {
    let user ={
        name : "Giffy",
        email : "immanuelgiffy643@gamil.com",
        passward : "giffy12345"
    img :  "c:\Users\acer\Pictures\VS\peakpx (2).jpg",
    }
  return (
    <div className=''>
        <img src="{user.img}" alt="image" width={50} height={50} />
        <p><b>Name:</b>{user.name}</p>
        <p><b>email:</b>{user.email}</p>

    </div>
  )
}

export default ProfileLogin