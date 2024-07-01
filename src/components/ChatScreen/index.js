import "./styles.css";
import React, { useState, useRef, useEffect } from "react";
import avataricon from "../../image-icon-folder/rabbit.svg";
import sendlogo from "../../image-icon-folder/send.svg";
import miclogo from "../../image-icon-folder/microphone.svg";

const App = () => {
  const [inputAnswer, setInputAnswer] = useState([]);
  const [inputQuestion, setInputQuestion] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef(null);

  // const arrObj = [
  //   {
  //     question: "What is your name?",
  //     answer: "My name is Bob! I am here to help you.👋",
  //   },
  //   {
  //     question: "How old are you?",
  //     answer: "I am an Ai Model and i developed in 2013.🌍",
  //   },
  //   {
  //     question: "Where are you from?",
  //     answer: "I am from earth.😀",
  //   },
  //   {
  //     question: "Hi",
  //     answer: "Hi! How can i assist you.🙃",
  //   },
  // ];

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleSend = async () => {
    setInputQuestion((prevQuestions) => [...prevQuestions, inputValue]);
    const question = inputValue;
    setInputValue("");

    // POST the question to the API
    try {
      const response = await fetch("/api/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      if (response?.response) {
        setInputAnswer([...inputAnswer, response.response]);
      } else {
        setInputAnswer([
          ...inputAnswer,
          "Sorry, I couldn't get an answer. Please try again later.",
        ]);
      }
    } catch (error) {
      setInputAnswer((prevAnswers) => [
        ...prevAnswers,
        "An error occurred. Please try again later.",
      ]);
    }
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      const lastTodoElement = chatContainerRef.current.lastElementChild;
      lastTodoElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [inputQuestion]);

  // const quickActions = [
  //   { icon: "✏️", text: "Content" },
  //   { icon: "🖼️", text: "Image" },
  //   { icon: "📁", text: "Code" },
  // ];

  return (
    <div className="app">
      <div className="header">
        <div>
          <img src={avataricon} className="profile-pic" />
        </div>
        <div className="title-Heading">
          <h1>
            Welcome to <br /> AI Chat
          </h1>
        </div>
      </div>
      <div className="chatBox">
        <div />
        <div>
          {inputQuestion &&
            inputQuestion.map((question, index) => (
              <div ref={chatContainerRef} key={index} className="answerBox">
                <div className="submitQuestionBox">
                  <div />
                  <p
                    style={{
                      backgroundColor: "rgb(65, 65, 243)",
                      padding: "10px 20px",
                      borderRadius: 10,
                      color: "hashtaghashtag#fff",
                      fontSize: "22px",
                    }}
                  >
                    <strong>Question :</strong>
                    <br />
                    {question}
                  </p>
                </div>
                <div className="submitAnswerBox">
                  <p style={{ fontSize: "22px" }}>
                    <strong>Answer :</strong>
                    <br />
                    {inputAnswer[index]}
                  </p>
                  <div />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="container-input">
        <div className="input-containers">
          <input
            type="text"
            placeholder="Search..."
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <img src={miclogo} className="icons" />
        </div>
        <div>
          <img
            onClick={handleSend}
            src={sendlogo}
            className="send-logo"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
        </div>
      </div>

      <div className="nav-bar">
        <button
          onClick={(e) => {
            window.location.href = "/";
          }}
        >
          🏠
        </button>
        <button>🔍</button>
        <button>👤</button>
      </div>
    </div>
  );
};

export default App;
