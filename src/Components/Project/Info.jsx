import { motion } from "framer-motion"
import SharedBanner from "../Contact/SharedBanner";
import campaignPhoto from "../../assets/img/Final/10.webp";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Info = () => {
  const { user } = useAuth();
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const types = form.types.value;
    const country = form.country.value;
    const money = form.money.value;
    const ideas = form.ideas.value;

    const saveUser = { name, email, phone, address, country, money, ideas, types, status: 'pending' };
    fetch('https://crowdfunding-gamma.vercel.app/blogs', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(saveUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Application Submitted')
          form.reset();
          navigate('/project')
        }
      });
  };

  return (
    <div className="bg-gradient-to-bl from-gray-700 via-gray-900 to-black 
    max-w-7xl mx-auto pb-8">
      <div className="max-w-7xl mx-auto">
        <SharedBanner
          background={campaignPhoto}
          title="Projects"
          titleHead="Submit your project details"
          titleDes={
            <>
              We will help you to start a new project or to collect funds for disasters.
            </>
          } />
      </div>

      <div className="text-center mt-8">
        <h2 className="text-3xl text-white font-bold">Submit Detail</h2>
        <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
      </div>

      <form className="card card-compact shadow-2xl p-10 max-w-7xl mx-auto w-11/12 text-base leading-6 space-y-6 sm:text-lg sm:leading-7 overflow-hidden mb-16 mt-8 bg-white" onSubmit={handleSubmit}>

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
            name="phone"
            type="number"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="+880"
            required
          />

          <label
            htmlFor="phone"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Phone Number
          </label>
        </div>

        <div className="relative">
          <input
            name="address"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="address"
            required />

          <label
            htmlFor="address"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Address
          </label>
        </div>

        <div className="relative">
          <select className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600 text-sm text-gray-700" name='types' required>
            <option disabled selected required>Apply For</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="disaster">Disaster</option>
          </select>
        </div>

        <div className="relative">
          <select className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600 text-sm text-gray-700" name='country' required>
            <option disabled selected required>Country</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Canada">Bangladesh</option>
            <option value="Canada">Nepal</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
            <option value="Japan">Egypt</option>
            <option value="Japan">Niger</option>
            <option value="Japan">Venezuela</option>
          </select>
        </div>

        <div className="relative">
          <input
            name="money"
            type="number"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Approximate Value"
            required
          />

          <label
            htmlFor="money"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Approximate Value $
          </label>
        </div>

        <div className="relative">
          <input
            name="ideas"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="ideas"
            required
          />

          <label
            htmlFor="ideas"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Project Details
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

export default Info;