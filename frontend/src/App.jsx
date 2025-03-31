import {useEffect, useReducer} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import StartScreen from './components/StartScreen.jsx';
import Questions from './components/Questions.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import NextButton from './components/NextButton.jsx';
import FinishScreen from './components/FinishScreen.jsx';
const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'dataRecieved':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'failed',
      };
    case 'start':
      return {
        ...state,
        status: 'Active',
      };
    case 'newAnswer': {
        const currentQuestion = state.questions[state.index];
        return {
          ...state,
          answer: action.payload,
          points: currentQuestion.correctAnswerIndex === action.payload
            ? state.points + currentQuestion.points
            : state.points,
        };
      }
    case 'next':
      return {
        ...state,
        index: state.index + 1,
        answer: null
      }
    case 'finish':
      return {
        ...state,
        status: 'finished',
      };
    case 'restart':
      return {
        ...initialState,
        status: 'ready',
        questions: state.questions
      };
    default:
      throw new Error ('Unexpected action');
  }
};
function App () {
  const [{questions, status, index, answer, points}, dispatch] = useReducer (
    reducer,
    initialState
  );
  const numOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce ((acc, question) => acc + question.points, 0);
  useEffect (() => {
    fetch ('http://localhost:5000/questions')
      .then (response => response.json ())
      .then (data => dispatch ({type: 'dataRecieved', payload: data}))
      .catch (() => dispatch ({type: 'dataFailed'}));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main numOfQuestions={numOfQuestions}>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Failed to load data</p>}
        {status === 'ready' &&
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />}
        {status === 'Active' &&
         <>
          {/* <ProgressBar progress={(index / numOfQuestions * 100) } /> */}
          <ProgressBar index = {index} numOfQuestions = {numOfQuestions} answer = {answer} maxPossiblePoints = {maxPossiblePoints} points={points}/>
          <Questions
            numOfQuestions={numOfQuestions}
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <NextButton dispatch={dispatch} answer = {answer} index={index} numOfQuestions={numOfQuestions}/>
        </>
        }
        {status === 'finished' &&
          <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} dispatch={dispatch} />}
      </Main>

    </div>
  );
}

export default App;
