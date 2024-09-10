import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_cart, remove_cart, empty_cart } from '../redux/reduxCart/CartAction'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {

  const [product, setProduct] = useState([])

  console.log('homeProduct', product);

  useEffect(() => {
    const res = axios.get('http://localhost:3000/ecoproduct')
      .then((res) => {
        setProduct(res.data)
        console.log('homedata', res.data);
      })
  }, [])

  const productData = useSelector((state => state.cart))
  const dispatch = useDispatch()

  console.log('productData', productData);

  return (
    <div>
      <h1 className='heading'>This is Home Page</h1>
      <div className='flex flex-wrap justify-around'>
        {
          product.map((item) => {
            return (
              <div>
                <div className="w-[300px] rounded-md border">
                  <img
                    src={item.image}
                    alt="Laptop"
                    className="h-[200px] w-full rounded-md object-cover"
                  />
                  <div className="p-4">
                    <h1 className="text-lg font-semibold line-clamp-1">{item.title}</h1>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </p>
                    <button
                      onClick={() => dispatch(add_cart(item))}
                      type="button"
                      className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
