import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import item1 from '../assets/fireboltbsw.jpg'
import item2 from '../assets/Fireboltt.jfif'
import item3 from '../assets/Samsungwatch.webp'
import item4 from '../assets/xiomimobile.jpg'
import item5 from '../assets/iphonegreen.webp'
import item6 from '../assets/oppomobile.webp'
import item7 from '../assets/onepulsmobile.jpg'
import item8 from '../assets/vutele.webp'
import item9 from '../assets/sonytv.jpg'
import item10 from '../assets/bajajmixer.jpg'
import { useState , useEffect } from 'react'

const List_Rendering = () => {

  const[productData , setProductData] = useState([])

  console.log('productData' , productData);

  const Product = [
    {
      id: 1,
      name: 'firebolt',
      price: 1000,
      dis: '10%',
      color: 'black',
      catagories: 'watch',
      img:  item1 
    },
    {
      id: 2,
      name: 'firebolt-fire',
      price: 10000,
      dis: '50%',
      color: 'black',
      catagories: 'watch',
      img:  item2 
    },
    {
      id: 3,
      name: 'samsung',
      price: 20000,
      dis: '10%',
      color: 'magicgray',
      catagories: 'watch',
      img:  item3 
    },
    {
      id: 4,
      name: 'xiomi',
      price: 10000,
      dis: '10%',
      color: 'white',
      catagories: 'mobile',
      img:  item4 
    },
    {
      id: 5,
      name: 'iphone15',
      price: 100000,
      dis: '10%',
      color: 'magicgreen',
      catagories: 'mobile',
      img: item5 
    },
    {
      id: 6,
      name: 'oppo',
      price: 30000,
      dis: '10%',
      color: 'red',
      catagories: 'mobile',
      img:  item6 
    },
    {
      id: 7,
      name: 'oneplus',
      price: 50000,
      dis: '10%',
      color: 'slategray',
      catagories: 'mobile',
      img:  item7 
    },
    {
      id: 8,
      name: 'vu',
      price: 10000,
      dis: '10%',
      color: 'black',
      catagories: 'television',
      img:  item8 
    },
    {
      id: 9,
      name: 'sony',
      price: 50000,
      dis: '10%',
      color: 'gold',
      catagories: 'television',
      img: item9 
    },
    {
      id: 10,
      name: 'bajaj',
      price: 10000,
      dis: '10%',
      color: 'black',
      catagories: 'mixer',
      img: item10 
    }

  ]

  const ProductFilter  = Product.filter((item) => item.catagories === 'mobile')

  console.log(ProductFilter);

  useEffect(() =>{
    setProductData(Product)
  } , [])


  return (
    <div>
      <h1 className='text-center bg-purple-600 p-2'>This is List-Rendering in React</h1>
      {/* <button onClick={}>watch</button> */}

      {/* <button onClick={data}>Click For Data</button> */}
    <div className='flex flex-wrap justify-stretch space-y-5 space-x-5 '>

      {
        productData.map((product) => {
          return (
              <div className="w-[300px] rounded-md border mt-5" key={product.id}>
                <img
                  src={product.img}
                  alt="Laptop"
                  className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                  <h1 className="inline-flex items-center text-lg font-semibold">
                    {product.name} &nbsp; <ArrowUpRight className="h-4 w-4" />
                  </h1>
                  <p className="mt-3 text-sm text-gray-600">
                    Rs.{product.price}
                  </p>
                  <div className="mt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #Macbook
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #Apple
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #Laptop
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Read
                  </button>
                </div>
              </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default List_Rendering