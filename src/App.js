import SignInPage from "./components/SignInPage";
import Router from "./Routes";

const App = () =>{
  return(
    <Router />
  )
}
export default App;






















// // import "./App.css";
// // import React, { useState, useEffect } from "react";

// // function App() {
// //   const [inputAnswer, setInputAnswer] = useState([]);
// //   const [inputQuestion, setInputQuestion] = useState([]);
// //   const [inputValue, setInputValue] = useState("");

// //   const arrObj = [
// //     {
// //       question: "What is your name?",
// //       answer: "My name is Bob! I am here to help you.👋",
// //     },
// //     {
// //       question: "How old are you?",
// //       answer: "I am an Ai Model and i developed in 2013.🌍",
// //     },
// //     {
// //       question: "Where are you from?",
// //       answer: "I am from earth.😀",
// //     },
// //     {
// //       question: "Hi",
// //       answer: "Hi! How can i assist you.🙃",
// //     },
// //   ];

// //   const handleSend = () => {
// //     let flag = 0;
// //     arrObj.forEach((item) => {
// //       if (inputValue === item.question) {
// //         console.log("here i am ");
// //         flag = 1;
// //         setInputQuestion((prevQuestions) => [...prevQuestions, item.question]);
// //         setInputAnswer((prevAnswers) => [...prevAnswers, item.answer]);
// //         setInputValue("");
// //       }
// //     });
// //     if (flag === 0) {
// //       console.log("Hello here");
// //       setInputQuestion((prevQuestions) => [...prevQuestions, inputValue]);
// //       setInputAnswer((prevAnswers) => [
// //         ...prevAnswers,
// //         <span>
// //           Go through the website for accurate information: <br />
// //           <a
// //             href="https://www.colesgroup.com.au/suppliers/?page=related-documents-and-policies"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             ColesGroup All Information
// //           </a>
// //         </span>,
// //       ]);
// //       setInputValue("");
// //     }
// //   };

// //   return (
// //     <div className="App">
// //       <div className="Main-Conatainer">
// //         <div className="heading-bob">
// //         <h1>Welcome to ChatBob</h1>
// //         </div>
// //         <div>
// //           {inputQuestion &&
// //             inputQuestion.map((question, index) => (
// //               <div key={index} className="answerBox">
// //                 <div className="submitQuestionBox">
// //                   <p>
// //                     <strong>Question :</strong>
// //                     <br />
// //                     {question}
// //                   </p>
// //                 </div>
// //                 <div className="submitAnswerBox">
// //                   <p>
// //                     <strong>Answer :</strong>
// //                     <br />
// //                     {inputAnswer[index]}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //         </div>
// //         <div>
// //           <input
// //             className="inputBox"
// //             placeholder="Enter your query here"
// //             value={inputValue}
// //             onChange={(e) => setInputValue(e.target.value)}
// //           />
// //           <button className="submitBox" onClick={handleSend}>
// //             Send
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
