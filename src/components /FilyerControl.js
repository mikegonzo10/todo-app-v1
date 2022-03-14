import React from 'react'

export default function FilyerControl({filterStatus, setFilterStatus}) {

  const handleStatus = (status) => {
    // console.log(status)
    setFilterStatus(status)
  }
   
  return (
<div className='item_statuses'>
    <span onClick={ () => handleStatus('all')}> 
        All 
    </span>
    <span  onClick={ () => handleStatus('active')}>
        Active
    </span> 
    <span onClick={ () => handleStatus('completed')}>
        Completed   
    </span>
</div>
  )
}
