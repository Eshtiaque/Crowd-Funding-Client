import BarChartDashboard from "../Chart/BarChartDashboard";
import PiChartDashboard from "../Chart/PiChartDashboard";
import AreaDashboard from "../Chart/AreaDashboard";

const Admin = () => {
  const data = [
    { month: "January", expenditure: 1500, earning: 2000 },
    { month: "February", expenditure: 1200, earning: 1800 },
    { month: "March", expenditure: 1800, earning: 2200 },
    { month: "April", expenditure: 1000, earning: 1600 },
    { month: "May", expenditure: 1300, earning: 1900 },
    { month: "June", expenditure: 1700, earning: 2100 },
    { month: "July", expenditure: 2000, earning: 2400 },
    { month: "August", expenditure: 1500, earning: 1900 },
    { month: "September", expenditure: 1600, earning: 2000 },
    { month: "October", expenditure: 1400, earning: 1800 },
    { month: "November", expenditure: 1900, earning: 2300 },
    { month: "December", expenditure: 2200, earning: 2500 },
  ];

  return (
    <div className="w-full min-h-screen lg:mt-12 md:mt-20 mt-16 items-center justify-center text-[#130F49] py-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 gap-x-5 mt-8 gap-y-5">
        <div className="bg-[#D3F4EC] text-2xl font-semibold py-5 rounded-bl-full flex flex-col gap-8 p-4">
          <div className="flex mx-1 items-center justify-between">
            <h1 className="text-2xl font-black text-[#130F49]">Revenue</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"

              />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-[#130F49]"><span>$</span>628</h1>
        </div>
        <div className="bg-[#FEF4EA] text-2xl font-semibold py-5 rounded-bl-full  flex flex-col gap-8 p-4">
          <div className="flex mx-1 items-center justify-between">
            <h1 className="text-2xl font-black text-[#130F49]">Donation</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-[#130F49]"><span className="te">$</span>1437000</h1>
        </div>
        <div className="bg-[#E3F9E0] text-2xl font-semibold py-5 rounded-bl-full flex flex-col gap-8 p-4">
          <div className="flex mx-1 items-center justify-between">
            <h1 className="text-2xl font-black text-[#130F49]">Projects</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 "            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-[#130F49]"><span></span>35 +</h1>
        </div>
        <div className="bg-purple-200 text-2xl font-semibold py-5 rounded-bl-full flex flex-col gap-8 p-4">
          <div className="flex mx-1 items-center justify-between">
            <h1 className="text-2xl font-black text-[#130F49]">Campaigns</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 "            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-[#130F49]"><span></span>200 +</h1>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 w-full grid-cols-1 xl:grid-rows-2 grid-rows-1 grid-flow-row gap-3 mt-2 ">
        {/* <!-- First Container --> */}
        <div className="rounded bg-[#FEF4EA] text-[#130F49] pr-5 pb-12 pt-0 pl-1 md:col-span-2 w-full h-[35vh] shadow-lg col-span-1 row-span-1">
          <p className="text-2xl font-black text-[#130F49] mb-2 mt-2 ml-5  text-center">Donations</p>
          <BarChartDashboard data={data} />
        </div>

        {/* <!-- Second Container --> */}
        <div className="rounded col-span-1 rounded-bl-full rounded-tl-full h-[70vh] md:row-span-2 row-span-1">
          <div className="h-full w-full ">
            <PiChartDashboard data={data} />
          </div>
        </div>

        {/* <!-- Third Container --> */}
        <div className="md:col-span-2  pb-14 px-5 shadow-lg col-span-1 h-[33vh] rounded bg-[#D3F4EC] row-span-1">
          <p className="text-2xl font-black text-[#130F49] mb-2 mt-2 ml-5 ">Revenue</p>
          <AreaDashboard data={data} />
        </div>
      </div>

    </div>
  );
};

export default Admin;