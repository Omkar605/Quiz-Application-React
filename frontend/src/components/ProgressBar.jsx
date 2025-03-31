const ProgressBar = ({ index, numOfQuestions, points, maxPossiblePoints , answer}) => {
    const progress = ((index + Number(answer !== null)) / numOfQuestions) * 100;
  return (
      <>
       <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
        <p>
            <strong>{index + 1}</strong>/{numOfQuestions}
        </p>
        <p>
            Points: <strong>{points}</strong>/{maxPossiblePoints}
        </p>
      </>
  );
};

export default ProgressBar;
