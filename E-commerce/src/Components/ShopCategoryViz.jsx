import React, { useRef } from "react";
import './ShopCategoryViz.css'
import { IoWomanSharp } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { IoIosMan } from "react-icons/io";
import { FaChild } from "react-icons/fa6";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

useRef
function ShopCategoryViz() {

    gsap.registerPlugin(ScrollTrigger);

    const cardsRef = useRef([]);


    useGSAP(() => {

        gsap.from("#smallScreen", {
          y: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#smallScreen",
                start: "top 80%",
                scroller: "body",
                end: "top 30%",
                scrub: 3,
            },
        })

        gsap.from(cardsRef.current, {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            scrollTrigger: {
                trigger: cardsRef.current[0],
                start: "top 80%",
                scroller: "body",
                end: "top 50%",
                scrub: 3,
            },
        });
    })

    const data =[
        {
            text:"All",
            path:"",
            icon:<GiClothes/>,
        },
        {
            text:"Men",
            path:"men",
            icon:<IoIosMan/>,
        },
        {
            text:"Women",
            path:"women",
            icon:<IoWomanSharp/>,
        },
        {
            text:"Kids",
            path:"kid",
            icon:<FaChild/>,
        },
    ]

  return (
    <div className="py-20 w-full  mb-20 flex flex-col items-center justify-center ">

      <h1 id="smallScreen" className="uppercase text-[#171717] mb-4 text-5xl font-bold  max-sm:text-[32px] max-lg:text-[30px] ">
      Shop by <span className="text-cyan-600">Category</span>
      </h1>

      <hr className="w-[200px] h-[6px] mb-15 rounded bg-[#252525] max-lg:w-[140px] max-md:w-[110px] max-md:h-[4px] " />

      <div className=" w-[50%]  bg flex justify-center gap-20">
 
            {
                data.map((item, i)=>{   
                        return <div  ref={(el) => (cardsRef.current[i] = el)}>
                                <Link to={`/${item.path}`}>
                                    <div id="innerDiv" className="h-[100px] cursor-pointer">
                                <div id="innerDivIcon" className="  size-18 border-2 px-[9px] py-2 border-cyan-500 rounded-full ">
                                    <span id="icon" className="text-[48px]   h-12 w-12 text-cyan-500">{item.icon}</span>
                                </div>
                                <h3 id="innerBtn" className="text-center bg-gray-300 rounded-[6px] py-1.5 px-3 mt-5 font-semibold    "> {item.text} </h3>
                            </div>
                        </Link>
                        </div>
                       
                })
            }

      </div>
    </div>
  );
}

export default ShopCategoryViz;

// import React, { useState } from "react";
// import {
//   GiFruitBowl,
//   GiCarrot,
//   GiMilkCarton,
//   GiChickenOven,
// } from "react-icons/gi";

// function ShopCategoryViz() {
//   const productsData = [
//     {
//       id: 1,
//       category: "Fruits",
//       name: "Strawberries",
//       img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
//     },
//     {
//       id: 2,
//       category: "Fruits",
//       name: "Kiwi",
//       img: "https://images.pexels.com/photos/266421/pexels-photo-266421.jpeg",
//     },
//     {
//       id: 3,
//       category: "Fruits",
//       name: "Banana",
//       img: "https://images.pexels.com/photos/208450/pexels-photo-208450.jpeg",
//     },
//     {
//       id: 4,
//       category: "Fruits",
//       name: "Pineapple",
//       img: "https://images.pexels.com/photos/979247/pexels-photo-979247.jpeg",
//     },
//   ];

//   const [activeCat, setActiveCat] = useState("All");

//   const filteredProducts =
//     activeCat === "All"
//       ? productsData
//       : productsData.filter((item) => item.category === activeCat);

//   const categories = [
//     { name: "All" },
//     { name: "Fruits", icon: <GiFruitBowl /> },
//     { name: "Vegetables", icon: <GiCarrot /> },
//     { name: "Dairy", icon: <GiMilkCarton /> },
//     { name: "Meat & Seafood", icon: <GiChickenOven /> },
//   ];

//   return (
//     <section className="px-6 py-12  text-gray-800">
//       {/* Title */}
//       <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
//         Our Products
//       </h2>

//       {/* Category Filter */}
//       <div className="flex justify-center gap-4 mb-8">
//         {categories.map((cat) => (
//           <button
//             key={cat.name}
//             onClick={() => setActiveCat(cat.name)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
//               activeCat === cat.name
//                 ? "bg-orange-500 text-white shadow-lg"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             <span className="text-xl">{cat.icon}</span>
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="bg-gray-100 rounded-xl p-4 flex flex-col items-center"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-lg mb-4"
//             />
//             <h3 className="font-semibold text-lg text-gray-900">
//               {product.name}
//             </h3>
//             <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
//               Add +
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ShopCategoryViz;
