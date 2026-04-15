import axios from "axios";
import { useState, useEffect } from "react";
import { FaUndoAlt } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const BlogNews = () => {
    let count = 1;
    const [data, setData] = useState(useLoaderData());
    const [isLoading, setIsLoading] = useState(false);

    console.log(data);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setIsLoading(true);
        axios
            .get("https://crowdfunding-gamma.vercel.app/blogsSearch")
            .then((result) => {
                setData(result.data);
                setIsLoading(false);
                toast.success("Data refreshed");
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setIsLoading(false);
            });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        axios
            .get(`https://crowdfunding-gamma.vercel.app/blogsSearch/${search}`)
            .then((result) => setData(result.data));
    };

    const handleRefresh = () => {
        fetchData();
    };

    return (
        <div className="bg-black px-10 w-full h-full mt-28 text-white min-h-[80vh]">
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mt-5">
                <h1 className="text-2xl md:text-4xl text-orange-300 normal-case font-semibold">
                    All Blogs ({data?.data?.length})
                </h1>
                <div className="form-control mt-1 text-black">
                    <div>
                        <form onSubmit={handleSearch} className="input-group">
                            <input
                                name="search"
                                type="text"
                                placeholder="Search…"
                                className="input input-bordered border border-black rounded-full text-black placeholder-black bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%"
                            />
                            <button className="btn border border-black rounded-full text-black placeholder-black bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%">
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
            <div className="flex items-end justify-end my-4">
                <p
                    className="flex items-center justify-center gap-2 cursor-pointer hover:scale-95 hover:duration-300 duration-300"
                    onClick={handleRefresh}
                >
                    <FaUndoAlt></FaUndoAlt>Refresh
                </p>
            </div>

            <div className="overflow-x-auto">
                {isLoading ? (
                    <div className="text-center text-gray-500 text-lg my-8">
                        Refreshing...
                    </div>
                ) : (
                    <table className="table text-white">
                        <thead>
                            <tr className="text-orange-300 text-xl">
                                <th>Serial No</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Mobile No</th>
                                <th>status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data?.map((item) => (
                                <tr key={item._id}>
                                    <th className="py-4">{count++}</th>
                                    <td className="py-4">{item?.name}</td>
                                    <td className="py-4">{item?.email}</td>
                                    <td className="py-4">{item?.phone || "User"}</td>
                                    <td className="py-4">{item?.status}</td>
                                    <Link
                                        to={`/dashboard/blog/${item?._id}`}
                                        className="p-2 border border-white rounded-bl-full rounded-tr-full bg-transparent text-[#F99F24] hover:text-black hover:bg-[#F99F24] my-2"
                                    >
                                        <td>Details</td>
                                    </Link>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default BlogNews;
