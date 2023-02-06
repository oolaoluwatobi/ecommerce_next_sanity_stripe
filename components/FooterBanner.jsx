import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../lib/client';

const FooterBanner = ({ footerBanner: 
  { 
    discount, 
    largeText1, 
    largeText2, 
    saleTime, 
    productName,
    slug, 
    midText,
    desc, 
    product, 
    buttonText, 
    image 
  } }) => {

  const imageProps = useNextSanityImage(
      client,
      image[1]
    )

    console.log(product);

  return (
    <div>
      <div className='px-16 lg:px-24  py-10 bg-red-500 rounded-2xl relative h-96 leading-4 text-white w-full mt-28'>
        <div className='banner-desc flex justify-between'>
          <div className='left '>
            <p className='my-4 '>{discount}</p>
            <h3 className='font-extrabold text-7xl'>{largeText1}</h3>
            <h3 className='font-extrabold text-7xl' >{largeText2}</h3>
            <p className='mt-6'>{saleTime}</p>
          </div>

          <div className='right leading-6 text-right'>
            <p className='text-lg'>{productName}</p>
            <h3 className='text-6xl mt-5 font-extrabold'>{midText}</h3>
            <p className='text-lg mt-4'>{desc}</p>
            <Link href={`/product/${slug.current}`}>
              <button className='bg-white text-red-500 border-none rounded-xl mt-5 text-lg font-extrabold cursor-pointer px-5 py-3  w-[150px] hover:scale-110 duration-500'>{buttonText}</button>
            </Link>

            <Image 
              {...imageProps}
              className='absolute right-1/4 -top-1/4' 
              alt="special-offer-image" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner