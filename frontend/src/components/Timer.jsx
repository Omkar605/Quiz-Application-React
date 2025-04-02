import React from 'react'

const Timer = () => {
  return (
    <div>
      <p>Time Remaining: 00:00</p>
      <progress value="0" max="100"></progress>
      <button>Start</button>
    </div>
  )
}

export default Timer