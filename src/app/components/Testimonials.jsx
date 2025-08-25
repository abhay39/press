import Image from 'next/image'
import React from 'react'
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Autoplay]);

const testimonials = [
  {
    image: 'https://dexen.smartdemowp.com/wp-content/uploads/2019/10/testimonials-1-1.jpg',
    content: 'Super quick delivery, cards better than imagined. Couldn\'t be happier. Will definitely be ordering again!',
    author: 'Bineta Gupta',
  },
  {
    image: 'https://dexen.smartdemowp.com/wp-content/uploads/2019/10/testimonials-1-3.jpg',
    content: 'Always great service from these guys. You get exactly what you expect. Thanks again.',
    author: 'Baliram Das',
  },
  {
    image: 'https://dexen.smartdemowp.com/wp-content/uploads/2019/10/testimonials-1-2.jpg',
    content: 'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.',
    author: 'Amit Gupta',
  },
  
];


const Testimonials = () => {
  return (
    <section className='md:h-[100vh] sm:max-h-max w-full  mb-4 flex items-center flex-col justify-center'>
        <div className='flex w-full'>
      
        <Swiper
          spaceBetween={30}
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay ]}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2000 }}
        >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className='text-center bg-slate-900 md:h-[500px]  p-3 md:mr-3 rounded-lg text-white flex items-center justify-center w-full flex-col mb-3'>
            <img src={testimonial.image} alt='' height={200} width={200} className='rounded-full object-cover' />
            <span className='text-[14px] text-center mt-3 w-2/4 mb-3'>{testimonial.content}</span>
            <h1 className='text-2xl font-semibold'>{testimonial.author}</h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
          
        </div>

        {/* brand names */}
        <div className='bg-[#35C5AF] md:h-[250px] w-full flex items-center flex-col md:flex-row justify-center '>
            <img  src={"https://dexen.smartdemowp.com/wp-content/uploads/2019/10/brand-1-3.png"} alt='' height={80} width={100} className='h-[100px]  hover:opacity-100 opacity-50 duration-500 cursor-pointer w-[200px] object-contain '/>
            <img  src={"https://dexen.smartdemowp.com/wp-content/uploads/2019/10/brand-1-2.png"} alt='' height={200} width={100} className='h-[100px]  hover:opacity-100 opacity-50 -30 md:ml-8 duration-500 cursor-pointer w-[200px] object-contain'/>
            <img  src={"https://dexen.smartdemowp.com/wp-content/uploads/2019/10/brand-1-1.png"} alt='' height={200} width={100} className='h-[100px]  hover:opacity-100 opacity-50  md:ml-8 duration-500 cursor-pointer w-[200px] object-contain'/>
        </div>
    </section>
  )
}

export default Testimonials