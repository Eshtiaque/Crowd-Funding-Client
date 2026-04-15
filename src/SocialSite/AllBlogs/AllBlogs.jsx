import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const AllBlogs = () => {
    const [searchText, setSearchText] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {

        fetch("https://crowdfunding-gamma.vercel.app/allSocialPost")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
    }, [])
    const handleSearch = () => {
        fetch(`https://crowdfunding-gamma.vercel.app/searchText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setItems(data);
            });
    };

    return (
        <div className="">
            <div className="search-box  text-center ps-2">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="ps-3 p-1 mt-5 rounded-lg bg-gray-300 text-black"
                    placeholder="Search Blog "
                />{" "}
                <button onClick={handleSearch} className="btn btn-sm items-center  bg-gradient-to-br from-blue-600 to-purple-600 text-white m-4 hover:from-purple-600 hover:to-blue-600">Search</button>
            </div>

            <div className="mt-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:p-12 md:p-12">

                {
                    items?.map(item => <>
                        <SingleBlog
                            key={item._id}
                            item={item}
                        ></SingleBlog>
                    </>

                    )
                }


            </div>

        </div >
    );
};

export default AllBlogs;