import React from 'react'
import 'boxicons';
import { default as api } from '../store/apiSlice.jsx';

export default function List() {
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
    const [deleteTransaction] = api.useDeleteTransactionMutation()
    let Transactions;

    const handlerClick = (e) => {
        if (!e.target.dataset.id) return 0;
        deleteTransaction({ _id: e.target.dataset.id })
    }

    if (isFetching) {
        Transactions = <div>Fetching</div>;
    } else if (isSuccess) {
        Transactions = data.slice().reverse().map((v, i) => <Transaction key={i} category={v} handler={handlerClick}></Transaction>);
    } else if (isError) {
        Transactions = <div>Error</div>
    }

    return (
        <div className="flex flex-col py-6 gap-3 bg-secondary rounded-lg p-4 mt-3">
            <h1 className='py-4 font-bold text-xl text-accent'>Transaction History</h1>
            {Transactions}
        </div>
    )
}

function Transaction({ category, handler }) {
    if (!category) return null;
    return (
        <div className="item flex justify-between items-center bg-gray-800 py-2 px-3 rounded shadow" style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}>
            <button className='px-3' onClick={handler}>
                <box-icon data-id={category._id ?? ''} color={category.color ?? "#e5e5e5"} size="15px" name="trash"></box-icon>
            </button>
            <span className='block w-full text-white'>{category.name ?? ''}</span>
            <span className='block w-full text-right pr-3 text-white'>${category.amount ?? ''}</span>
        </div>
    )
}
