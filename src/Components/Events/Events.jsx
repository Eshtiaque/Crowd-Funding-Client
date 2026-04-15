import { useEffect, useState } from "react";
import img from "../../assets/img/section-banner/larm-rmah-AEaTUnvneik-unsplash.webp"


import SharedBanner from "../Contact/SharedBanner";
// import bg from "../../assets/Video/wallpaperflarecom_wallpaper.jpg"
import Card from "./Card";
import { useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import MainTitle from "../SharedComponents/MainTitle";



const Events = () => {
    const [searchText, setSearchText] = useState("");
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://crowdfunding-gamma.vercel.app/event")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
    }, [])


    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    //bg-gradient-to-r from-neutral-600 from-10% via- via-50% to-neutral-600 to-90%

    const handleSearch = () => {
        fetch(`https://crowdfunding-gamma.vercel.app/searchText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setItems(data);
            });
    };


    return (
        // <div ref={ref} className="bg-cover bg-center bg-no-repeat  max-w-7xl mx-auto " style={{ backgroundImage: `url(${bg})` }}>

        <div ref={ref} className="max-w-7xl mx-auto ">
            <div>
                <SharedBanner
                    background={img}
                    title="Our Event"
                    titleHead="Know how we work together"
                    titleDes={
                        <>
                            We are a worldwide ministry in which millions of children reap the benefits of one man’s clear


                        </>
                    }
                ></SharedBanner>
                <motion.div className=" text-center mt-8"
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.9, delay: 1 }}

                >
                    {/* <h2 className="text-3xl font-bold text-white ">Our All Events</h2>
                    <hr className="border-b-[3px] w-[106px] mt-1 mb-5 border-[#F99F24] mx-auto" /> */}
                    <MainTitle heading="Our All Events"></MainTitle>


                    <div className="search-box  text-center">
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            className="ps-3 p-1 m-2 mt-5 rounded-lg bg-gray-300 text-black"
                            placeholder="Search event "
                        />{" "}
                        <button onClick={handleSearch} className="btn btn-sm items-center  bg-gradient-to-br from-blue-600 to-purple-600 text-white m-4 hover:from-purple-600 hover:to-blue-600">Search</button>
                    </div>
                </motion.div>
            </div>
            <div className="card-72 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:p-2 md:p-2  gap-2 p-5" >
                {
                    items?.map(item => <Card
                        key={item._id}
                        item={item}
                    ></Card>

                    )
                }

            </div >

        </div >
    );
};

export default Events;