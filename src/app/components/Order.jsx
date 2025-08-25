import Image from 'next/image'
import React from 'react'

const Order = () => {
  return (
    <section className='md:h-[100vh]'>
        <div className='md:flex items-center gap-20'>
            <img src="https://dexen.smartdemowp.com/wp-content/uploads/2019/10/video-1-1.jpg" alt='' className='w-[500px] duration-300 transition-all cursor-pointer hover:-translate-y-3 h-[500px]' height={400} width={400}/>
            <div className=' '>
                <h1 className='text-5xl font-bold text-slate-600 mb-3'>Download our Printing Design Guidelines</h1>
                <span className='w-2/4 text-xl mt-2'>If you’re new to the task of designing for print, it can certainly be a confusing process. To avoid design mistakes and overcome other associated problems, please check out our handy Printing design Guidelines.</span>
                <br />
                <br />
                <br />
                <span>
                    <b>Bleed:</b> 2.91” x 1.26”
                </span>
                <br />
                <br />
                <span>
                    <b>Trim:</b> 2.75” x 1.10”
                </span>
                <br />
                <br />
                <span>
                    <b>Safe:</b> 2.6” x 0.94”
                </span>
            </div>
        </div>
    </section>
  )
}

export default Order