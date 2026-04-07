import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Exam.css";

// 🔥 QUESTIONS (ADD MORE HERE)
const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Hyperlinks Text Mark Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<hyper>"],
    answer: "<a>",
  },
  {
    id: 3,
    question: "Which tag is used for inserting an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>",
  },
  {
    id: 4,
    question: "Which tag is used to create a paragraph?",
    options: ["<p>", "<para>", "<text>", "<pg>"],
    answer: "<p>",
  },
  {
    id: 5,
    question: "Which tag is used for headings?",
    options: ["<h1> to <h6>", "<head>", "<heading>", "<title>"],
    answer: "<h1> to <h6>",
  },
  {
    id: 6,
    question: "Which tag is used to create a line break?",
    options: ["<br>", "<break>", "<lb>", "<line>"],
    answer: "<br>",
  },
  {
    id: 7,
    question: "Which tag is used to create a table?",
    options: ["<table>", "<tbl>", "<tab>", "<t>"],
    answer: "<table>",
  },
  {
    id: 8,
    question: "Which tag is used for table rows?",
    options: ["<tr>", "<td>", "<th>", "<row>"],
    answer: "<tr>",
  },
  {
    id: 9,
    question: "Which tag is used for table data?",
    options: ["<td>", "<tr>", "<th>", "<data>"],
    answer: "<td>",
  },
  {
    id: 10,
    question: "Which tag is used for table header?",
    options: ["<th>", "<td>", "<tr>", "<head>"],
    answer: "<th>",
  },
  {
    id: 11,
    question: "Which tag is used to create a form?",
    options: ["<form>", "<input>", "<fieldset>", "<label>"],
    answer: "<form>",
  },
  {
    id: 12,
    question: "Which tag is used for input field?",
    options: ["<input>", "<form>", "<textarea>", "<select>"],
    answer: "<input>",
  },
  {
    id: 13,
    question: "Which attribute is used for image path?",
    options: ["src", "href", "alt", "link"],
    answer: "src",
  },
  {
    id: 14,
    question: "Which tag is used for unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    id: 15,
    question: "Which tag is used for ordered list?",
    options: ["<ol>", "<ul>", "<li>", "<order>"],
    answer: "<ol>",
  },
  {
    id: 16,
    question: "Which tag is used for list item?",
    options: ["<li>", "<ul>", "<ol>", "<item>"],
    answer: "<li>",
  },
  {
    id: 17,
    question: "Which tag is used to define title?",
    options: ["<title>", "<head>", "<meta>", "<h1>"],
    answer: "<title>",
  },
  {
    id: 18,
    question: "Which tag is used to define body?",
    options: ["<body>", "<head>", "<html>", "<main>"],
    answer: "<body>",
  },
  {
    id: 19,
    question: "Which tag is root of HTML?",
    options: ["<html>", "<body>", "<head>", "<root>"],
    answer: "<html>",
  },
  {
    id: 20,
    question: "Which tag is used for bold text?",
    options: ["<b>", "<strong>", "<bold>", "<text>"],
    answer: "<b>",
  },
  {
    id: 21,
    question: "Which tag is used for italic text?",
    options: ["<i>", "<italic>", "<em>", "<it>"],
    answer: "<i>",
  },
  {
    id: 22,
    question: "Which tag is used for underline?",
    options: ["<u>", "<underline>", "<ul>", "<line>"],
    answer: "<u>",
  },
  {
    id: 23,
    question: "Which tag is used for audio?",
    options: ["<audio>", "<sound>", "<mp3>", "<media>"],
    answer: "<audio>",
  },
  {
    id: 24,
    question: "Which tag is used for video?",
    options: ["<video>", "<media>", "<movie>", "<vid>"],
    answer: "<video>",
  },
  {
    id: 25,
    question: "Which attribute is used for link?",
    options: ["href", "src", "alt", "link"],
    answer: "href",
  },
  {
    id: 26,
    question: "Which tag is used for division?",
    options: ["<div>", "<section>", "<span>", "<box>"],
    answer: "<div>",
  },
  {
    id: 27,
    question: "Which tag is inline element?",
    options: ["<span>", "<div>", "<p>", "<section>"],
    answer: "<span>",
  },
  {
    id: 28,
    question: "Which tag is semantic?",
    options: ["<article>", "<div>", "<span>", "<b>"],
    answer: "<article>",
  },
  {
    id: 29,
    question: "Which tag defines navigation?",
    options: ["<nav>", "<menu>", "<link>", "<header>"],
    answer: "<nav>",
  },
  {
    id: 30,
    question: "Which tag defines footer?",
    options: ["<footer>", "<bottom>", "<end>", "<section>"],
    answer: "<footer>",
  },
  {
    id: 31,
    question: "Which tag defines header?",
    options: ["<header>", "<head>", "<top>", "<section>"],
    answer: "<header>",
  },
  {
    id: 32,
    question: "Which tag defines section?",
    options: ["<section>", "<div>", "<span>", "<part>"],
    answer: "<section>",
  },
  {
    id: 33,
    question: "Which tag defines article?",
    options: ["<article>", "<section>", "<div>", "<blog>"],
    answer: "<article>",
  },
  {
    id: 34,
    question: "Which tag is used for dropdown?",
    options: ["<select>", "<input>", "<option>", "<dropdown>"],
    answer: "<select>",
  },
  {
    id: 35,
    question: "Which tag is used for textarea?",
    options: ["<textarea>", "<input>", "<text>", "<area>"],
    answer: "<textarea>",
  },
  {
    id: 36,
    question: "Which tag is used for button?",
    options: ["<button>", "<btn>", "<input>", "<click>"],
    answer: "<button>",
  },
  {
    id: 37,
    question: "Which tag defines metadata?",
    options: ["<meta>", "<data>", "<info>", "<head>"],
    answer: "<meta>",
  },
  {
    id: 38,
    question: "Which tag links CSS?",
    options: ["<link>", "<style>", "<css>", "<script>"],
    answer: "<link>",
  },
  {
    id: 39,
    question: "Which tag defines style?",
    options: ["<style>", "<css>", "<design>", "<link>"],
    answer: "<style>",
  },
  {
    id: 40,
    question: "Which tag defines script?",
    options: ["<script>", "<js>", "<code>", "<program>"],
    answer: "<script>",
  },
  {
    id: 41,
    question: "Which attribute is for alternate text?",
    options: ["alt", "src", "title", "href"],
    answer: "alt",
  },
  {
    id: 42,
    question: "Which tag defines iframe?",
    options: ["<iframe>", "<frame>", "<embed>", "<window>"],
    answer: "<iframe>",
  },
  {
    id: 43,
    question: "Which tag defines label?",
    options: ["<label>", "<form>", "<input>", "<text>"],
    answer: "<label>",
  },
  {
    id: 44,
    question: "Which tag defines fieldset?",
    options: ["<fieldset>", "<form>", "<group>", "<input>"],
    answer: "<fieldset>",
  },
  {
    id: 45,
    question: "Which tag defines legend?",
    options: ["<legend>", "<title>", "<label>", "<caption>"],
    answer: "<legend>",
  },
  {
    id: 46,
    question: "Which tag defines progress?",
    options: ["<progress>", "<bar>", "<meter>", "<load>"],
    answer: "<progress>",
  },
  {
    id: 47,
    question: "Which tag defines meter?",
    options: ["<meter>", "<progress>", "<bar>", "<measure>"],
    answer: "<meter>",
  },
  {
    id: 48,
    question: "Which tag defines details?",
    options: ["<details>", "<summary>", "<info>", "<more>"],
    answer: "<details>",
  },
  {
    id: 49,
    question: "Which tag defines summary?",
    options: ["<summary>", "<details>", "<info>", "<title>"],
    answer: "<summary>",
  },
  {
    id: 50,
    question: "Which tag defines canvas?",
    options: ["<canvas>", "<draw>", "<graphics>", "<paint>"],
    answer: "<canvas>",
  },
];

