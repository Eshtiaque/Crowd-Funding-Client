import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import MainButton from '../../Components/SharedComponents/MainButton';
import { useContext, useEffect, useState } from 'react';


const Event = () => {
    // const [events] = useState(useLoaderData());
    const { user } = useContext(AuthContext)
    const [events, setevents] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(loading);



    useEffect(() => {
        setLoading(true)
        fetch(`https://crowdfunding-gamma.vercel.app/individualEvent/${user?.email}`)
            .then(result => result.json())
            .then(data => {
                setevents(data)
                setLoading(false)
            })
    }, [user])


    console.log(events);


    return (
        <div className='text-black px-10 w-full h-full mt-28 min-h-[80vh]'>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mt-5">
                <h1 className="md:text-4xl text-4xl font-black text-[#130F49]">
                    My events ({events.length})
                    <hr className="border-slate-400 border-b-[3px] w-[240px] mx-auto mt-3" />
                </h1>

                <div className="flex flex-row">
                    {/* <FaBriefcase></FaBriefcase> */}
                    <Link to="/dashboard/userAddEvent"><MainButton text="Add event"> </MainButton></Link>
                </div>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mx-6 mt-12'>
                {
                    events?.map(event => <div className="card w-72 bg-gray-300" key={event._id}>
                        <figure><img className='h-44 w-full' src={event.image} alt="" /></figure>
                        <div className="card p-4 gap-2 ">
                            <h2 className="card-title text-black text-2xl font-bold">{event.title}</h2>
                            <p className='text-sm'>Publisher Name: {event.publisher_name}</p>
                            <p className='text-sm'>Date: {event.publish_date}</p>
                            <p>Status: {event.status}</p>
                            <div className="card-actions justify-end mt-2">
                                <Link to={`/dashboard/userAllEvent/${event?._id}`} >
                                    <MainButton text="Details!" > </MainButton>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Event;