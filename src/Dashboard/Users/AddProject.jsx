// import { useForm } from "react-hook-form";
// import { useEffect } from "react";
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import project from "../../assets/img/Final/10.webp";
import help from "../../assets/img/Final/05.webp";

const AddBlog = () => {
    // const { register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();
    // const onSubmit = (data) => {
    //     console.log(data);
    //     fetch('https://crowdfunding-gamma.vercel.app/blogAdd ', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.insertedId) {
    //                 toast.success('Project has beeb submitted');
    //             }
    //         });

    // };


    return (
        <div>
            <h1 className="lg:mt-12 md:mt-12 mt-24 lg:p-0 md:p-0 p-2 text-[#130F49] font-black text-4xl uppercase italic">Start your project with submit proper information</h1>
            <hr className="border-slate-400 border-2 mt-3" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-16 text-black">
                {/* //two big card */}
                <div>
                    <h2 className="uppercase text-xl my-6 text-center font-black text-[#130F49]">Start Your Project</h2>
                    <Link to="/form" className="card w-11/12 mx-auto md:w-96 bg-base-100 shadow-xl group">
                        <figure><img src={project} alt="Shoes" className="group-hover:scale-105 hover:duration-500 duration-500" /></figure>
                        <div className="card-body text-center">
                            <h2 className="font-bold text-lg">
                                Be an entrepreneur
                            </h2>
                            <p>Share your ideas and thought with us!</p>
                            <div className="card-actions justify-center mt-4">
                                <div className="badge badge-outline bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3">Ideas</div>
                                <div className="badge badge-outline bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3">Responsibility</div>
                                <div className="badge badge-outline bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3">Skills</div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="uppercase font-black text-xl my-6 text-center text-[#130F49]">Get help now</h2>
                    <Link to="/form" className="card w-11/12 mx-auto md:w-96 bg-base-100 shadow-xl group">
                        <figure><img src={help} alt="Shoes" className="group-hover:scale-105 hover:duration-500 duration-500" /></figure>
                        <div className="card-body text-center">
                            <h2 className="font-bold text-lg">
                                Help disaster victims
                            </h2>
                            <p>Share details and let us help the mankind!</p>
                            <div className="card-actions justify-center mt-4">
                                <div className="badge badge-outline bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3">Disaster</div>
                                <div className="badge badge-outline bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3">Help</div>
                                <div className="badge badge-outline bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3">Mankind</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        // <div className="bg-black text-black">
        //     <div className="bg-gradient-to-r from-[#F99F24] to-[#3c3b3b] rounded p-2" >
        //         <h1 className="text-left font-black ps-5 text-5xl mt-24 mb-4">Add Your Blog{"'"}s </h1>
        //         <p className='text-left font-bold p-5'>NB: You can Add your blog in Our website.This is Best platform for share your blog.<br />You Can find proper Funding what you have needed by Blog ! <br /> PLEASE give the true and right information.<br /> # Thank You #</p>
        //         <h2 className="text-center justify-end mb-5">________________________________________</h2>
        //     </div>
        //     <div className="bg-gradient-to-r from-[#F99F24] to-[#3c3b3b]">
        //         <form className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 p-5 gap-3 justify-end" onSubmit={handleSubmit(onSubmit)}>
        //             <div>
        //                 <h5 className="font-bold pt-3 ">Blog - Name :</h5>
        //                 <input className="p-2 w-full text-black  bg-pink-200 border border-black
        //                  rounded-3xl" defaultValue=""
        //                     {...register("name")} />
        //             </div>
        //             <div >
        //                 <h5 className="font-bold mt-3">Your - Name :</h5>
        //                 <input className="p-2  w-full text-black   bg-pink-200 border border-black  rounded-3xl" defaultValue=""
        //                     {...register("sellerName")} />
        //             </div>
        //             <div>
        //                 <h5 className="font-bold mt-3">Your - Email :</h5>
        //                 <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
        //                     {...register("email", { required: true })} />
        //             </div>
        //             <div>
        //                 <h5 className="font-bold mt-3">Photo URL :</h5>
        //                 <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
        //                     {...register("photoURL")} />
        //             </div>
        //             {/* <div className=" gap-1 mt-3 ">
        //                 <h5 className="font-bold y-center ">Category :</h5>
        //                 <select className=" w-full  h-10 p-2 text-black  bg-pink-200 border border-black rounded-3xl"
        //                     {...register("category")}>
        //                     <option value="Robot">Robot</option>
        //                     <option value="Lego">Lego</option>
        //                     <option value="Marvel">Marvel</option>
        //                 </select>
        //             </div> */}
        //             <div>
        //                 <h5 className="font-bold mt-3"> Details :</h5>
        //                 <input className="box-border h-32 w-full resize focus:ring-0 p-2 text-black  bg-pink-200 border border-black rounded-3xl" defaultValue="" {...register("details")} />
        //             </div>
        //             <div>

        //             </div>
        //             <div className="md:grid md:grid-cols-1 lg:grid grid-cols-1 mt-3">

        //                 {errors.exampleRequired && <span>This field is required</span>}

        //                 <input type="submit" className='btn btn-outline text-orange-300 border-pink-500 hover:bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 hover:text-black bg-black  w-full mt-3 mb-3 font-bold  ' />

        //             </div>
        //         </form>
        //     </div>
        // </div>
    );
};

export default AddBlog;