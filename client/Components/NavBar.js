import React from 'react'
import Link from 'next/link'

const NavBar = ({cart}) => {
  return (
    <div>
    <header className="text-gray-400 bg-white body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href="/" legacyBehavior><a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img className="w-9" src="/logo.svg"/>
        <span className="ml-3 text-xl text-gray-800">MyShop</span>
      </a></Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/" legacyBehavior><a className="mr-5 hover:text-purple-400">Home</a></Link>
        <Link href="/about" legacyBehavior><a className="mr-5 hover:text-purple-400">About</a></Link>
        <Link href="/product" legacyBehavior><a className="mr-5 hover:text-purple-400">Product</a></Link>
        <Link href="/contact" legacyBehavior><a className="mr-5 hover:text-purple-400">Contact Us</a></Link>
        <Link href="/checkout" legacyBehavior><a className="mr-5 hover:text-purple-400">Cart({cart.length})</a></Link>
      </nav>
      <button className ="my-2 text-white bg-indigo-500 border-0 py-0 md:py-2 px-3 md:px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
    </div>
  </header></div>
  )
}

export default NavBar