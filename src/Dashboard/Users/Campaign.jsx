import { AuthContext } from '../../Providers/AuthProvider';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
// import { FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MainButton from '../../Components/SharedComponents/MainButton';


const Campaign = () => {
    // const [campaigns] = useState(useLoaderData());
    const { user } = useContext(AuthContext)
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(loading);



    useEffect(() => {
        setLoading(true)
        fetch(`https://crowdfunding-gamma.vercel.app/individualCampaign/${user?.email}`)
            .then(result => result.json())
            .then(data => {
                setCampaigns(data)
                setLoading(false)
            })
    }, [user])


    console.log(campaigns);


    return (
        <div className='text-black px-10 w-full h-full mt-28 min-h-[80vh]'>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mt-5">
                <h1 className="md:text-4xl text-4xl font-black text-[#130F49]">
                    My Campaigns ({campaigns.length})
                    <hr className="border-slate-400 border-b-[3px] lg:w-[350px] mx-auto mt-3" />
                </h1>

                <div className="flex flex-row">
                    {/* <FaBriefcase></FaBriefcase> */}
                    <Link to="/dashboard/userAddCampaign"><MainButton text="Add Campaign"> </MainButton></Link>
                </div>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mx-6 mt-12'>
                {
                    campaigns?.map(campaign => <div className="card w-72  bg-gray-300" key={campaign._id}>
                        <figure><img className='h-48 w-full' src={campaign.img} alt="" /></figure>
                        <div className="card p-4 gap-2">
                            <h2 className="card-title text-black font-bold text-2xl">{campaign.itemHeader}</h2>
                            <p className='text-sm'>Location: {campaign.location}</p>
                            <p className='text-sm'>Date: {campaign.date}</p>
                            <progress className="progress progress-primary bg-white w-56 h-3" value={campaign.progress} max="100" label="Completed"></progress>
                            <p>Progress: <span className='font-bold'>{campaign.progress}%</span> Completed!</p>
                            <div className="card-actions justify-end mt-2">
                                <Link to={`/dashboard/userAllCampaign/${campaign?._id}`} >
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

export default Campaign;