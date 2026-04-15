import background from "../../assets/img/section-banner/about.webp";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import SharedBanner from "./SharedBanner";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"


const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('clicked')
    }

    const ref = useRef(null)
  const isInView = useInView(ref)

  const mainControls = useAnimation()

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])


    return (
        <div className="max-w-7xl mx-auto mb-10">
            <div>
                 <SharedBanner
                    background={background}
                    title="Contact Us"
                    titleHead="Get connected now"
                    titleDes={
                        <>
                        We are a worldwide ministry in which  <br/>millions of children reap the benefits  <br/>of one man’s clear


                        </>
                    }
                ></SharedBanner> 

                {/* <div ref={ref} className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}> */}
                <div ref={ref} className="">
                    <div className="md:flex justify-center gap-4 mx-auto pb-8 pt-8 lg:ps-0 md:ps-0 ps-5 ">
                        <motion.div className="text-white"
                        
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                          }}
                          initial="hidden"
                          animate={mainControls}
                          transition={{ duration: 0.9, delay: 0.60 }}
                  
                  >
                    {/* hover:from-purple-600 hover:to-blue-600 */}

                            <h1 className="text-3xl text-[#F99F24]">Address</h1>
                            <div className="flex items-center gap-3 mt-5">
                                <div className="text-bg-gradient-to-br from-blue-600 to-purple-600">
                                <FaPhoneAlt />
                                </div>
                                <p>+88 00 000 000</p>
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                                <FaEnvelope />


                                <p>abcd@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                                <FaLocationArrow />
                                <p>Mirpur, Dhaka 1216</p>
                            </div>
                            <div className='flex gap-5 text-white text-3xl mt-10 cursor-pointer'>
                                <FaFacebook className="hover:text-[#1877F2]" />
                                <FaInstagram className="hover:text-[#bc2a8d]" />
                                <FaTwitter className="hover:text-[#1DA1F2]" />
                                <FaYoutube className="hover:text-[#c4302b]" />
                            </div>
                        </motion.div>




                        <motion.div className="text-black"
                         variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                          }}
                          initial="hidden"
                          animate={mainControls}
                          transition={{ duration: 0.9, delay: 1 }}
                  
                  >
                            <h1 className="text-3xl text-[#F99F24]">Get in touch</h1>
                            <form onSubmit={handleSubmit} className="mt-5 w-[360px] flex flex-col gap-2">
                                <input className="border-2 border-black rounded w-[230px] px-2" type="text" name="name" placeholder="Your name"></input>
                                <input className="border-2 border-black rounded w-[230px] px-2" type="email" name="email" placeholder="Your email"></input>
                                <textarea className="border-2 border-black rounded w-[230px] px-2" type="area" name="name" placeholder="Write message"></textarea>
                                <input className="cursor-pointer w-[230px] text-base text-white border-none me-3 bg-gradient-to-br from-blue-600 to-purple-600 px-4 py-1 hover:from-purple-600 hover:to-blue-600 border-tl-15 border-tr-15 rounded-3xl" type="submit" />
                            </form>
                        </motion.div>
                    </div>
                </div> 




             <motion.div className="mapouter relative text-right w-full h-[400px] mt-8"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.9, delay: 0.60 }}
      
      >
                    <div className="gmap_canvas">
                        <iframe
                            title="Google Map"
                            className="gmap_iframe w-full h-full"
                            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=shahbagh&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                        ></iframe>
                        <a href="https://connectionsgame.org/">Connections Game</a>
                    </div>
                    <style>
                        {`
          .mapouter {
            position: relative;
            width: 100%;
            height: 400px;
          }
          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            width: 100%;
            height: 400px;
          }
          .gmap_iframe {
            width: 100% !important;
            height: 400px !important;
          }
        `}
                    </style>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
