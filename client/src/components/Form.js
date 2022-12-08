import React from 'react'
import {useForm} from 'react-hook-form'
import List from './List';
import { default as api } from '../store/apiSlice';

function Form() {

    const {register, handleSubmit, resetField } = useForm();
    const [addTransaction] = api.useAddTransactionMutation()
    const onSubmit = async (data) => {
        if (!data) return {};
        await addTransaction(data).unwrap();
        resetField('name');
        resetField('amount')
    }

    return (
      <div className='form max-w-sm mx-auto w-80'>
          <h1 className='font-bold pb-4 text-xl text-gray-200'>
              Transaction
              
          </h1>

          <form id='form' action=""  onSubmit={handleSubmit(onSubmit)} className='w-[full]' >
              <div className="grid gap-4 ">
                  <div className="input-group">
                      <input type="text" {...register('name')} name="name" placeholder='Salary, House Rent' className="salary w-full bg-black text-white " />
                  </div>

                  <select className='form-input'  {...register('type')}>
                      
                      <option value='Investment'>Investment</option>
                      <option value='Savings'>Saving</option>
                      <option value="Expense">Expense</option>
                  </select>
                  

                  <div className="input-group">
                      <input type="number"{...register('amount')} name="amount" placeholder='Amount' className="salary w-full bg-black text-white  " />
                  </div>

                  <div className="submit-btn">
                      <button className='border py-2 text-white bg-indigo-400 w-10/12 mx-auto'>Make Transaction</button>
                  </div>
              </div>
          </form>
          
            <List></List>

    </div>
  )
}

export default Form