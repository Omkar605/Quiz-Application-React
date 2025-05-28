import {useEffect, useReducer} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import StartScreen from './components/StartScreen.jsx';
import Questions from './components/Questions.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import NextButton from './components/NextButton.jsx';
import FinishScreen from './components/FinishScreen.jsx';
import Footer from './components/Footer.jsx';
import Timer from './components/Timer.jsx';
const SECS_PER_QUESTION = 30;
const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: 0,
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
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
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
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
      };
    default:
      throw new Error ('Unexpected action');
  }
};
function App () {
  const [{questions, status, index, answer, points, secondsRemaining}, dispatch] = useReducer (
    reducer,
    initialState
  );
  const numOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce ((acc, question) => acc + question.points, 0);
  useEffect (() => {
    const API_URL = import.meta.env.VITE_API_URL;
    fetch (`${API_URL}/questions`)
      .then (response => response.json ())
      .then (data => dispatch ({type: 'dataRecieved', payload: data}))
      .catch (() => {
        console.error ('Error fetching data');
        dispatch ({type: 'dataFailed'})
      });
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
          <Footer>
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
            <NextButton dispatch={dispatch} answer = {answer} index={index} numOfQuestions={numOfQuestions}/>
          </Footer>
        </>
        }
        {status === 'finished' &&
          <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} dispatch={dispatch} />}
      </Main>

    </div>
  );
}

export default App;
