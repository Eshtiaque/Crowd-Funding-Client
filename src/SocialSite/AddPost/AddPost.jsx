import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import image from "../../assets/SocialBLog/Green Minimalist Blog Post Linkedin Article Cover.png"

const AddPost = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/addSocialPostBlog', {
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
                    //bg-[#5c771e] 
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        iconColor: '#5c771e',
                        color: '#5c771e',
                        background: 'black',
                        title: 'Blog Added Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }


    return (
        <div className="max-w-7xl mx-auto">

            <div className="text-end">
                <img className="w-full" src={image} alt="" />


            </div>
            <div className="max-w-7xl mx-auto">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <h5 className="font-bold text-4xl mt-3 ps-3 ">Title . . .</h5>
                        <input className="p-2  w-full text-white bg-[#050816]  " defaultValue="" placeholder="#ready ?"
                            {...register("title")} />
                    </div>
                    <hr className="border border-primary-focus" />

                    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 mt-9 ps-3">
                        <div>
                            <h5 className="font-bold  ">Photo :</h5>
                            <input className="p-3 border border-primary-focus bg-[#050816] rounded-3xl  w-3/4 " placeholder="#photo" accept=".jpeg, .png, .webp"
                                {...register("photo")} />
                        </div>
                        <div>
                            <h5 className="font-bold  ">Author - Email :</h5>
                            <input className="p-3  w-3/4 border border-primary-focus bg-[#050816] 
                         rounded-3xl" placeholder="#email" defaultValue=""
                                {...register("email", { required: true })} />
                        </div>
                        <div>
                            <h5 className="font-bold  ">Author - Name :</h5>
                            <input className="p-3  w-3/4 border border-primary-focus bg-[#050816] 
                         rounded-3xl" placeholder="#your name" defaultValue=""
                                {...register("name")} />
                        </div>
                        <div>
                            <h5 className="font-bold ">Date :</h5>
                            <input className="p-3 w-3/4 border border-primary-focus bg-[#050816] rounded-3xl" type="date"
                                {...register("date")} />
                        </div>
                    </div>




                    <h5 className=" text-2xl mt-3 ps-3 mb-3"> Share your Blog </h5>

                    <div className="text-left m-1">

                        <input className=" w-full items-start pb-48 border border-primary-focus bg-[#151824]   p-4 rounded-lg placeholder:" defaultValue="" placeholder="Write here . . ." {...register("blog")} />
                    </div>
                    <div>

                    </div>
                    <div className="md:grid md:grid-cols-1 lg:grid grid-cols-1 mt-3 p-2">

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="btn text-white mt-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl py-1 lg:ms-72 hover:from-purple-600 hover:to-blue-600 w-1/2 " type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;