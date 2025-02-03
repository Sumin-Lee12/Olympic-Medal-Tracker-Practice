import React from 'react'
import { MedalItem } from './MedalItem'

const MedalList = ({medals, handleDelete}) => {
  return (
    <ul className='medal-list'>
    {medals.map((medal) => <MedalItem key={medal.country} medal={medal} handleDelete={handleDelete}/>)}
  </ul>
  )
}

export default MedalList