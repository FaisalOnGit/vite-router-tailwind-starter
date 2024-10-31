import React, { useEffect, useState } from "react";
import axios from "axios";

const Kontol = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState(Array(12).fill("")); // Assuming 12 questions
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/mbti/questions"
        ); // Adjust the API endpoint as needed
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/mbti/calculate",
        { answers }
      );
      setResult(response.data.result);
    } catch (error) {
      console.error("Error calculating result:", error);
    }
  };

  return (
    <div>
      <h1>MBTI Test</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="Y"
                checked={answers[index] === "Y"}
                onChange={() => handleChange(index, "Y")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="N"
                checked={answers[index] === "N"}
                onChange={() => handleChange(index, "N")}
              />
              No
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {result && <h2>Your MBTI Result: {result}</h2>}
    </div>
  );
};

export default Kontol;
