import { useState } from 'react';

interface ResourceProps {
    name: string;
    folderName: string;
    url: string;
    type: 'url' | 'code' | 'video' | 'image';
    description?: string;
    codeSnippet?: string;
}

function CardResource(props: ResourceProps) {
    const {name, folderName, url, type, description, codeSnippet} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to render preview based on resource type
    const renderResourcePreview = () => {
        switch(type) {
            case 'url':
                return (
                    <div className="border border-gray-200 dark:border-gray-700 rounded flex items-center w-full bg-gray-50 dark:bg-gray-900 overflow-hidden">
                        <div className="overflow-x-auto whitespace-nowrap py-2 px-3 flex-grow text-sm text-blue-500 dark:text-blue-400 no-scroll">
                            {url}
                        </div>
                        {/* Copy URL */}
                        <button
                            className="p-2 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                            title="Copy URL"
                            onClick={() => {
                                navigator.clipboard.writeText(url);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>
                );
            case 'code':
                return (
                    <div className="border border-gray-200 dark:border-gray-700 rounded w-full bg-gray-50 dark:bg-gray-900 overflow-hidden">
                        <div className="p-3 text-sm font-mono text-gray-800 dark:text-gray-300 overflow-x-auto max-h-[100px]">
                            {codeSnippet || "// Code snippet not available"}
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-1 px-3">
                            <span className="text-xs text-gray-500 dark:text-gray-400">Code Resource</span>
                        </div>
                    </div>
                );
            case 'video':
                return (
                    <div className="border border-gray-200 dark:border-gray-700 rounded w-full bg-gray-50 dark:bg-gray-900 overflow-hidden">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-1 px-3">
                            <span className="text-xs text-gray-500 dark:text-gray-400">Video Resource</span>
                        </div>
                    </div>
                );
            case 'image':
                return (
                    <div className="border border-gray-200 dark:border-gray-700 rounded w-full bg-gray-50 dark:bg-gray-900 overflow-hidden">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-1 px-3">
                            <span className="text-xs text-gray-500 dark:text-gray-400">Image Resource</span>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="border border-gray-200 dark:border-gray-700 rounded flex items-center w-full bg-gray-50 dark:bg-gray-900 p-3">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Resource preview not available</span>
                    </div>
                );
        }
    };

    return (
        <>
            {/* Resource Card */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                <div className="flex justify-between items-start mb-2">
                    {/* Title */}
                    <h3 className="text-lg font-semibold truncate max-w-[70%] dark:text-white" title={name}>{name}</h3>
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
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 truncate" title={folderName}>
                    {folderName}
                </div>
                
                {/* Resource Preview */}
                <div className="mb-4 flex">
                    {renderResourcePreview()}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center">
                    {/* Open */}
                    <button 
                        className="font-medium flex gap-1 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                        onClick={() => setIsModalOpen(true)}
                    >
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

            {/* Resource Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold dark:text-white">{name}</h2>
                                <div className="flex items-center space-x-2">
                                    <label className="flex justify-end relative cursor-pointer select-none">
                                        <input type="checkbox" className="absolute opacity-0 cursor-pointer peer" />
                                        <svg
                                            className="relative w-[30px] h-[30px] transition-all duration-300 fill-[#666] dark:fill-[#999] hover:scale-110 peer-checked:fill-[#ffeb49] dark:peer-checked:fill-[#ffeb49]"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            width="24px"
                                            xmlSpace="preserve"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" /></g></g>
                                        </svg>
                                    </label>
                                    <button 
                                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Resource Details */}
                            <div className="mb-4">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    <span className="font-medium">Folder:</span> {folderName}
                                </div>
                                <div className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    <span className="font-medium">Description:</span> {description || "No description available."}
                                </div>
                                
                                {/* Resource Content */}
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900 mb-4">
                                    {type === 'url' && (
                                        <div>
                                            <div className="font-medium mb-2 text-gray-700 dark:text-gray-300">Resource URL</div>
                                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">
                                                {url}
                                            </a>
                                        </div>
                                    )}
                                    
                                    {type === 'code' && (
                                        <div>
                                            <div className="font-medium mb-2 text-gray-700 dark:text-gray-300">Code Snippet</div>
                                            <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono text-sm overflow-x-auto">
                                                {codeSnippet || "// Code snippet not available"}
                                            </pre>
                                        </div>
                                    )}
                                    
                                    {type === 'video' && (
                                        <div>
                                            <div className="font-medium mb-2 text-gray-700 dark:text-gray-300">Video Resource</div>
                                            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded">
                                                {url ? (
                                                    <iframe 
                                                        src={url} 
                                                        className="w-full h-full rounded" 
                                                        allowFullScreen
                                                        title={name}
                                                    ></iframe>
                                                ) : (
                                                    <div className="text-gray-500 dark:text-gray-400">Video preview not available</div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    
                                    {type === 'image' && (
                                        <div>
                                            <div className="font-medium mb-2 text-gray-700 dark:text-gray-300">Image Resource</div>
                                            <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded">
                                                {url ? (
                                                    <img 
                                                        src={url} 
                                                        alt={name} 
                                                        className="max-w-full max-h-[400px] object-contain rounded"
                                                    />
                                                ) : (
                                                    <div className="text-gray-500 dark:text-gray-400 p-8">Image preview not available</div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* Modal Actions */}
                            <div className="flex justify-end space-x-3">
                                <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                        <path d="M16 5l3 3" />
                                    </svg>
                                    Edit
                                </button>
                                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 7l16 0" />
                                        <path d="M10 11l0 6" />
                                        <path d="M14 11l0 6" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg>
                                    Delete
                                </button>
                                <button 
                                    className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CardResource;