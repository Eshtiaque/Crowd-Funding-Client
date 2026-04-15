import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const AllUsers = () => {
  let count = 1;
  const [data, setData] = useState(useLoaderData());

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    axios.get(`http://localhost:5000/users/${search}`)
      .then(result => setData(result));
  }

  const handleAction = (id, data) => {
    const saveUser = {
    }
    if (data.role == 'admin') {
      saveUser.role = 'user';
    }
    else {
      saveUser.role = 'admin';
    }

    fetch(`http://localhost:5000/userAction/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('set-token-for-user')}`
      },
      body: JSON.stringify(saveUser)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if (result.modifiedCount > 0) {
          toast.success("modified successfully");
          axios.get('http://localhost:5000/users')
            .then(result => setData(result));
        }
      })
  }

  return (
    <div className="px-10 mt w-full h-full mt-28 mb-8 text-black">
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mt-5">
        <h1 className="md:text-4xl text-4xl lg:text-4xl font-black text-[#130F49]">
          Total Users ({data?.data?.length})
          <hr className="border-2 border-slate-300 mt-2" />
        </h1>

        <div className="form-control mt-1">
          <div >
            <form className="input-group" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Search…"
                className="input ps-3 p-1 mt-5 rounded-lg bg-gray-300 text-black"
              />
              <button className="btn btn-sm items-center  bg-gradient-to-br from-blue-600 to-purple-600 text-white my-5 h-12 hover:from-purple-600 hover:to-blue-600">
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

      <div className="overflow-x-auto mt-12">
        <table className="table p-4 bg-base-300">
          {/* head */}
          <thead>
            <tr className="text-[#130F49] text-center text-xl">
              <th>#</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.data.map(data => <tr key={data._id}>
                <th className="text-center">{count++}</th>
                <td className="text-center">{data.name}</td>
                <td className="text-center">{data.email}</td>
                <td className="text-center">{data?.role === 'admin' ? 'Admin' : 'User' || "User"}</td>
                <td className="text-center">
                  <button onClick={() => handleAction(data._id, data)} className="py-2 px-4 border rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold hover:bg-[#74df66]">Change Role</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;