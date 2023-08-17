import ProgressBar from "./ProgressBar";

export default function TableItem ({ tableName, totalRecord, newData, deltaData, progressCapt }) {
    return (
        <div className="grid grid-cols-6 text-center py-6 border-b-2 border-worker">
            <div className='flex justify-center items-center text-base'>{tableName}</div>
            <div className='flex justify-center items-center text-base'>{totalRecord}</div>
            <div className='flex justify-center items-center text-base'>{newData}</div>
            <div className='flex justify-center items-center text-base'>{deltaData}</div>

            <div className='m-container col-span-2 w-full'>
                <ProgressBar progress={parseFloat(progressCapt)}/>
            </div>
        </div>
    )
}