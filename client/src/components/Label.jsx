import React from 'react'
import { default as api } from '../store/apiSlice';
import { getLabels } from '../helper/helper';

export default function Labels() {
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
    let Transactions;

    if (isFetching) {
        Transactions = <div>Fetching</div>;
    } else if (isSuccess) {
        Transactions = getLabels(data, 'type').map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>);
    } else if (isError) {
        Transactions = <div>Error</div>
    }

    return (
        <>
            {Transactions}
        </>
    )
}

function LabelComponent({ data }) {
    if (!data) return <></>;
    return (
        <div className="labels flex justify-between items-center bg-secondary p-2 rounded-lg mb-2">
            <div className="flex items-center gap-2">
                <div className='w-3 h-3 rounded-full' style={{ background: data.color ?? '#f9c74f' }}></div>
                <h3 className='text-md text-white'>{data.type ?? ''}</h3>
            </div>
            <h3 className='font-bold text-white'>{Math.round(data.percent) ?? 0}%</h3>
        </div>
    )
}
