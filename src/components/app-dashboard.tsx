function AppDashboard(){
    return(
        <>
        <div className="p-6 w-full h-full flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Resource Dashboard</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
              <span className="mr-1 text-lg">+</span> Add Resource
            </button>
          </div>
          
          <div className="flex border-b mb-6 overflow-x-auto w-full">
            <button className="px-4 py-2 text-sm border-b-2 border-blue-500 font-medium whitespace-nowrap">Recent Resources</button>
            <button className="px-4 py-2 text-sm text-gray-500 whitespace-nowrap">Recommended</button>
            <button className="px-4 py-2 text-sm text-gray-500 whitespace-nowrap">Favorites</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Resource Card */}
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">React Documentation</h3>
                <label className="flex justify-end relative cursor-pointer select-none">
                  <input type="checkbox" className="absolute opacity-0 cursor-pointer peer" />
                  <svg 
                    className="relative w-[30px] h-[30px] transition-all duration-300 fill-[#666] hover:scale-110 peer-checked:fill-[#ffeb49]" 
                    height="24px" 
                    id="Layer_1" 
                    version="1.2" 
                    viewBox="0 0 24 24" 
                    width="24px" 
                    xmlSpace="preserve" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" /></g></g>
                  </svg>
                </label>
              </div>
              <div className="text-sm text-gray-500 mb-2">Frontend Resources</div>
              <div className="text-sm text-blue-500 mb-4 break-all">https://reactjs.org/docs/getting-started.html</div>
              <div className="flex justify-between items-center">
                <button className="font-medium">Open</button>
                <div className="flex space-x-2">
                  <button className="text-base">📝</button>
                  <button className="text-base text-red-500">🗑️</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default AppDashboard;