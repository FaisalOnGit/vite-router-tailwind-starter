import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowBack from "../components/Arrowback";
import { useNavigate } from "react-router-dom";
import Selanjutnya from "../components/Selanjutnya";

function TesMbti() {
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
    <div className="min-h-screen bg-[#1F75A2] flex flex-col pb-20">
      <div className="py-5 sticky top-0 bg-[#1F75A2] z-10">
        <ArrowBack link="/mbti" />
        <h2 className="text-xl font-bold text-center text-white">Pahami</h2>
        <h2 className="text-xl text-center text-white">Kepribadian</h2>
      </div>
      <div className="bg-tesmbti flex-grow flex justify-center pt-2 overflow-y-auto">
        <div className="w-4/5 max-w-md flex flex-col items-center">
          <div className="bg-white border border-gray-600 py-2 w-4/12 rounded-full mb-6">
            <p className="font-bold text-sm text-center">
              Soal {questions.length}
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <div
                key={index}
                className="bg-white border border-gray-600 py-6 px-3 w-full rounded-2xl mb-3"
              >
                <p className="font-bold text-sm text-start mb-5">
                  {index + 1}. {question.text}
                </p>
                <div className="flex flex-row justify-around gap-x-6">
                  <div
                    className={`flex-1 font-bold text-sm text-center px-10 py-3.5 border rounded-full cursor-pointer ${
                      answers[index] === "Y"
                        ? "bg-green-600 text-white"
                        : "border-green-600"
                    }`}
                    onClick={() => handleChange(index, "Y")}
                  >
                    Yes
                  </div>
                  <div
                    className={`flex-1 font-bold text-sm text-center px-10 py-3.5 border rounded-full cursor-pointer ${
                      answers[index] === "N"
                        ? "bg-red-600 text-white"
                        : "border-red-600"
                    }`}
                    onClick={() => handleChange(index, "N")}
                  >
                    No
                  </div>
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          {result && <h2>Your MBTI Result: {result}</h2>}
        </div>
      </div>
    </div>
  );
}

export default TesMbti;
