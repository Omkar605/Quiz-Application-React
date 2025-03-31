import React from 'react'

const Options = ({question, answer, dispatch}) => {
    const hasAnswered = answer !== null;
    return (
        <div className="options">
        {question.options.map ((option, index) => (
          <button
            key={option}
            className = {`quiz-button ${answer === index ? 'selected' : ''}
            ${hasAnswered ? index === question.correctAnswerIndex ? 'correct' : 'wrong': ''}
            `}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
  )
}

export default Options