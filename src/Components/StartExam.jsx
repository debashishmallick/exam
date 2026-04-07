import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StartExam = () => {
  const navigate = useNavigate();

  // ⏱ Set time in seconds (example: 1 min = 60)
  const [timeLeft, setTimeLeft] = useState(120);

  // ⏱ TIMER LOGIC
  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/exam"); // redirect
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // 🕒 FORMAT TIME (HH:MM:SS)
  const formatTime = (sec) => {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    return `${hrs > 0 ? hrs + ":" : ""}${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>📝 Exam Starting Soon</h1>

        {/* ⏱ WATCH STYLE TIMER */}
        <div style={styles.timerCircle}>
          {formatTime(timeLeft)}
        </div>

        <p>Please wait... your exam will start automatically</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
  },
  card: {
    background: "#fff",
    color: "#333",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    width: "300px",
  },
  timerCircle: {
    margin: "20px auto",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "#667eea",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
};

export default StartExam;