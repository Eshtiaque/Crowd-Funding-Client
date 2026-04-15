import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useRef } from "react";

const AddEvent = () => {
  const dateInputRef = useRef(null);
  const { user } = useAuth();
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const title = form.title.value;
    const description = form.description.value;
    const publish_date = form.publish_date.value;
    const publisher_image = form.publisher_image.value;
    const publisher_name = form.publisher_name.value;

    const saveUser = { name, email, image, title, description, publish_date, publisher_image, publisher_name, status: 'pending' };
    fetch('https://crowdfunding-gamma.vercel.app/eventAdd', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(saveUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Event Submitted')
          form.reset();
          navigate('/dashboard/userAllEvent')
        }
      });
  };

  return (
    <div className=" 
      w-3/4 text-black">
      <div className="text-center mt-24">
        <h2 className="text-3xl  font-black text-[#130F49]">Submit Event&apos;s</h2>
        <hr className="border-b-[3px] w-[106px] mt-1 border-blue-600 mx-auto" />
      </div>

      <form className="card  shadow-2xl p-10 mx-auto text-base leading-6 space-y-6 sm:text-lg sm:leading-7 overflow-hidden mb-16 mt-8 bg-white" onSubmit={handleSubmit}>

        <div className="relative">
          <input
            name="name"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Full Name"
            value={user?.displayName}
            required />

          <label
            htmlFor="name"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Full Name
          </label>
        </div>

        <div className="relative">
          <input
            name="email"
            type="email"
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Email"
            value={user?.email}
            required />

          <label
            htmlFor="email"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Email
          </label>
        </div>

        <div className="relative">
          <input
            name="title"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="address"
            required />

          <label
            htmlFor="title"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Event Title
          </label>
        </div>

        <div className="relative">
          <input
            name="image"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="address"
            required />

          <label
            htmlFor="image"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Event Photo URL
          </label>
        </div>

        <div className="relative">
          <input
            name="publish_date"
            type="date"
            ref={dateInputRef}
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="address"
            required />

          <label
            htmlFor="publish_date"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Date
          </label>
        </div>

        <div className="relative">
          <input
            name="publisher_name"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="address"
            required />

          <label
            htmlFor="publisher_name"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Publisher Name
          </label>
        </div>

        <div className="relative">
          <input
            name="publisher_image"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="address"
            required />

          <label
            htmlFor="publisher_image"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            User Image URL
          </label>
        </div>

        <div className="relative">
          <input
            name="description"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="ideas"
            required
          />

          <label
            htmlFor="description"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Event Details
          </label>
        </div>

        <div className="text-center">
          <motion.button type="submit"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px #000",
              boxShadow: "0px 0px 8px #000"
            }}
            className="btn w-3/4 mb-3 mr-3 text-white bg-gradient-to-br mt-5 from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600  ">
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;