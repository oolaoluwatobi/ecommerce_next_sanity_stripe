import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
const imageProps = useNextSanityImage(
    client,
    image[0]
  )

  // console.log(image)

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='hover:scale-110 duration-500'>
          <div className='cursor-pointer bg-neutral-200 rounded-2xl'>
            <Image 
              {...imageProps}
              width={250}
              height={250}
              className='' 
              alt="product-image"  
            /> 
          </div>
          <p className='font-medium mt-1'>{name}</p>       
          <p className='font-bold mt-0.5'>₦{price}</p>       
        </div>
      </Link>
    </div>
  )
}

export default Product