import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-600'>
        <ul  className='flex bg-blue-200  justify-evenly align-text-top hover:bg-amber-50'>
          <li ><a href="home"></a>home</li>
          <li> <a href="about"></a>about</li>
          <li> <a href="contact"></a>contact</li>
        </ul>

      </nav>
  )
}

export default Navbar