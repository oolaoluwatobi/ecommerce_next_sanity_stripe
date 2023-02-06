import React, { useState } from 'react';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client } from '../../lib/client';
import Product from '../../components/Product';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, short_description, price } = product
  const [index, setIndex] = useState(0)
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const imageProps = useNextSanityImage(
    client,
    image && image[index] 
  ) 

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

    // console.log(product)

  return (
    <div className='w-full flex flex-col  items-center'>
      <div className='max-w-7xl '>
        <div className='flex w-full  m-10 mt-14 gap-10'>
          <div>
            <div className='cursor-pointer bg-neutral-200 rounded-2xl hover:bg-red-500' >
              <Image 
                {...imageProps}
                className='aspect-square rounded-2xl' 
                alt="product-image"
                width={350}
                height={350}
              />
            </div>

            <div className='flex gap-2 mt-5'>
              {image?.map((item, i) => (
                <Image
                  {...useNextSanityImage(client, image[i])}
                  key={i}
                  className={i === index ? 'rounded-lg w-16 h-16 cursor-pointer bg-red-500' : 'rounded-lg w-16 h-16 cursor-pointer bg-neutral-200'}  
                  onMouseEnter={() => setIndex(i)}
                  alt="gadget-image" 
                />
              ))}
            </div>
          </div>

          <div className=''>
            <h1 className='font-bold text-2xl text-indigo-700'>{name}</h1>
            <div className=' mt-2 flex  items-center'>
              <div className='flex text-red-500'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p className='ml-2'>(20)</p>
            </div>

            <h4 className='mt-2  font-bold'>Details:</h4>
            <p className='mt-1 '>{short_description}</p>
            <p className='text-red-500 font-bold text-2xl my-5'>${price}</p>

            <div className='flex gap-5 mt-2 items-center'>
              <h3 className='flex gap-5 items-center font-bold text-xl'>Quantity:</h3>
              <p className='border rounded-lg font-bold border-gray-800 p-0.5 flex cursor-pointer items-center '>
                <span className=' border-gray-800 px-2 flex items-center text-rose-400 ' onClick={decQty} ><AiOutlineMinus /></span>
                <span className=' border-gray-800 text-gray-600 text-xl px-5'>{qty}</span>
                <span className=' border-gray-800 px-2 flex items-center text-cyan-500' onClick={incQty}><AiOutlinePlus /></span>
              </p>
            </div>

            <div className='flex gap-7 mt-10'>
              <button
                className='px-5 py-2 border border-red-500 rounded-xl bg-white text-red-500 text-lg font-extrabold w-52 hover:scale-110 duration-500'
                onClick={() => onAdd(product, qty)}
                type='button'
              >Add to Cart</button>
              <button 
                className='px-5 py-2 border bg-red-500 rounded-xl text-white text-lg font-extrabold w-52 hover:scale-110 duration-500'
                onClick={handleBuyNow}
                type='button'
              > Buy Now</button>
            </div>
          </div>
        </div>

        <div className='mt-32'>
          <h2 className='text-center m-12 text-3xl font-medium text-indigo-700'>Similar Items You Might Like</h2>
          <div className='relative  overflow-hidden'>
            <div className='flex justify-center items-center gap-4 mt-5 flex-wrap w-full '>
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product }
  }

}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export default ProductDetails