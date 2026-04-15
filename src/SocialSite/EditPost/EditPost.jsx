import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const EdiPost = () => {
  const navigate = useNavigate()
  const data = useLoaderData();
  const id = data?._id
  console.log(id);
  const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const title = form.title.value;
    const name = form.name.value;
    const email = form.email.value;
    const blog = form.blog.value;
    console.log(date, email, blog, title, name);
    form.reset();
    console.log(data.name);
    const update = { date, email, blog, title, name };
    fetch(`http://localhost:5000/allPost/${data?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(update)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            background: 'black',
            position: 'center',
            icon: 'success',
            title: 'Your Blog has been updated',
            showConfirmButton: false,
            timer: 1500
          })
          navigate(`/socialBlog/details/${id}`)

        }
      })

  }

  return (
    <div className="">
      <h1 className="text-center    p-4 font-black text-4xl text-transparent text-primary-focus  rounded-full">Update Blogs</h1>
      {/* <h1 className="text-center text-black font-black text-xl m-2">Name :
      {data?.name}</h1> */}
      <form onSubmit={handleUpdate} className=" max-w-7xl mx-auto grid  w-full lg:ps-1 md:ps-2 p-4">
        <h2 className="font-bold text-4xl mt-3  mb-5 ps-3 ">Title :</h2>
        <input type="text" name="title" defaultValue={data?.title} placeholder="Type here" className="p-2  w-full text-white  rounded-lg bg-[#050816]" />
        <hr className="border border-primary mb-3" />
        <h2 className=" font-bold text-xl mt-5">Author Name :</h2>
        <input type="text" name="name" defaultValue={data?.name} placeholder="Type here" className="p-3  lg:w-1/4 md:w-1/4  bg-[#050816] text-white  rounded-3xl" />
        <hr className="border border-primary mb-3 lg:w-1/4 md:w-1/4" />

        <br />
        <h2 className=" font-bold text-xl mt-5">Email :</h2>
        <input type="text" name="email" defaultValue={data?.email} placeholder="Type here" className="p-3  lg:w-1/4 md:w-1/4 text-white bg-[#050816] border-primary-focus rounded-3xl" />
        <hr className="border border-primary mb-3 lg:w-1/4 md:w-1/4" />

        <br />
        <h2 className=" font-bold text-xl ">Date :</h2>
        <input type="date" name="date" defaultValue={data?.date} placeholder="Type here" className="p-3   lg:w-1/4 md:w-1/4 text-white bg-[#050816]  rounded-3xl" />
        <hr className="border border-primary mb-3 lg:w-1/4 md:w-1/4" />

        <br />

        <h2 className=" font-bold text-xl">Blog</h2>
        <input type="text" name="blog" defaultValue={data?.blog} placeholder="Type here" className=" mt-3 w-full items-start pb-48 text-white border-primary-focus p-2  bg-[#151824]   border rounded-lg " />

        <input className="btn text-white mt-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl py-1 lg:ms-72 hover:from-purple-600 hover:to-blue-600 w-1/2 " type="submit" />


      </form>

    </div>
  );
};
export default EdiPost;