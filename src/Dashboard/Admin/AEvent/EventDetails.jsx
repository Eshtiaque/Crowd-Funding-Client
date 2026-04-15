// import axios from 'axios';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const EventDetails = () => {
  const [data,] = useState(useLoaderData());

  const handleAction = (id) => {
    const updatedStatus = data.status === 'pending' ? 'approved' : 'approved';
    const updatedData = { ...data, status: updatedStatus };

    fetch(`https://crowdfunding-gamma.vercel.app/event/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('set-token-for-user')}`
      },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount > 0) {
          toast.success("modified successfully");
        }
      })
      .catch(error => console.log(error));
  };


  return (
    <div className='px-4 md:px-10 w-full h-full mt-28 md:mt-36 mb-8 text-black'>
      <h1 className='mt-4 text-center text-xl md:text-2xl lg:text-4xl font-black text-[#130F49] bg-[#e3e6e5] py-2 md:py-1 rounded-xl'>{data.publisher_name}'s Event Details</h1>

      <p className='text-green-600 text-lg font-bold text-center my-2 uppercase'>{data.status}</p>
      <hr className='md:w-8/12 mx-auto mt-4 mb-4 border border-[#D3F4EC]' />

      <div className='flex flex-col items-center gap-6 md:my-3 w-full mx-auto mt-10'>
        <div className='flex flex-col md:flex-row items-center justify-around gap-4'>
          <img src={data.publisher_image} alt="" className='w-16 h-16 rounded-full border-2 border-[#9ee0d0]' />
          <div>
            <p className='text-[#130F49] text-lg font-semibold'>Publisher: <span className='text-gray-700'>{data.publisher_name}</span></p>
            <p className='text-[#130F49] text-lg font-semibold'>Email: <span className='text-gray-700'>{data.email ? data.email : 'N/A'}</span></p>
          </div>
        </div>

        <hr className='my-3 w-full border border-[#D3F4EC]' />

        <div className='space-y-6 mt-4 md:mt-0 flex flex-col items-center bg-base-300 p-4'>
          <img src={data.image} alt="" className='w-80 rounded-xl' />
          <div>
            <p className='text-justify text-gray-700'>
              <small className='font-bold text-xl text-[#130F49]'>Event Title: </small>
              {data.title}
            </p>

            <p className='text-justify text-gray-700 my-2'>
              <small className='font-bold text-xl text-[#130F49]'>Description: </small>
              {data.description}
            </p>

            <p className='text-gray-700 text-lg'>
              <small className='font-semibold text-[#130F49]'>Publish date: </small>
              {data.publish_date}
            </p>

            <div className='flex justify-end'>
              <button onClick={() => handleAction(data._id)} disabled={data.status === "approved"} className="py-2 px-4 border rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white disabled:bg-white disabled:text-gray-400 hover:bg-[#74df66]">{data.status === "approved" ? 'Approved' : 'Approve'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;