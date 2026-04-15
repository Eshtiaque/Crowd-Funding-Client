// import axios from 'axios';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BlogDetails = () => {
  const [data,] = useState(useLoaderData());
  const navigate = useNavigate();

  console.log(data)

  const handleAction = (id) => {

    const saveUser = {
      status: "approved",
    };
    fetch(`https://crowdfunding-gamma.vercel.app/blogsUpdate/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('set-token-for-user')}`
      },
      body: JSON.stringify(saveUser)
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount > 0) {
          toast.success("modified successfully");
          navigate("/dashboard/blog");
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div className=' text-white min-h-screen lg:min-h-fit mt-36 lg:mt-0'>
      <h1 className='-mt-4 text-center text-2xl font-bold'>{data.name} Blog Details</h1>
      <p className='text-yellow-700 text-lg font-semibold text-center my-2 uppercase'>{data.status}</p>

      <hr className='md:w-8/12 mx-auto mt-4 mb-8' />
      <div className='flex flex-col items-center gap-6 mx-10 md:my-5 mt-10'>
        <div className='flex items-center justify-around gap-4'>
          <p className='text-yellow-700 text-lg font-semibold'>Name: <span className='text-gray-300'>{data.name}</span></p>
          <p className='text-yellow-700 text-lg font-semibold'>Email: <span className='text-gray-300'>{data.email}</span></p>
        </div>
        <div className='space-y-6 mt-10 md:mt-0'>
          <img src={data.image} alt="" />
          <p className='my-2'><small className='font-bold text-2xl'>Event Title: </small>{data.title}</p>

          <p className='my-2'><small className='font-bold text-2xl'>Description: </small>{data.description}</p>

          <p className='my-2'><small className='font-semibold'>Publish date: </small>{data.description}</p>

          <button onClick={() => handleAction(data._id)} disabled={data.status === "approved"} className="btn btn-warning text-white my-5">{data.status === "approved" ? 'Approved' : 'Approve'}</button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;