import React from 'react'

const FinishScreen = ({points, maxPossiblePoints, dispatch}) => {
  
  return (
    <div>
       <p className='quiz-score'> You Scored <strong> {points} </strong>out of {maxPossiblePoints} </p>
        <button onClick={() => dispatch({ type: 'restart' })} className='btn'>Start Again</button>
    </div>
  )
}

export default FinishScreen