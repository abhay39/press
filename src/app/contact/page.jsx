// pages/contact.js
import Head from "next/head";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Contact Us - Adarsh Offset Press</title>
      </Head>

      <header className="text-3xl font-bold mb-4">Contact Us</header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Reach Out to Us</h2>
        <p className="text-gray-700">
          If you have any questions or inquiries, feel free to contact us at:
        </p>
        <p className="text-blue-600 font-bold">Phone: +9779842450255, 9811152866</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Visit Our Location</h2>
        <p className="text-gray-700">
          You can find us at the following address:
        </p>
        <p className="mb-2">Jeetpur, Bara, Nepal</p>
        <div className="md:h-[100vh] flex flex-col items-center justify-center">
          <iframe
            width="100%"
            height="95%"
            
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB6rkjRYrmo9qwxlWPdYbUyczMjghLx86g&q=27.13733759746343,84.96035965334728"
            allowfullscreen
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
