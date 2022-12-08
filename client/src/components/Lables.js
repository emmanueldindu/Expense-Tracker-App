import React from 'react'
import {default as api} from '../store/apiSlice'
import { getLabels } from '../helper/helper'



// const obj = [
//     {
//         type: "Savings",
//         color: "rgb(9, 187, 187)",
//         percent:25
//     },
//     {
//         type: "Investment",
//         color: "#f9c74f",
//         percent:20
//     },
//     {
//         type: "Expenses",
//         color: "rgb(136, 9, 187)",
//         percent:45
//     },
// ]

export default function Lables() {

    // console.log(api.useGetCategoriesQuery())

    const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery()
    let Transactions

    
    // console.log(data)
    if (isFetching) {
        Transactions = <div>Fetcing</div>
        
    } else if (isSuccess) {
    //    console.log( getLabels(data, 'type'))
        Transactions =  getLabels(data, 'type').map((v, i)=><LabelComponent key={i} data={v}></LabelComponent>)
    } else if (isError) {
        Transactions = <div>Error</div>

    }
    // console.log(Transactions)
    return ( 
        <>
            {Transactions}
            
        </>
    )
}
function LabelComponent({ data }) {
    if(!data)return <></>
  return (
      <div className='labels flex justify-between'>
          <div className="flex gap-2">
              <div className="w-2 h-2 rounded py-3" style={{ background: data.color??'#f9c74f' }}>
              </div> 
              <h3 className='font-semibold text-gray-300'>{data.type??""}</h3>
          </div>   
          <h3 className='font-bold text-gray-300'>{Math.round(data.percent)?? 0 }%</h3>
       
      </div>
  )
}


