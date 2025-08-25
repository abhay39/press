import React from 'react'


const GOOGLE_MAPS_KEY='AIzaSyB6rkjRYrmo9qwxlWPdYbUyczMjghLx86g';
const FindUs = () => {
  return (
    <div className='md:h-[100vh] flex flex-col items-center justify-center'>
        <h1 className='md:text-5xl text-3xl text-center font-semibold mb-2'>Find us on Map </h1>
        <iframe
            width="100%"
            height="95%"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB6rkjRYrmo9qwxlWPdYbUyczMjghLx86g&q=27.13733759746343,84.96035965334728"
            allowfullscreen
        ></iframe>
    </div>
  )
}

export default FindUs