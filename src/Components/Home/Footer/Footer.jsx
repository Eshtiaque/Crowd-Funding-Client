import { motion } from "framer-motion"

import logo from '../../../assets/img/logo-main/Orange_Black_Hummingbird_Tech_Digital_Bird_Logo__1_-removebg-preview.webp'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import MainButton from '../../SharedComponents/MainButton';
import { Link } from 'react-router-dom';

const Footer = () => {


    const handleSubscribe = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const data = { email }

        // fetch(`https://crowdfunding-gamma.vercel.app/campaigns`, {

        fetch('https://crowdfunding-gamma.vercel.app/subscribers', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        form.reset()
    }


    return (
        <div className='bg-[#0a102b]'>
            <div className='max-w-7xl mx-auto text-white py-5  lg:ps-0 md:ps-5 ps-5'>
                <footer className="footer ps-7">
                    <div>
                        <img className='w-56' src={logo}></img>
                        <p>Duis elementum sapien et neque<br></br> lobortis laoreet.  Pellentesque<br></br> habitant morbi tristique senectus<br></br> et netus et malesuada</p>
                        {/* <button className="btn border-none bg-[#F99F24] text-white mt-1">Explore more</button> */}
                        <Link to="/about">
                            <MainButton text="Explore more"></MainButton>
                        </Link>
                    </div>
                    <div>
                        <span className="footer-title">Category</span>
                        <a className="link link-hover">Medical</a>
                        <a className="link link-hover">Family</a>
                        <a className="link link-hover">Children</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Disaster</a>
                    </div>
                    <div>
                        <span className="footer-title">Know More</span>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">FAQ</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Terms & Condition</a>
                    </div>
                    <div>
                        <span className="footer-title">Support Forum</span>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Write your email into below field and <br></br> join our quick support forum.</span>
                            </label>
                            <form onSubmit={handleSubscribe} className="">
                                <input className="border-2 border-black text-black rounded w-[230px] px-2 py-2" type="email" name="email" placeholder="username@site.com"></input>
                                <br></br>
                                {/* <input type='submit' value="subscribe" className="btn bg-[#F99F24] border-none text-white mt-1"></input> */}
                                <motion.input
                                    whileHover={{
                                        scale: 1.1,
                                        textShadow: "0px 0px 8px #fff",
                                        boxShadow: "0px 0px 8px #fff"
                                    }}
                                    type='submit' value="subscribe" className="text-base text-white bg-gradient-to-br mt-2 from-blue-600 to-purple-600 border-tl-15 border-tr-15 rounded-3xl px-4 py-1 hover:from-purple-600 hover:to-blue-600 cursor-pointer"></motion.input>


                            </form>
                        </div>
                        {/* social icons  */}
                        {/* <div className='flex gap-2 text-2xl mt-5'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </div> */}
                    </div>
                </footer>


                {/* copyright and social  */}


                <div className='flex justify-around mt-10 items-center'>
                    <div>
                        <p>Copyright © 2023. UniAid all Rights Reserved</p>
                    </div>

                    {/* social icons  */}
                    {/* <div className='flex gap-2 text-3xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />
                </div> */}
                </div>
                <div className='flex justify-center gap-4 text-2xl mt-5 cursor-pointer'>
                    <FaFacebook className="hover:text-[#1877F2]" />
                    <FaInstagram className="hover:text-[#bc2a8d]" />
                    <FaTwitter className="hover:text-[#1DA1F2]" />
                    <FaYoutube className="hover:text-[#c4302b]" />
                </div>
            </div>

        </div>
    );
};

export default Footer;