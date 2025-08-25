import Image from 'next/image'
import React from 'react'

const dummyImage=[
    {
        "name":"T-Shitt Printing",
        "image": "https://dexen.smartdemowp.com/wp-content/uploads/2019/10/tee-1-1.png"
    },
    {
        "name":"Flyer Printing",
        "image": "https://dexen.smartdemowp.com/wp-content/uploads/2019/10/phone-1-1.png"
    },
    {
        "name":"Sticker Printing",
        "image": "https://dexen.smartdemowp.com/wp-content/uploads/2019/10/sticker-1-1.png"
    },
    {
        "name":"Poster Printing",
        "image": "https://dexen.smartdemowp.com/wp-content/uploads/2019/10/poster-1-1.png",
    },
    {
        "name":"PostCards Printing",
        "image": "https://dexen.smartdemowp.com/wp-content/uploads/2019/10/postcard-1-1.png"
    },
    
    
    
]

const Services = () => {
  return (
    <section className='md:h-[100vh] flex flex-col items-center justify-center'>
        <div className='md:flex gap-12'>
            <div className=' md:w-2/4 items-center justify-center '>
                <span className='text-red-400 text-2xl'>Our Services</span>
                <h1 className='text-[50px] text[#003049] font-bold'>
                Adarsh Offset Press Printing and Copy Centre Best in Your Town
                </h1>
            </div>
            <div className='md:w-2/4'>
                <span className='text-[20px] text-center'>
                    Adarsh Offset Press Printing and Copy Center is an established business offering printing and design to clients throughout the world. We have many combined years of experience in this sector. Trusted by clients from different corners of the globe, we pride ourselves on our customer service. . Whether you are based in our home town, or coming to this town for a trade show, Adarsh Offset Press has all your printing needs covered.
                </span>
            </div>
        </div>
        <div className='flex mt-8 flex-wrap'>
            {
                dummyImage.map((image, index) => {
                    return (
                        <div key={index} className='bg-white flex flex-col items-center dura justify-center h-auto md:ml-8 md:w-[200px] w-[100%] p-4 cursor-pointer transition-all duration-500 ease-in hover:-translate-y-2 mb-4 shadow-md'>
                            <img src={image.image} alt='' height={50} width={100}/> 
                            <h3 className='text-center font-semibold mt-2'>{image.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Services