import React from 'react'
import Link from 'next/link'

const Product = (props) => {
  return (
    <div className='container mx-auto px-8'>
        <section className="text-gray-400  body-font">
  <div className="container px-5 md:py-24 mx-auto">
  <h1 className='sm:text-3xl text-4x1 font-medium title-font mb-2 text-gray-900'>Product List - My Shop</h1>
  <div className="h-2 w-20 mb-20 bg-indigo-500 rounded"></div>
    <div className="flex flex-wrap -m-4">
    {props.products.data.map((item)=>{
        return(
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="bg-gray-100 p-6 rounded-lg">
          <img className="m-auto mb-8 h-96 rounded" src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="ecommerce" />
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.attributes.Category}</h3>
          <h2 className="text-gray-800 title-font text-lg font-medium">{item.attributes.Title}</h2>
          <div className="content:hiddin bg-red-500 bg-blue-500 bg-green-500 bg-yellow-500 bg-black bg-white bg-"></div>
          <button className={"border-2 border-gray-800 ml-1  rounded-full w-4 h-4 focus:outline-none " +`bg-${item.attributes.Colour}-500`}></button>
          <p className="mt-1">₹{item.attributes.Price}</p>
          <Link href={`/product/${item.attributes.slug}`}><button className ="my-2 text-white bg-indigo-500 border-0 py-0 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
          </div>
        </div>
        )
    })}
    </div>
    </div>
</section>
  </div>
  )
}
export async function getServerSideProps(context){
    let headers={Authorization:"Bearer 11fefe58a16a6a05b20b4046e49931da82ee831f72d396d95865ec740f137abed74b7f903b62dbacec9709d8f016b27c0a89c5c4a7888cd29f78f8ebfa1429dae0f36b788b572c41ee1c00edcfc1e3a3a6a9b39857adfcaa3633f06edb751e95f41237f45a2678dbf9451765135ccf7e804ee6278c82caed5c78f662809368cd"}
    let a=await fetch("http://localhost:1337/api/products?populate=*",headers=headers);
    let products=await  a.json()
    console.log(products)
    return{
        props:{products:products},
    }
}

export default Product