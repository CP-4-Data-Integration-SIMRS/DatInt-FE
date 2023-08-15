"use client"
import TableItem from '@/components/tableItem';
import { Search } from "react-feather";
import { useState } from 'react';
import Layout from '@/components/layout';

export default function Monitoring() {
    const [data, setData] = useState([
        {
            table : 'data_patient',
            totalRecord : '10.000',
            progress : '66 %',
            newData : '4000',
            deltaData : '4000',
            progressCapt : '90%',
        },
        {
            table : 'data_bjorka',
            totalRecord : '120.000++',
            progress : '99 %',
            newData : '4000',
            deltaData : '4000',
            progressCapt : '70%',
        },
        {
            table : 'data_patient',
            totalRecord : '10.000',
            progress : '66 %',
            newData : '4000',
            deltaData : '4000',
            progressCapt : '50%',
        },
    ]);

    const [open, setOpen] = useState(false);

    return (
        <Layout>
            <div className='bg-[#fff] rounded-md p-6 h-screen m-container'>
                <div className=" m-container ">
                    <div className="flex justify-between">
                        <p className="text-3xl font-bold">FHIR  Adapter.</p>
                        <div className="flex">
                            <p className="font-bold text-4xl">CDC</p>
                            <p className="font-bold text-4xl text-title">Monitoring</p>
                        </div>
                        {/* <p>Worker A</p> */}
                        <div className="flex justify-around items-center w-48 h-11 border-2 rounded-9 border-worker hover:bg-slate-100">
                            <p className="font-bold text-worker">Worker A</p>
                            
                        </div>
                    </div>

                    {/* <div className=''>
                        <div className="flex justify-around items-center w-290 h-59 border-4 rounded-9 border-worker hover:bg-slate-100" 
                        onClick={() =>{setOpen(!open)}}
                        >
                            <p className="font-bold">CDC Monitoring</p>
                            
                        </div>
                    </div> */}
                    
                    <div className='flex justify-end'>
                        <div className='flex items-center border-2 rounded-200 border-worker w-425 h-68 my-9'>
                            <div className='px-6'>
                            <Search />
                            </div>
                            <p className="text-search font-bold text-2xl">Search Button</p>
                        </div>
                    </div>
                </div>

                <div className='m-container '>
                    <div className="w-1178 border-2 border-b-0 rounded-7 border-worker">
                        {/* Headers  */}
                        <div className="grid grid-cols-7 text-center py-6 border-b-2 border-worker">
                            <div className='font-bold text-lg text-columnHead'>Table</div>
                            <div className='font-bold text-lg text-columnHead'>Total Record</div>
                            <div className='font-bold text-lg text-columnHead'>Progress</div>

                            <div className='font-bold text-lg text-columnHead'>newData</div>
                            <div className='font-bold text-lg text-columnHead'>deltaData</div>

                            <div className='font-bold text-lg text-columnHead col-span-2'>Progress Capturing</div>
                        </div>
                        {/* Component Data per table */}
                        {data.map((data, index) => {
                            return (
                                <TableItem key={index}
                                {...data}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>

    )
}