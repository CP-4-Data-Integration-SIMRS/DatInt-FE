import ProgressBar from "./ProgressBar";

export default function TableItem ({ table, totalRecord, progress, newData, deltaData, progressCapt }) {
    return (
        <div className="grid grid-cols-7 text-center py-6 border-b-2 border-worker">
            <div className='flex justify-center items-center text-base'>{table}</div>
            <div className='flex justify-center items-center text-base'>{totalRecord}</div>
            <div className='flex justify-center items-center text-base'>{progress}</div>

            <div className='flex justify-center items-center text-base'>{newData}</div>
            <div className='flex justify-center items-center text-base'>{deltaData}</div>

            <div className='m-container col-span-2 w-full'>
                <ProgressBar progress={parseFloat(progressCapt)}/>
            </div>
        </div>
    )
}