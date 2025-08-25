import React, { useState } from 'react'

const Pricing = () => {

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
    <section className="md:h-[100vh] flex items-center flex-col justify-center">
      <span className="text-base text-red-500">Choose Your Plan</span>
      <h1 className="text-3xl font-bold text-slate-700">Plans & Pricing</h1>

      <div className=" md:flex  items-center justify-between flex-wrap w-full">
        <div className="bg-white flex flex-col items-center justify-center p-10 rounded-md md:w-2/6 w-full cursor-pointer shadow-slate-400 mb-2 mt-3">
            <span className="text-center text-gray-400">
            Standerd Plan
            </span>
            <h1 className="font-bold text-red-600 text-2xl">$29</h1>
            <div className='bg-gray-600 w-full flex items-center justify-center flex-col p-3 rounded-md text-white'>
                <span>Rounded & Colored</span> <br /><br />
                <span>Permium Paper</span> <br /><br />
                <span>Design Work</span> <br /><br />
                <span>Extra Thick</span> <br /><br />
                <button onClick={handleClick} className='bg-blue-800 p-3 rounded-lg'>Contact Us</button>
            </div>
        </div>
        <div className="bg-white flex flex-col items-center justify-center p-10 rounded-md md:w-2/6 w-full  cursor-pointer shadow-slate-400 mb-2 mt-3">
            <span className="text-center text-gray-400">
            Standerd Plan
            </span>
            <h1 className="font-bold text-red-600 text-2xl">$39</h1>
            <div className='bg-gray-600 w-full flex items-center justify-center flex-col p-3 rounded-md text-white'>
                <span>Rounded & Colored</span> <br /><br />
                <span>Permium Paper</span> <br /><br />
                <span>Design Work</span> <br /><br />
                <span>Extra Thick</span> <br /><br />
                <button onClick={handleClick} className='bg-blue-800 p-3 rounded-lg'>Contact Us</button>
            </div>
        </div>
        <div className="bg-white flex flex-col items-center justify-center p-10 rounded-md md:w-2/6 w-full  cursor-pointer shadow-slate-400 mb-2 mt-3">
            <span className="text-center text-gray-400">
            Standerd Plan
            </span>
            <h1 className="font-bold text-red-600 text-2xl">$49</h1>
            <div className='bg-gray-600 w-full flex items-center justify-center flex-col p-3 rounded-md text-white'>
                <span>Rounded & Colored</span> <br /><br />
                <span>Permium Paper</span> <br /><br />
                <span>Design Work</span> <br /><br />
                <span>Extra Thick</span> <br /><br />
                <button onClick={handleClick} className='bg-blue-800 p-3 rounded-lg'>Contact Us</button>
            </div>
        </div>
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

    </section>
  )
}

export default Pricing