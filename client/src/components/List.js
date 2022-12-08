import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {default as api} from '../store/apiSlice'
import 'boxicons'






export default function List() {
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
    // console.log(isSuccess)
    const [deleteTransaction] = api.useDeleteTransactionMutation()

    console.log(data)
    // console.log(isError)
    let Transactions

    const handleClick = (e) => {
        deleteTransaction({_id:e.target.dataset.id})    
        }
    if (isFetching) {
        Transactions = <div>Fetcing</div>
        
    } else if (isSuccess) {
        Transactions =  data.map((v,i) => <Transaction key={i} handler={handleClick} category={v }></Transaction>)
    } else if (isError) {
        Transactions = <div>Error</div>

    }






  return (
      <div className='flex flex-col py-6 gap-3'>
          
          <h1 className='py-4 font-bold text-xl text-gray-200'>History</h1>
            
          {Transactions}
          
          
      </div>
  )
}

function Transaction({ category, handler }) {
    if (!category) return null;
    return (
       
        <div className="item flex justify-center text-white bg-gray-700 py-3 rounded-r" style={{borderRight: `8px solid ${category.color?? "e5e5e5"}`}}>
            <button className='px-3 text-gray-300' onClick={handler}><box-icon  name="trash" data-id={category._id??""} color={category.color} size="15px"></box-icon></button>
            
            
            <span className="block w-full">
                {category.name??""}
            </span>
            {/* console.log(category) */}
        </div> 
    )

}
