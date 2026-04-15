import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Exam.css";

// 🔥 QUESTIONS (ADD MORE HERE)
const questions = [
  {
    id: 1,
    question: "Which selector has highest specificity?",
    options: ["*", "div", "div.class", "#id"],
    answer: "#id",
  },
  {
    id: 2,
    question: "Which combinator selects all descendants?",
    options: [">", "+", "~", "space"],
    answer: "space",
  },
  {
    id: 3,
    question: "Which CSS property affects box model size?",
    options: ["margin", "padding", "border", "All of these"],
    answer: "All of these",
  },
  {
    id: 4,
    question: "Default box-sizing value is?",
    options: ["border-box", "content-box", "inherit", "auto"],
    answer: "content-box",
  },
  {
    id: 5,
    question: "Which property changes text color?",
    options: ["font-color", "text-color", "color", "bg-color"],
    answer: "color",
  },
  {
    id: 6,
    question: "Which combinator selects adjacent sibling?",
    options: ["+", "~", ">", "space"],
    answer: "+",
  },
  {
    id: 7,
    question: "Which property controls font size?",
    options: ["text-size", "font-size", "size", "font-weight"],
    answer: "font-size",
  },
  {
    id: 8,
    question: "Which property adds space inside border?",
    options: ["margin", "padding", "spacing", "gap"],
    answer: "padding",
  },
  {
    id: 9,
    question: "Which property adds space outside border?",
    options: ["margin", "padding", "border", "gap"],
    answer: "margin",
  },
  {
    id: 10,
    question: "Which property is used for background color?",
    options: ["bgcolor", "background-color", "color", "background"],
    answer: "background-color",
  },
  {
    id: 11,
    question: "Which value repeats background image?",
    options: ["repeat", "cover", "contain", "no-repeat"],
    answer: "repeat",
  },
  {
    id: 12,
    question: "Which value prevents background repetition?",
    options: ["repeat", "cover", "no-repeat", "fixed"],
    answer: "no-repeat",
  },
  {
    id: 13,
    question: "Which property aligns text center?",
    options: ["align", "text-align", "center", "font-align"],
    answer: "text-align",
  },
  {
    id: 14,
    question: "Which property changes font family?",
    options: ["font-type", "font-family", "font-style", "family"],
    answer: "font-family",
  },
  {
    id: 15,
    question: "Which value makes text bold?",
    options: ["500", "600", "700", "300"],
    answer: "700",
  },
  {
    id: 16,
    question: "Which selector selects all elements?",
    options: ["#", "*", ".", "all"],
    answer: "*",
  },
  {
    id: 17,
    question: "Which HTML tag is inline?",
    options: ["div", "p", "span", "section"],
    answer: "span",
  },
  {
    id: 18,
    question: "Which property sets background image?",
    options: ["image", "background-img", "background-image", "bg"],
    answer: "background-image",
  },
  {
    id: 19,
    question: "Which property controls text spacing?",
    options: ["spacing", "letter-spacing", "text-gap", "word-gap"],
    answer: "letter-spacing",
  },
  {
    id: 20,
    question: "Which property controls line spacing?",
    options: ["line-height", "text-height", "spacing", "gap"],
    answer: "line-height",
  },
  {
    id: 21,
    question: "Which property removes underline?",
    options: ["text-style", "text-decoration", "font-style", "underline"],
    answer: "text-decoration",
  },
  {
    id: 22,
    question: "Which property sets border?",
    options: ["border", "outline", "frame", "edge"],
    answer: "border",
  },
  {
    id: 23,
    question: "Which property sets border radius?",
    options: ["radius", "border-radius", "curve", "round"],
    answer: "border-radius",
  },
  {
    id: 24,
    question: "Which display value makes block behave inline?",
    options: ["block", "inline", "inline-block", "flex"],
    answer: "inline-block",
  },
  {
    id: 25,
    question: "Which value hides overflow?",
    options: ["visible", "hidden", "scroll", "auto"],
    answer: "hidden",
  },
  {
    id: 26,
    question: "Which unit is relative?",
    options: ["px", "cm", "em", "pt"],
    answer: "em",
  },
  {
    id: 27,
    question: "Which combinator selects all siblings?",
    options: ["+", "~", ">", "space"],
    answer: "~",
  },
  {
    id: 28,
    question: "Which property sets text color?",
    options: ["font-color", "color", "text", "bgcolor"],
    answer: "color",
  },
  {
    id: 29,
    question: "Which value covers entire background?",
    options: ["contain", "cover", "repeat", "fill"],
    answer: "cover",
  },
  {
    id: 30,
    question: "Which HTML tag is block-level?",
    options: ["span", "a", "div", "b"],
    answer: "div",
  },
  {
    id: 31,
    question: "Which property controls font style?",
    options: ["font-type", "font-style", "text-style", "font"],
    answer: "font-style",
  },
  {
    id: 32,
    question: "Which value makes italic?",
    options: ["italic", "bold", "normal", "700"],
    answer: "italic",
  },
  {
    id: 33,
    question: "Which property controls width?",
    options: ["width", "size", "length", "w"],
    answer: "width",
  },
  {
    id: 34,
    question: "Which property controls height?",
    options: ["height", "size", "length", "h"],
    answer: "height",
  },
  {
    id: 35,
    question: "Which property sets background position?",
    options: ["bg-pos", "background-position", "position", "image-pos"],
    answer: "background-position",
  },
  {
    id: 36,
    question: "Which property sets font weight?",
    options: ["font-weight", "text-weight", "bold", "weight"],
    answer: "font-weight",
  },
  {
    id: 37,
    question: "Which selector selects class?",
    options: ["#", ".", "*", "@"],
    answer: ".",
  },
  {
    id: 38,
    question: "Which selector selects id?",
    options: ["#", ".", "*", "@"],
    answer: "#",
  },
  {
    id: 39,
    question: "Which property sets text transform?",
    options: ["transform", "text-transform", "font-transform", "case"],
    answer: "text-transform",
  },
  {
    id: 40,
    question: "Which value makes uppercase?",
    options: ["upper", "uppercase", "capital", "big"],
    answer: "uppercase",
  },
  {
    id: 41,
    question: "Which property sets shadow?",
    options: ["shadow", "text-shadow", "font-shadow", "box-shadow"],
    answer: "text-shadow",
  },
  {
    id: 42,
    question: "Which property sets box shadow?",
    options: ["shadow", "text-shadow", "box-shadow", "bg-shadow"],
    answer: "box-shadow",
  },
  {
    id: 43,
    question: "Which property sets overflow scroll?",
    options: ["scroll", "overflow", "overflow-y", "overflow-x"],
    answer: "overflow",
  },
  {
    id: 44,
    question: "Which property sets display flex?",
    options: ["display:flex", "flex", "layout", "box"],
    answer: "display:flex",
  },
  {
    id: 45,
    question: "Which property centers text horizontally?",
    options: ["align", "text-align", "center", "justify"],
    answer: "text-align",
  },
  {
    id: 46,
    question: "Which property sets font?",
    options: ["font", "text-font", "font-style", "family"],
    answer: "font",
  },
  {
    id: 47,
    question: "Which property sets background shorthand?",
    options: ["bg", "background", "bgcolor", "image"],
    answer: "background",
  },
  {
    id: 48,
    question: "Which property sets cursor type?",
    options: ["cursor", "pointer", "mouse", "click"],
    answer: "cursor",
  },
  {
    id: 49,
    question: "Which value makes pointer cursor?",
    options: ["cursor:pointer", "pointer", "hand", "click"],
    answer: "cursor:pointer",
  },
  {
    id: 50,
    question: "Which property removes list bullets?",
    options: ["list", "list-style", "bullet:none", "style:none"],
    answer: "list-style",
  },
];
const Exam = () => {
  const navigate = useNavigate();

  // ✅ STATES
  const [answers, setAnswers] = useState({});
  const [currentQ, setCurrentQ] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
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
