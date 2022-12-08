import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {
    Chart,
    ArcElement
} from 'chart.js'
import Lables from './Lables'
import {
    chart_Data,
    getTotal
} from '../helper/helper'
import {default as api} from '../store/apiSlice'

Chart.register(ArcElement)
// const data = {
   
  
// };
  


function Graph() {
    // chart_Data()

    const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery()
    let graphData

    
    // console.log(data)
    if (isFetching) {
        graphData = <div>Fetcing</div>
        
    } else if (isSuccess) {
    
        graphData = <Doughnut {...chart_Data(data)}></Doughnut>

    //    console.log( getLabels(data, 'type'))
        // graphData =  getLabels(data, 'type').map((v, i)=><LabelComponent key={i} data={v}></LabelComponent>)
    } else if (isError) {
        graphData = <div>Error</div>

    }
   

  return (
      <div className='flex justify-content max-w-xs mx-auto'>
          <div className="item">
              <div className="chart relative">
                  {graphData}
                  <h3 className='mb-4 font-bold title text-gray-300 '>
                      Total
                      <span className="block text-3xl text-green-500">${  getTotal(data) ?? 0 }</span>
                  </h3>
                  
              </div>
              <div className="flex flex-col py-10 gap-4">
                  <Lables />
              </div>
          </div>
      </div>
  )
}

export default Graph