const Exam = () => {
  const navigate = useNavigate();

  // ✅ STATES
  const [answers, setAnswers] = useState({});
  const [currentQ, setCurrentQ] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60 * 60);

  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [warning, setWarning] = useState("");

  // 🔐 ONE TIME ATTEMPT
  useEffect(() => {
    const attempted = localStorage.getItem("examAttempted");
    if (attempted === "true") {
      alert("❌ You already attempted this exam!");
      navigate("/");
    }
  }, []);

  // ⏱ TIMER (STOP AFTER SUBMIT)
  useEffect(() => {
    if (timeLeft <= 0 || isSubmitted) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  // ❌ REFRESH BLOCK
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "Are you sure?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // 🚨 SMART TAB + BLUR DETECTION (PROPER FIX)
  useEffect(() => {
    if (isSubmitted) return;

    let cooldown = false;

    const handleViolation = (type) => {
      if (cooldown) return;
      cooldown = true;

      setTabSwitchCount((prev) => {
        const newCount = prev + 1;

        if (newCount === 2) {
          setWarning("⚠️ Last warning! Next = auto submit");
        } else {
          setWarning(`⚠️ ${type} detected!`);
        }

        if (newCount >= 3) {
          alert("❌ Too many violations! Exam submitted.");
          handleSubmit();
        }

        return newCount;
      });

      setTimeout(() => {
        cooldown = false;
      }, 800); // delay prevents double trigger
    };

    const handleVisibilityChange = () => {
      if (document.hidden) handleViolation("Tab switch");
    };

    const handleBlur = () => {
      handleViolation("Window blur");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
    };
  }, [isSubmitted]);

  // ⚠️ AUTO HIDE WARNING
  useEffect(() => {
    if (warning) {
      const t = setTimeout(() => setWarning(""), 3000);
      return () => clearTimeout(t);
    }
  }, [warning]);

  // 📝 SELECT
  const handleSelect = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  // 📊 SCORE
  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) score++;
    });
    return score;
  };

  // ✅ SUBMIT
  const handleSubmit = () => {
    if (isSubmitted) return;

    localStorage.setItem("examAttempted", "true");
    setSubmitted(true);
    setIsSubmitted(true);
  };

  // ⏱ FORMAT TIME
  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const q = questions[currentQ];

  // 🛑 SAFE CHECK (IMPORTANT)
  if (!q) return <h2>No Questions Available</h2>;

  return (
    <div className="exam-wrapper">
      <div className="exam-container">
        {/* LEFT */}
        <div className="exam-left">
          <div className="exam-header">
            <h2>📝 Online Exam</h2>
            <div className="timer">⏱ {formatTime(timeLeft)}</div>
          </div>

          {warning && (
            <div className="warning-box">
              {warning} (Count: {tabSwitchCount})
            </div>
          )}

          {!submitted ? (
            <div className="question-card">
              <h3>
                {currentQ + 1}. {q.question}
              </h3>

              <div className="options">
                {q.options.map((opt, i) => (
                  <label key={i} className="option">
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      checked={answers[q.id] === opt}
                      onChange={() => handleSelect(q.id, opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>

              <div className="actions">
                <button
                  disabled={currentQ === 0}
                  onClick={() => setCurrentQ(currentQ - 1)}
                  className="btn secondary"
                >
                  ⬅ Prev
                </button>

                <button
                  disabled={currentQ === questions.length - 1}
                  onClick={() => setCurrentQ(currentQ + 1)}
                  className="btn secondary"
                >
                  Next ➡
                </button>

                <button onClick={handleSubmit} className="btn primary">
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div className="result-card">
              <h2>🎉 Exam Completed</h2>
              <p>Your Score</p>
              <h1>
                {calculateScore()} / {questions.length}
              </h1>

              <hr />

              <h3>📋 Review Answers</h3>

              {questions.map((q, index) => (
                <div key={q.id} className="review-question">
                  <h4>
                    {index + 1}. {q.question}
                  </h4>

                  {q.options.map((opt, i) => {
                    const isCorrect = opt === q.answer;
                    const isSelected = answers[q.id] === opt;

                    return (
                      <div
                        key={i}
                        className={`review-option 
              ${isCorrect ? "correct" : ""} 
              ${isSelected && !isCorrect ? "wrong" : ""}`}
                      >
                        {opt}

                        {isCorrect && " ✅"}
                        {isSelected && !isCorrect && " ❌"}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="exam-right">
          <h4>Questions</h4>

          <div className="nav-grid">
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQ(i)}
                className={`nav-btn ${
                  answers[i + 1] ? "answered" : i === currentQ ? "active" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
