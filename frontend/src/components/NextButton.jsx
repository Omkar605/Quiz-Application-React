import React from 'react'

const NextButton = ({dispatch, answer, index, numOfQuestions}) => {
  return (
    <div>
         {
            index === numOfQuestions - 1 ?
            <button
            onClick={() => dispatch ({type: 'finish'})}
            disabled={answer === null}
            className='btn'
            >
            Finish
          </button>
          :     
         <button
            onClick={() => dispatch ({type: 'next'})}
            disabled={answer === null}
            className='btn'
            >
            Next
          </button>
         }
    </div>
  )
}

export default NextButton