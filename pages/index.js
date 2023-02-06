import React from 'react'
import { client } from '../lib/client'
import { Product, HeroBanner, FooterBanner, Navbar } from '../components'

const Home = ({ products, bannerData }) => {
  return (
    <div className='w-full h-full flex items-center justify-center '>
      <div className='max-w-7xl '>
        <div className='  w-full font-sans '>
          <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
          {console.log(bannerData)}
          <div className='flex flex-col justify-center items-center my-16 text-indigo-800'>
            <h2 className='text-5xl font-extrabold text-indigo-700'>Best Selling Products</h2>
            {/* <p className='font-extralight text-lg mt-2'>Speakers of many variations </p> */}
          </div>

          <div className='flex flex-wrap justify-center gap-5 mt-5 w-full  px-4' >
            {products?.map((product) => <Product key={product._id} product={product} /> )}
          </div>

          <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
        </div>
      </div>

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type =="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home