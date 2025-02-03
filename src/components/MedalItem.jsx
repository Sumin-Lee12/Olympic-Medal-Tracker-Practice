import React from 'react'

export const MedalItem = ({medal, handleDelete}) => {
  return (
    <li>
          <span>{medal.country}</span>
          <span>🥇 {medal.gold}</span>
          <span>🥈 {medal.silver}</span>
          <span>🥉 {medal.bronze}</span>
          <button onClick={() => handleDelete(medal.country)}>삭제</button>
        </li>
  )
}
