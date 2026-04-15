import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
const AddBlog = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/blogAdd ', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You Added a Blog Successfully',
                        'success'
                    )
                }
            })

    }


    return (
        <div className="bg-black text-black">
            <div className="bg-gradient-to-r from-[#F99F24] to-[#3c3b3b] rounded p-2" >
                <h1 className="text-left font-black ps-5 text-5xl mt-24 mb-4">Add Your Blog{"'"}s </h1>
                <p className='text-left font-bold p-5'>NB: You can Add your blog in Our website.This is Best platform for share your blog.<br />You Can find proper Funding what you have needed by Blog ! <br /> PLEASE give the true and right information.<br /> # Thank You #</p>
                <h2 className="text-center justify-end mb-5">________________________________________</h2>
            </div>
            <div className="bg-gradient-to-r from-[#F99F24] to-[#3c3b3b]">
                <form className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 p-5 gap-3 justify-end" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h5 className="font-bold pt-3 ">Blog - Name :</h5>
                        <input className="p-2 w-full text-black  bg-pink-200 border border-black
                         rounded-3xl" defaultValue=""
                            {...register("name")} />
                    </div>
                    <div >
                        <h5 className="font-bold mt-3">Your - Name :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black  rounded-3xl" defaultValue=""
                            {...register("sellerName")} />
                    </div>
                    <div>
                        <h5 className="font-bold mt-3">Your - Email :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("email", { required: true })} />
                    </div>
                    <div>
                        <h5 className="font-bold mt-3">Photo URL :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("photoURL")} />
                    </div>
                    {/* <div className=" gap-1 mt-3 ">
                        <h5 className="font-bold y-center ">Category :</h5>
                        <select className=" w-full  h-10 p-2 text-black  bg-pink-200 border border-black rounded-3xl"
                            {...register("category")}>
                            <option value="Robot">Robot</option>
                            <option value="Lego">Lego</option>
                            <option value="Marvel">Marvel</option>
                        </select>
                    </div> */}
                    <div>
                        <h5 className="font-bold mt-3"> Details :</h5>
                        <input className="box-border h-32 w-full resize focus:ring-0 p-2 text-black  bg-pink-200 border border-black rounded-3xl" defaultValue="" {...register("details")} />
                    </div>
                    <div>

                    </div>
                    <div className="md:grid md:grid-cols-1 lg:grid grid-cols-1 mt-3">

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" className='btn btn-outline text-orange-300 border-pink-500 hover:bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 hover:text-black bg-black  w-full mt-3 mb-3 font-bold  ' />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;