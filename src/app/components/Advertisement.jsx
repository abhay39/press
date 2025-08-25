import React, { useState } from 'react'

const Advertisement = () => {

    const [isClicked,setIsClicked]=useState(false);

    const [info,setInfo]=useState({
        
    })

    const handleClick=()=>{
        setIsClicked(true);
    }

    const closeDialog = () => {
        setIsClicked(false);
    };

    const handlechnage=(event)=>{
        event.preventDefault();
        setInfo({
          ...info,
            [event.target.name]:event.target.value
        })
        
    }

    const printData=()=>{
        console.log(info)
        setIsClicked(false)
    }
      

  return (
    <div className='md:h-[100vh] md:flex items-center justify-center'>
        <div className='bg-[#1d3557] h-[400px] w-full rounded-3xl  flex flex-col md:flex-row items-center text-center justify-center md:justify-between md:px-20'>
            <h1 className='text-3xl text-white font-bold'>Place Your Order Now</h1>
            <button onClick={handleClick} className='bg-white p-3 rounded-xl hover:shadow-red-500 duration-300 transition-all'>Contact Us</button>
        </div>

        <dialog  className={`${isClicked?"flex":"hidden"} fixed z-50 top-4 p-4 rounded-lg w-full opacity-100  items-center max-h-full md:h-[100vh] justify-center bg-gray-100`}>
            
            <div className=' bg-[#778da9] w-[100%]  text-white rounded-lg p-8'>
                <div className='flex items-end justify-end  rounded-full' >
                    <span onClick={closeDialog} className='relative  cursor-pointer text-red-600 text-2xl select-none'>X</span>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Name:</label>
                    <input onChange={handlechnage} name='name' type="text" placeholder='Enter your name' className='p-2 rounded-md text-xl sm:text-base text-black' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Contact Number:</label>
                    <input onChange={handlechnage} name='number' type="number" placeholder='Enter your conact number' className='p-2 sm:text-base rounded-md text-xl text-black' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Message:</label>
                    <textarea name='message' onChange={handlechnage} cols={50} rows={6} type="number" placeholder='Enter your message' className='p-2 sm:text-base rounded-md text-xl text-black' />
                </div>
                <button onClick={printData} className='w-full bg-green-600 p-2 rounded-md mt-2 text-xl'>Submit</button>
            </div>
        </dialog>
        
    </div>
  )
}

export default Advertisement