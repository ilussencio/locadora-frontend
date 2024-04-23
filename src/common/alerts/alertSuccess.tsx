

export default function AlertSuccess({ message, title }: { message: string, title?: string }) {

    return <div className="alert grid grid-cols-10 items-center bg-green-200  px-4 py-3 absolute z-50 top-0 right-0 rounded-sm w-full border-b-4 border-green-500" role="alert">
        <div className="flex col-span-8 ">
            <svg  viewBox="0 0 1024 1024" className="fill-current w-8 h-8 mr-4"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#4CAF50" /><path d="M738.133333 311.466667L448 601.6l-119.466667-119.466667-59.733333 59.733334 179.2 179.2 349.866667-349.866667z" fill="#CCFF90" /></svg>
            <div>
                <p className="text-black text-sm font-bold">{title}</p>
                <p className="text-black text-sm ">{message}</p>
            </div>
           
        </div>
    </div>
}