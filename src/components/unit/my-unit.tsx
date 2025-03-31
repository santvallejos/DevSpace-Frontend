function MyUnit() {
  return (
    <div className="p-6 w-full h-full flex flex-col flex-grow">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">My unit</h1>
    </div>

    {/* Carpeta de ejempolo */}
    <div className="p-4 w-80 border rounded-md hover:bg-accent cursor-pointer">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-folder">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
            </svg>
            <span>Carpeta de Ejemplo</span>
          </div>
    </div>
  </div>
  )
}

export default MyUnit