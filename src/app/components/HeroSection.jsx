import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://dexen.smartdemowp.com/wp-content/uploads/2019/10/slider-1-1.jpg" },
    { url: "https://dexen.smartdemowp.com/wp-content/uploads/2019/10/slider-1-2.jpg" },
  ];

const HeroSection = () => {
  return (
    <div className=" w-full  md:h-[100vh] flex sm:-ml-3 sm:h-[150px]">
      <SimpleImageSlider
        width="90%"
        height={600}

        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        autoPlay
      />
    </div>
  )
}

export default HeroSection