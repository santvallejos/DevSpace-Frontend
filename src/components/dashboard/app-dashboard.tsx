import CardResource from "../ui/card-resource";

function AppDashboard(){
    return(
        <>
        <div className="pl-4 pr-4 w-full flex flex-col flex-grow">
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
        </div>

        <div className="pl-4 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <CardResource/>
        <CardResource/>
        <CardResource/>
        <CardResource/>
        <CardResource/>
        <CardResource/>
        </div>
        </>
    )
}

export default AppDashboard;