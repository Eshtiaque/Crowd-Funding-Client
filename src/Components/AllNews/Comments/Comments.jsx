import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../Providers/AuthProvider";
const Comments = () => {
    const { user } = useContext(AuthContext)
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/addComment', {
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
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        iconColor: '#F99F24',
                        color: '#F99F24',
                        background: 'black',
                        title: 'Comment Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className="border rounded-lg lg:ms-0 md:ms-0 md:m-2 ms-12">

            <div className="">
                <form className="md:grid md:grid-cols-1 lg:grid lg:grid-cols-1  p-5 gap-3  justify-end " onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h5 className="font-bold "> Comment Here </h5>
                        <input className="p-2  w-full text-black  bg-gray-400 border rounded-lg border-black " defaultValue={user?.email}  {...register("email")} />
                    </div>

                    <div>

                        <input className="p-2  w-full text-black  bg-gray-400 border rounded-lg border-black h-32"  {...register("text")} />
                    </div>

                    <div className="md:grid md:grid-cols-1 lg:grid grid-cols-1 mt-3">

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" className='btn bg-[#f99F24] text-white hover:bg-black hover:text-[#F99F24] ' />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comments;