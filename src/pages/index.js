'use clint'
import { FaFilter, FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "@/styles/home.module.css";

export default function Home() {
  const scrollRef = useRef()
  const [IsRental, setIsRental] = useState(true)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    if (scrollRef)
      scrollRef.current.onscrollend = (event) => {
        console.log("Element scrollEnd event fired!");
      };
  }, [])

  return (
    <div className="w-full">
      <div className={`w-full ${styles.filterAndSearch}`}>
        <div className="flex gap-2.5 p-2.5">
          <label className="w-full relative" htmlFor="search">
            <FaSearch className="absolute top-2 left-2 text-lg text-gray-400" />
            <input id="search" placeholder="search" className="w-full px-8" />
          </label>
          <button style={{ height: '33px', width: '36px', border: '1px solid #B09AFF', borderRadius: '6px', fontSize: '1.25rem', color: '#5A73FA' }}>
            <FaFilter />
          </button>
        </div>
        <div className={`flex px-5 font-semibold items-end`}>
          <button onClick={() => setIsRental(true)} style={{ height: '37px', width: '130px', backgroundColor: IsRental ? '#fff' : 'transparent', borderRadius: '10px 10px 0 0', position: 'relative' }}>
            Rental
            {IsRental && <div style={{ position: 'absolute', bottom: '-1px', width: '80%', height: '1px', backgroundColor: '#3956F6' }} />}
          </button>
          <button onClick={() => setIsRental(false)} style={{ height: '37px', width: '130px', backgroundColor: !IsRental ? '#fff' : 'transparent', borderRadius: '10px 10px 0 0', position: 'relative' }}>
            Buy
            {!IsRental && <div style={{ position: 'absolute', bottom: '-1px', width: '80%', height: '1px', backgroundColor: '#3956F6' }} />}
          </button>
        </div>
      </div>
      <div ref={scrollRef} className={`px-3 pb-8 overflow-y-auto flex gap-2.5 mt-2.5 flex-wrap justify-items-start items-start justify-start ${styles.cardsScrollContainer}`}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => <div className={`p-1 rounded-lg self-start max-w-xl ${styles.cardsMain}`} key={index.toString()}>
          <div className={`flex rounded-lg overflow-hidden p-2 bg-white gap-1 ${styles.cards}`}>
            <div className={`relative h-full ${styles.slider}`}>
              <Slider {...settings}>
                {[1, 2, 3].map((imageItem, imageIndex) => <div key={imageIndex} className={`h-full w-36 pr-1 ${styles.sliderImage}`}>
                  <img
                    alt="Property"
                    src={'https://img.freepik.com/free-photo/full-shot-ninja-wearing-equipment_23-2150961062.jpg?t=st=1719575281~exp=1719578881~hmac=076d2f454568b13c7bd2ad8b0720e82cb1062fe9721d72995ed806695d5b5ba8&w=360'}
                    className={`object-cover rounded-lg ${styles.sliderImage}`}
                  />
                </div>)}
              </Slider>
              <p className={`absolute bottom-0 w-full pb-2 ${styles.postedDate}`} style={{ fontSize: '10px', lineHeight: '11px' }}>Posted On: <br />25/06/2024</p>
            </div>
            <div className={`flex-1 text-sm`}>
              <h1 className={`p-0 m-0 text-base font-bold`}>2BHK Fully furnished Flat Ready Possession</h1>
              <div className="flex gap-2 my-1">
                <div className={`flex gap-1 justify-center items-center rounded-full ${styles.border} `}>
                  <HiBuildingOffice2 color="#2700B7" />
                  <span className="font-semibold">2BHK</span>
                </div>
                <div className={` flex gap-1 justify-center items-center rounded-full ${styles.border}`}>
                  <span style={{ color: '#2700B7', fontWeight: 700 }}>₹</span>
                  <span className="font-semibold">
                    45,00,000</span>
                </div>
              </div>
              <p>
                <span style={{ color: '#2700B7', fontWeight: 500 }}>Total Buildup Area: </span>
                800sqft
              </p>
              <p><span style={{ color: '#2700B7', fontWeight: 500 }}>Total Carpet Area: </span>
                600sqft
              </p>
              <div className={`flex gap-1 items-center ${styles.address}`}>
                <FaLocationDot color="#2700B7" className="text-base" />
                <p>
                  405, Vishwa Sankul, Kharadi, Pincode 411057
                </p>
              </div>
              <button className={`${styles.contactButton}`} >
                <IoLogoWhatsapp color="#25D366" className={`${styles.whatsAppLogo}`} />
                More Details
              </button>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}
