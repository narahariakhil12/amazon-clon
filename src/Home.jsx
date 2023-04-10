import React from "react";
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <img
      className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/prime/PYABAU/in_prime_pya_1500x400_header_1.jpg"
        alt=""
      />
      <div className="home__row">
      <Product
      id="12"
      title="Electric Air Pump, Electric Pump with 3 Air Nozzles, Automatic and Quick Inflation and Draining, Inflatable Boats, Guest Beds, Inflatable Floating Animals or Camping - DC 12 V/AC 220 V"
      price={13.99}
      rating={3}
      image="https://m.media-amazon.com/images/I/61kyBJYJaLL._AC_SL1486_.jpg"
      />
       <Product
      id="14"
      title="Apple iPhone 14 Pro Max (256 GB) - Space Schwarz"
      price={1395}
      rating={4}
      image="https://m.media-amazon.com/images/I/610pghkO81L._AC_SL1500_.jpg"
      />
      </div>
      <div className="home__row">
      <Product
      id="15"
      title="DEERC DE45 RC Remote Controlled Car for Children, 1:14 RC Car Off Road 90 Minutes Long Running Time, Off-road Vehicle, 2.4 GHz Toy Car, Dual Motors, LED Headlight Indoors and Outdoors, for Boys And Girls"
      price={49.99}
      rating={2.5}
      image="https://m.media-amazon.com/images/I/71uxgF5O7dL._AC_SL1500_.jpg"
      />
       <Product
      id="16"
      title="Samsung, 100 Inch, 4K, Portable LED Projector The Freestyle (SP-LSP3BLAXXE), All Round Design, Auto Set-up, 360° Sound [2022], White"
      price={466}
      rating={3}
      image="https://m.media-amazon.com/images/I/61Zdrbd01UL._AC_SL1500_.jpg"
      />
       <Product
      id="17"
      title="Johnnie Walker Blue Label - Cities of the Future| Blended Scotch Whisky | Limitiertes Illustrations-Design Berlin 2220 | Preisgekrönte Rarität| handgefertigt in Schottland | 40% vol | 700ml Flasche |"
      price={198}
      rating={5}
      image="https://m.media-amazon.com/images/I/71EKg8op5kL._AC_SL1500_.jpg"
      />
      </div>
      <div className="home__row">
      <Product
      id="12"
      title="Tikom Robot Vacuum Cleaner with Mop Function 2 in 1, G8000 Pro Vacuum Cleaner Robot, 4500 Pa Strong Suction Power Robot Vacuum Cleaner, Self-Charging, WiFi, 150 Mins Max, Ideal for Pet Hair, Carpet, Hard Floors"
      price={219}
      rating={5}
      image="https://m.media-amazon.com/images/I/71axU6mxbkL._AC_SL1500_.jpg"
      />
      </div>
     
    </div>
  );
}

export default Home;
