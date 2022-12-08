import React from 'react'
import './app.css'
import Form from './components/Form'
import Graph from './components/Graph'

function App() {
  return (
    <div className='App'>
      <div className="container w-full mx-auto max-w-6xl text-center drop-shadow-lg text-gray-700">
        
      <h1 className='text-4xl py-8 mb-10 text-gray-400 rounded-md'>Expense Tracker</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <Graph />
          <Form />
      </div>
      
      </div>
      
    </div>
  )
}

export default App