import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  // Ensure all Hooks are at the top level
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Password visibility state
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email, role: "user" }

            // Note: Use https://crowdfunding-gamma.vercel.app/users for local development
            fetch('https://crowdfunding-gamma.vercel.app/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                // Show success message and redirect if user is inserted or already exists
                if (data.insertedId || data.message === 'already exists') {
                  Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    iconColor: '#F99F24',
                    color: '#F99F24',
                    background: 'black',
                    title: 'SignUp Successful',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, { replace: true });
                }
              })
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  };

  return (
    <div className="hero pt-16 md:pt-40 md:pb-40 bg-login mx-auto">
      <div className="hero-content p-0 flex-none lg:flex-row">
        <div className="card w-96 rounded-lg flex-shrink-0 max-w-sm shadow-2xl lg:backdrop-blur-lg lg:p-8 lg:bg-transparent md:bg-black md:bg-opacity-70 md:p-8 bg-black bg-opacity-60">
          <div className="card lg:m-0 md:m-0 m-5 ps-4 pe-4">
            <h1 className="text-4xl text-center font-bold text-cyan-300 rounded-lg p-1 bg-gradient-to-r from-cyan-600 via-sky-300 to-purple-500 bg-clip-text text-transparent mt-5">SignUp</h1>
            <hr className="opacity-25" />

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-white">Name</span>
                </label>
                <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input bg-transparent border-1 border-cyan-300 lg:text-white md:text-white text-white" />
                {errors.name && <span className="text-red-500 text-sm mt-1 ml-1">Name is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-white">Photo_URL</span>
                </label>
                <input type="text" name="photoURL" {...register("photoURL")} placeholder="enter PhotoURL" className="input bg-transparent border-1 border-cyan-300 lg:text-white md:text-white text-white" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-white">Email</span>
                </label>
                <input type="email" name="email" {...register("email", { required: true })} placeholder="enter email" className="input bg-transparent border-1 border-cyan-300 lg:text-white md:text-white text-white" />
                {errors.email && <span className="text-red-500 text-sm mt-1 ml-1">Email is required</span>}
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-white">Password</span>
                </label>
                <input type={showPassword ? 'text' : 'password'} name="password"
                  {...register("password", { required: true })}
                  placeholder="password" className="input bg-transparent border-1 border-cyan-300 lg:text-white md:text-white text-white w-full pr-10" />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-white hover:text-cyan-300 focus:outline-none absolute right-3 top-12"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && <span className="text-red-500 text-sm mt-1 ml-1">Password is required</span>}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                </label>
              </div>

              <div className="form-control mt-1">
                <input className="btn bg-transparent border-3 border-cyan-300 text-cyan-300 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white hover:border-none" type='submit' value="Sign Up" />
              </div>
            </form>

            <p className='my-4 text-center lg:text-white md:text-white text-white'>Already Have an Account ? : <Link className="font-bold text-[#87c2f8]" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;