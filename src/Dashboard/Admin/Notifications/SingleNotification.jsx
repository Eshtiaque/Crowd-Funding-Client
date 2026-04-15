import Swal from "sweetalert2";
import useNotification from "../../../hooks/useNotification";

const SingleNotification = ({ item, index }) => {
    const { header, image } = item
    const [notification, refetch] = useNotification()

    const handleApprove = (item) => {
        console.log(item);
        const eventItem = { item }
        Swal.fire({
            title: 'Do you want to approve?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, approve it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // for posting an event  


                fetch(`http://localhost:5000/campaigns`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(eventItem)
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.approved > 0) {
                            refetch()
                            Swal.fire(
                                'Approved!',
                                'Your file has been approved.',
                                'success'
                            )
                        }
                        console.log(data);
                    })

            }
        })
    }
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Do you want to delete this?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/campaignsAdd/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }


    return (
        <div>
            <div className="overflow-x-auto bg-base-300 text-[#130F49] rounded-lg px-4 my-4">
                <table className="table">

                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th className='w-1'>
                                {index + 1}.
                            </th>
                            <td>
                                <div className="">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src={image} alt="UniAid Image" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="w-[600px] md:text-xl">
                                {header}
                            </td>
                            <div className="md:flex gap-3 mt-5  ">
                                <>
                                    <button onClick={() => handleApprove(item)} className="btn btn-ghost btn-s border border-gray-500 hover:border-blue-500 mb-2 md:mb-0">Approve</button>
                                </>
                                <>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-s border border-red-500 hover:border-red-700 mb-2 md:mb-0">Delete</button>
                                </>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SingleNotification;