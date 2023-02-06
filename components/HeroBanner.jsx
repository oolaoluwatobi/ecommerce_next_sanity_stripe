import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  const imageProps = useNextSanityImage(
    client,
    heroBanner.image
  )

  console.log(heroBanner.slug.current)

  return (
    <div className='bg-neutral-200 rounded-2xl relative h-[500px] px-16 lg:px-24 py-10 w-full leading-3'>
      <div >
        {/* <p className='text-xl text-indigo-600'>{heroBanner.productName}</p> */}
        <h3 className='text-8xl font-bold text-indigo-800 mt-5 uppercase'>{heroBanner.largeText1}</h3>
            <h3 className='font-extrabold text-7xl text-indigo-800' >{heroBanner.largeText2}</h3>
        <h3 className='text-4xl font-bold mt-10 text-indigo-600 '>{heroBanner.midText2}</h3>
        <Image
          {...useNextSanityImage(client, heroBanner.image[0])}
          // style={{ width: '100%', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
			    // sizes="(max-width: 800px) 100vw, 800px" 
          alt="headphones" 
          className='absolute top-0 right-[10%] w-[450px] h-[450px]' 
        />
      </div>

      <Link href={`/product/${heroBanner.productName2}`}>
        <button className='bg-indigo-800 text-white px-2 py-3 rounded-2xl border-none mt-10 text-lg font-medium cursor-pointer z-50  w-[150px] hover:scale-110 duration-500'
        >{heroBanner.buttonText}
        </button>
      </Link>

      <div className='absolute right-[10%] bottom-[5%] w-[300px leading-5 flex flex-col text-right'>
        <h5 className='text-indigo-800 font-bold ' >Description</h5>
        <p className='mb-3 text-base font-bold'>{heroBanner.desc}</p>
      </div>
    </div>
  )
}

export default HeroBanner