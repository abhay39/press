// pages/about.js
import Head from 'next/head';

const About = () => {
  return (
    <div className="container mx-auto p-4 w-full ">
      <Head>
        <title>About Us - Your Printing Press</title>
      </Head>

      <header className="text-3xl font-bold mb-4">
        About Us
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Welcome to Our Printing Press</h2>
        <p className="text-gray-700">
          We are a dedicated printing press providing high-quality services for various printing needs. 
          From T-shirt printing to bills and cards, we have got you covered with our top-notch printing solutions.Adarsh Offset Press Printing and Copy Center is an established business offering printing and design to clients throughout the world. We have many combined years of experience in this sector. Trusted by clients from different corners of the globe, we pride ourselves on our customer service. . Whether you are based in our home town, or coming to this town for a trade show, Adarsh Offset Press has all your printing needs covered.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Visit Us</h2>
        <div className='md:h-[100vh] flex flex-col items-center justify-center'>
       
        <iframe
            width="100%"
            height="95%"
            
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB6rkjRYrmo9qwxlWPdYbUyczMjghLx86g&q=27.13733759746343,84.96035965334728"
            allowfullscreen
        ></iframe>
    </div>
      </section>
    </div>
  );
};

export default About;
