import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import questions from './questions';
import Alert from '@mui/material/Alert';

const Test = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [error, setError] = useState('');

  const handleRadioChange = (questionId, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };
  const handleReset = () => {
    setSelectedAnswers({});
    setError('');
  };
  const handleSubmit = () => {
    const notansweredQuestions = questions.filter(
      (ques) => !selectedAnswers[ques.id]
    );

    if (notansweredQuestions.length > 0) {
      setError(
        `Please answer all the questions. You are not answered ${notansweredQuestions.length} questions.`
      );
      return;
    }

    const score = Object.keys(selectedAnswers).reduce((acc, questionId) => {
      const selectedOption = selectedAnswers[questionId];
      const correctOption = questions.find(
        (q) => q.id === parseInt(questionId)
      ).correct;

      return acc + (selectedOption === correctOption ? 1 : 0);
    }, 0);

    navigate('/dashboard', { state: { score, enrolled: true } });
  };
  return (
    <div className="test-q-container">
      <p className="test-title">
        Select the correct answer by checking the check box.
      </p>
      {error && <Alert severity="error">{error}</Alert>}
      {Array.isArray(questions) &&
        questions.map((ques, index) => (
          <div className="q-container" key={ques.id}>
            <p>
              {index + 1}. {ques.question}
            </p>
            <ul className>
              {ques.options.map((option) => (
                <li key={option}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${ques.id}`}
                      checked={selectedAnswers[ques.id] === option}
                      onChange={() => handleRadioChange(ques.id, option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      <div className="footer-btns">
        <button className="btn-reset" onClick={handleReset}>
          RESET
        </button>
        <button
          className="btn-submit"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Test;