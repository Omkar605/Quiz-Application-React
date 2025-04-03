import React, { useEffect } from 'react'

const Timer = ({dispatch, secondsRemaining}) => {
  const mins = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: 'tick' })
      if (secondsRemaining <= 0) {
        clearInterval(timer)
        dispatch({ type: 'finish' })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [dispatch, secondsRemaining]);
  return (
    <div>
      <p>Time Remaining: {mins < 10 && "0"}{mins}:{sec < 10 && "0"}{sec}</p>
    </div>
  )
}

export default Timer