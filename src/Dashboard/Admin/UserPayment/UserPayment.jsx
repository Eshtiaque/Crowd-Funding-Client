import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const UserPayment = () => {
    const [payments, setPayments] = useState(useLoaderData());
    useEffect(() => {
        setPayments(payments.filter(payment => payment.transaction !== null && payment.transaction !== undefined));
    }, [payments]);

    let count = 1;

    const handleSearch = (e) => {
        e.preventDefault();
        const name = e.target.search.value;
        axios.get(`https://crowdfunding-gamma.vercel.app/paymentHistory/${name}`)
            .then(result => {
                setPayments(result.data.filter(payment => payment.transaction !== null && payment.transaction !== undefined));
            });
    };
    const totalAmount = payments.reduce((accumulator, currentPayment) => {
        return accumulator + parseFloat(currentPayment.price);
    }, 0);

    return (
        <div className="px-10 mt w-full h-full mt-28 mb-8 text-black">
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mt-5">
                <h1 className="md:text-3xl lg:text-4xl text-xl font-black text-[#130F49]">
                    All Payments ( $ )
                    <hr className="border-2 border-slate-300 mt-2" />

                </h1>
                <div className="form-control mt-1">
                    <div >
                        <form className="input-group" onSubmit={handleSearch}>
                            <input
                                type="text"
                                name="search"
                                placeholder="Search…"
                                className="input ps-3 p-1 mt-5 rounded-lg bg-gray-300 text-black"
                            />
                            <button className="btn btn-sm items-center  bg-gradient-to-br from-blue-600 to-purple-600 text-white my-5 h-12 hover:from-purple-600 hover:to-blue-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto mt-12">
                <table className="table p-4 bg-base-300">
                    {/* head */}
                    <thead>
                        <tr className="text-[#130F49] text-center text-xl">
                            <th>#</th>
                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>Address</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments?.map(data => <tr key={data._id}>
                                <th className="text-center">{count++}</th>
                                <td className="text-center">{data?.name}</td>
                                <td className="text-center">{data?.number}</td>
                                <td className="text-center">{data.address}</td>
                                <td className="text-center">{data.transaction}</td>
                                <td className="text-center text-green-700 font-semibold">$ {data?.price}</td>
                            </tr>)
                        }
                        <tr>
                            <td className="text-center">Total=</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center text-green-700 font-semibold">$ {totalAmount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserPayment;