import Image from 'next/image'
import React from 'react'

const dummy=[
    {
        "name":"3D Printing",
        "description":"Adarsh Offset Press is your source for everything including 3D printing and innovation.",
        "image":"https://dexen.smartdemowp.com/wp-content/uploads/2019/11/service-1-1.jpg",
    },
    {
        "name":"Digital Printing",
        "description":"We offer advanced digital printing solutions that produce a stunning quality print.",
        "image":"https://dexen.smartdemowp.com/wp-content/uploads/2019/10/service-1-2.jpg",
    },
    {
        "name":"Offset Printing",
        "description":"Adarsh Offset Press is the best choice for efficient offset printing for your books.",
        "image":"https://dexen.smartdemowp.com/wp-content/uploads/2019/10/service-1-3.jpg",
    },
]
const Features = () => {
  return (
    <section className='flex flex-col items-center justify-center md:h-[100vh]'>
        <span className='font-semibold'>Our Features</span>
        <h1 className='text-4xl font-bold'>What We Can Do</h1>

        <div className=' md:flex items-center justify-center gap-16 mt-2 w-full'>
            {
                dummy.map((item,index)=>{
                    return(
                        <div key={index} className='bg-slate-300 md:w-[300px] rounded-md mb-8 items-center justify-center flex flex-col'>
                            <img  src={item.image} alt='' height={200} width={100} className='h-[300px]  hover:opacity-30 duration-500 cursor-pointer w-[450px] object-cover'/>
                            <h2 className='text-center mt-3 font-bold text-2xl'>{item.name}</h2>
                            <h2 className=' text-center mb-4 w-3/4'>
                                {item.description}
                            </h2>
                        </div>
                    )
                })
            }
        </div>

        
    </section>
  )
}

export default Features