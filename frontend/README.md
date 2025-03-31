# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






Steps =========

1. Created JSON-server package to create Fake API
2. Created scripts in Packages.json to run that server to watch where the questions.json file is
3. Fetch the Data from API using useeffect hook
4. Handled states using useReducer hook

# Quiz App

## Overview
This is a React-based quiz application that fetches questions from a backend server and allows users to answer them while tracking their progress and score.

## Features
- Fetches quiz questions from a backend API.
- Displays a start screen before beginning the quiz.
- Users can select answers and track progress with a progress bar.
- Displays points earned based on correct answers.
- Allows users to restart the quiz after finishing.

## Technologies Used
- React.js
- useReducer for state management
- useEffect for fetching data
- CSS for styling

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/quiz-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd quiz-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application
Start the development server:
```sh
npm start
```
Ensure that the backend server is running at `http://localhost:5000/questions`.

## Project Structure
```
quiz-app/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   ├── StartScreen.jsx
│   │   ├── Questions.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── NextButton.jsx
│   │   ├── FinishScreen.jsx
│   ├── App.js
│   ├── App.css
│── public/
│── package.json
│── README.md
```

## API Endpoint
Ensure the backend provides data in the following format:
```json
[
  {
    "question": "What is 2 + 2?",
    "options": ["3", "4", "5", "6"],
    "correctAnswerIndex": 1,
    "points": 10
  }
]
```

## Future Enhancements
- Add a timer for each question.
- Implement user authentication.
- Enhance UI with animations.

## License
This project is licensed under the MIT License.



