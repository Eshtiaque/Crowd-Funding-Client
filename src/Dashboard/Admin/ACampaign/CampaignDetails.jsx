import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const CampaignDetails = () => {
    const data = useLoaderData();

    const handleAction = (id) => {
        const saveData = {
            status: 'approved',
        };
        fetch(`https://crowdfunding-gamma.vercel.app/individualCampaign/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('set-token-for-user')}`
            },
            body: JSON.stringify(saveData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Data Updated');
                }
            })
            .catch(error => {
                toast.error(error.message);
                toast.error(error);
            });
    };


    return (
        <div className='px-4 md:px-10 w-full h-full mt-28 md:mt-36 mb-8 text-black'>
            <h1 className='mt-4 text-center text-xl md:text-2xl lg:text-4xl font-black text-[#130F49] bg-[#d3d6d5] py-2 md:py-1 rounded-xl'>Campaigns Details</h1>

            <div className="card md:card-side mx-auto w-11/12 shadow-xl bg-base-300 mt-8">
                <figure><img className='md:w-96 w-10/12 mx-auto lg:ml-4' src={data.img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.itemHeader}</h2>
                    <p>{data.desc}</p>
                    <p>{data.location}</p>
                    <p>{data.date}</p>
                    <div className="card-actions justify-end">

                        <p><progress className="progress progress-primary bg-white h-3 md:h-4 w-10/12 md:w-96" value={data.progress} max="100">{data.progress}</progress>
                        </p>
                        <button disabled={data.status === 'approved'} onClick={() => handleAction(data._id)} className="py-2 px-4 border rounded-lg bg-[#98c292] font-semibold disabled:bg-white disabled:text-gray-400 hover:bg-[#74df66]">Approve</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;