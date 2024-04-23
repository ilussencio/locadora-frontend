

// eslint-disable-next-line @typescript-eslint/ban-types
export default function AlertSuccess({ message, title }: { message: string, title: string}) {

    return <div className="alert grid grid-cols-10 items-center bg-red-200 px-4 py-3 absolute z-50 top-0 right-0 rounded-sm w-full border-b-4 border-red-500" role="alert">
        <div className="flex col-span-8 ">
        <svg version="1.1" className=" w-8 h-8 mr-4" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 50 50" xmlSpace="preserve">
                <circle style={{ fill: '#D75A4A' }} cx="25" cy="25" r="25" />
                <polyline style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 2, strokeLinecap: 'round', strokeMiterlimit: 10 }} points="16,34 25,25 34,16" />
                <polyline style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 2, strokeLinecap: 'round', strokeMiterlimit: 10 }} points="16,16 25,25 34,34" />
            </svg>
            <div>
                <p className="text-black text-sm font-bold">{title}</p>
                <p className="text-black text-sm ">{message}</p>
            </div>
           
        </div>
    </div>
}