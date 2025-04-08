interface ResourceProps {
    name: string;
    folderName: string;
    url: string;
}

function CardResource(props: ResourceProps) {
    const {name, folderName, url} = props;

    return (
        <>
                {/* Resource Card */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                    <div className="flex justify-between items-start mb-2">
                        {/* Tittle */}
                        <h3 className="text-lg font-semibold truncate max-w-[70%] dark:text-white" title="React Documentation">{name}</h3>
                        {/* Label favorites */}
                        <label className="flex justify-end relative cursor-pointer select-none">
                            <input type="checkbox" className="absolute opacity-0 cursor-pointer peer" />
                            <svg
                                className="relative w-[30px] h-[30px] transition-all duration-300 fill-[#666] dark:fill-[#999] hover:scale-110 peer-checked:fill-[#ffeb49] dark:peer-checked:fill-[#ffeb49]"
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

                    {/* Folder */}
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 truncate" title="Frontend Resources">
                        {folderName}
                    </div>
                    {/* URL */}
                    <div className="mb-4 flex">
                        <div className="border border-gray-200 dark:border-gray-700 rounded flex items-center w-full bg-gray-50 dark:bg-gray-900 overflow-hidden">
                            <div className="overflow-x-auto whitespace-nowrap py-2 px-3 flex-grow text-sm text-blue-500 dark:text-blue-400 no-scroll">
                                {url}
                            </div>
                            {/* Copy URL */}
                            <button
                                className="p-2 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                                title="Copy URL"
                                onClick={() => {
                                    navigator.clipboard.writeText("https://reactjs.org/docs/getting-started.html");
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center">
                        {/* Open */}
                        <button className="font-medium flex gap-1 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                            <span>
                                Open
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-share-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" /></svg>
                        </button>
                        <div className="flex space-x-2">
                            {/* Edit */}
                            <button className="text-base hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                            </button>
                            {/* Delete */}
                            <button className="text-base hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default CardResource;