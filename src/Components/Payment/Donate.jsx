// import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SharedBanner from '../Contact/SharedBanner';
import img from "../../assets/img/section-banner/robert-collins-tvc5imO5pXk-unsplash.webp"
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"


// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckOut from './CheckOut';
// const stripePromise = loadStripe('pk_test_51NEmG3IxzytApYUlrVvQjOkLBL4TdwZ6aTq4Mz4FnMKHgzjX83FRLIjyEjCddXis3csWUdu0pnLWkkt5QSxJAjb300a5y8iSib');
const Donate = () => {


    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])



    const navigate = useNavigate();
    const handlePayment = (event) => {
        event.preventDefault();
        const form = event.target;

        const paymentData = {
            name: form.name.value,
            number: form.number.value,
            address: form.address.value,
            price: form.payment.value,
            message: form.message.value,
            email: form.email.value,
        }
        fetch("https://crowdfunding-gamma.vercel.app/saveAddress", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(paymentData),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result.insertedId)
                navigate(`/donatePayment/${result.insertedId}`)
            })
            .catch(error => console.log(error))


    }
    return (
        <div ref={ref} className='max-w-7xl mx-auto'>
            <div className="max-w-7xl mx-auto">
                <SharedBanner
                    background={img}
                    title="Donate Us"
                    titleHead="Donate to Change a Life"
                    titleDes={
                        <>
                            The Access to Water, Food Security & The Promotion of Women Are Major Challenges.
                            <br /> Our Work in Palestine. Social Promotion Foundation for Women. Liaison Status FAO.
                        </>
                    }
                ></SharedBanner>
            </div>
            <motion.div className="text-center mt-8"
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 1.2 }}

            >
                <h2 className="text-3xl font-bold">Please fill-up your information</h2>
                <hr className="border-b-[3px] w-[106px] mt-1 border-blue-600 mx-auto" />
            </motion.div>

            <motion.form className='my-3 mx-[5vw]' onSubmit={handlePayment}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 1.5 }}

            >
                <input type='text' name='name' className='input input-bordered w-full my-2 bg-white text-black' placeholder='Enter your name' required></input><br />
                <input type='email' name='email' className='input input-bordered w-full my-2 bg-white text-black' placeholder='Enter your email' required></input><br />
                <input type='number' name='number' className='input input-bordered w-full my-2 bg-white text-black' placeholder='Enter your mobile number' required></input><br />
                <textarea rows="10" cols="50" name='address' className='input input-bordered w-full my-2 text-black' placeholder='Enter your address' required></textarea><br />
                <input type='number' name='payment' className='input input-bordered w-full my-2 bg-white text-black' placeholder='Enter total payment dollars' required></input><br />
                <textarea rows="10" cols="50" name='message' className='input input-bordered w-full my-2 text-black' placeholder='feedback for massage' ></textarea><br />
                {/* <Elements stripe={stripePromise}>
                <CheckOut price={tk}></CheckOut>
            </Elements> */}
                <input type="submit" value="submit" className='btn bg-gradient-to-br from-blue-600 to-purple-600  input-bordered w-full my-2 text-white ' /><br />
            </motion.form>
        </div>
    );
};

export default Donate;