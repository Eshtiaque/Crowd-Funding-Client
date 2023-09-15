import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const UserPaymentHistory = () => {
    let count = 1;
    const { user } = useAuth();
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch(`https://crowdfunding-gamma.vercel.app/payment/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setDonations(data);
                document.title = "My Blogs";
            });
    }, [user]);

    const totalAmount = donations?.reduce((accumulator, currentPayment) => {
        return accumulator + parseFloat(currentPayment.price);
    }, 0);
    console.log(donations);

    return (
        <div className="px-10 mt w-full h-full mt-28 mb-8">

            <h1 className="md:text-3xl mt-5 w-full text-xl text-center text-[#130F49] font-semibold">
                My Donations
            </h1>

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
                            donations?.map(data => <tr key={data._id}>
                                <th className="text-center">{count++}</th>
                                <td className="text-center">{data?.name}</td>
                                <td className="text-center">{data?.number}</td>
                                <td className="text-center">{data?.address}</td>
                                <td className="text-center">{data?.transaction ? data.transaction : "Not Found"}</td>
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

export default UserPaymentHistory;