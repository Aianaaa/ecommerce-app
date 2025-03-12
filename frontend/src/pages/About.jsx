import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Shyrdak is more than just an online store—it’s a fusion of tradition and modernity. The name Shyrdak comes from the Kyrgyz language and refers to a traditional felt carpet, known for its intricate patterns, durability, and deep cultural significance. Just like the Shyrdak embodies heritage and craftsmanship, our store represents a seamless blend of authenticity and innovation in the world of shopping.</p>
        <p>Our journey began with a vision: to create an ethno-modern marketplace where customers can easily explore and purchase unique, high-quality products. We strive to bring together traditional craftsmanship and contemporary trends, offering a carefully curated selection that includes fashion, beauty, electronics, and home essentials. Every product we feature is sourced from trusted brands and artisans, ensuring both quality and cultural authenticity.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At Shyrdak, we aim to connect people with products that tell a story—whether it’s through time-honored craftsmanship or cutting-edge innovation. We are dedicated to providing a seamless, convenient, and inspiring shopping experience, empowering our customers with choice and confidence. From browsing to delivery, we ensure that every step is effortless and enjoyable. Join us in celebrating culture, creativity, and modern living—all in one place.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text-1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
         <b>Convenience:</b>
         <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
         <b>Exceptional Customer Service:</b>
         <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
