// import axios from 'axios';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const ProjectDescription = () => {
  const [data,] = useState(useLoaderData());
  const navigate = useNavigate();

  const handleAction = (id) => {

    const saveUser = {
      status: "approved",
    }
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
          navigate("/dashboard/allProject");
        }
      })
      .catch(error => console.log(error))
  }
  console.log(data);
  return (
    <div className='px-4 md:px-10 w-full h-full mt-28 md:mt-36 mb-8 text-black'>
      <h1 className='mt-4 text-center text-xl md:text-2xl lg:text-4xl font-black text-[#130F49] bg-[#cccecd] py-2 md:py-1 rounded-xl'>{data.name}'s Application Details</h1>

      <div className='md:flex flex-row justify-around items-center mx-4 md:mx-10 md:my-5 mt-8 md:mt-12 rounded-xl p-8 bg-base-300'>
        <div className='basis-1/2 space-y-3.5'>
          <h1>Name: {data.name}</h1>
          <p>Phone: {data.phone}</p>
          <p>Email: {data.email}</p>
          <p>Address: {data.address}, {data.country}</p>
          <p>Application for: <small className='text-red-600 uppercase font-semibold'>{data.types}</small> </p>
        </div>

        <div className='md:basis-1/2 space-y-5 mt-10 md:mt-0'>
          <p><small className='font-semibold text-xl'>Project Idea: </small>{data.ideas}</p>
          <p className='font-semibold text-xl'>Project Money: <small className='text-green-600 font-semibold text-xl'>${data.money}</small></p>

          <div className='text-center md:text-left'>
            <button onClick={() => handleAction(data._id)} disabled={data?.status === "approved"} className="py-2 px-4 border rounded-lg bg-[#98c292] font-semibold disabled:bg-white disabled:text-gray-400 hover:bg-[#74df66]">
              {data.status === "approved" ? 'Approved' : 'Approve'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;