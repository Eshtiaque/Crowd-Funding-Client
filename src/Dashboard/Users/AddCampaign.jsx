import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddCampaign = () => {
    const data = useLoaderData();

    const handleAction = (email) => {
        const saveData = {
            status: 'approved',
        };
        fetch(`https://crowdfunding-gamma.vercel.app/individualCampaign/${email}`, {
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
        <div >
            <h1 className='text-center text-4xl font-bold my-5 text-orange-300'>Campaigns Details</h1>
            <div className="card card-side text-white shadow-xl">
                <figure><img className='w-96' src={data.photoURL} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.desc}</p>
                    <p>{data.location}</p>
                    <p>{data.date}</p>
                    <div className="card-actions justify-end">

                        <p><progress className="progress progress-warning bg-white h-6 w-96" value={data.progress} max="100">{data.progress}</progress>
                        </p>
                        <button disabled={data.status === 'approved'} onClick={() => handleAction(data.email)} className="btn bg-[#F99F24]">Approve</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCampaign;