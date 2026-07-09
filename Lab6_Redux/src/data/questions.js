// src/data/questions.js

export const questionsData = [
  {
    id: 1,
    question: "Inside which HTML element do we put JavaScript?",
    options: [
      "<javascript>",
      "<script>",
      "<js>",
      "<scripting>"
    ],
    correctAnswer: "<script>"
  },
  {
    id: 2,
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script name='xxx.js'>",
      "<script href='xxx.js'>",
      "<script src='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    correctAnswer: "<script src='xxx.js'>"
  },
  {
    id: 3,
    question: "Which hook is used to perform side effects in React functional components?",
    options: [
      "useState",
      "useContext",
      "useEffect",
      "useReducer"
    ],
    correctAnswer: "useEffect"
  },
  {
    id: 4,
    question: "What does Redux Toolkit's configureStore do?",
    options: [
      "It creates a local storage slice.",
      "It automatically sets up the store with standard middleware like redux-thunk and DevTools integration.",
      "It configures a React Component routing store.",
      "It styles the Redux UI components."
    ],
    correctAnswer: "It automatically sets up the store with standard middleware like redux-thunk and DevTools integration."
  },
  {
    id: 5,
    question: "Which of the following is NOT a rule of React Hooks?",
    options: [
      "Only call Hooks at the top level.",
      "Only call Hooks from React functions.",
      "Hooks can be called inside loops or conditions.",
      "Hooks must be called in Functional Components or custom Hooks."
    ],
    correctAnswer: "Hooks can be called inside loops or conditions."
  },
  {
    id: 6,
    question: "In Redux Toolkit, what does createSlice() return?",
    options: [
      "An object containing the generated reducer function and action creators.",
      "Only the reducer function.",
      "Only the action creators.",
      "A React context provider."
    ],
    correctAnswer: "An object containing the generated reducer function and action creators."
  }
];
