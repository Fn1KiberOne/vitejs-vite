import React, { useState } from 'react';
import './Quiz.css'; // Importiere die CSS-Datei

const questions = [
  {
    question: 'Welche Figur trägt eine Diamantrüstung?',
    options: ['Steve', 'Alex', 'Enderman', 'Creeper'],
    answer: 'Steve'
  },
  {
    question: 'Welche Figur explodiert, wenn sie in die Nähe des Spielers kommt?',
    options: ['Zombie', 'Creeper', 'Skelett', 'Spinne'],
    answer: 'Creeper'
  },
  {
    question: 'Welche Figur kann Blöcke teleportieren und ist neutral, solange sie nicht provoziert wird?',
    options: ['Enderman', 'Ghast', 'Hexe', 'Eisengolem'],
    answer: 'Enderman'
  },
  {
    question: 'Welche Figur kann Tränke werfen und hat eine schwarze Katze als Begleiter?',
    options: ['Hexe', 'Magier', 'Dorfbewohner', 'Phantom'],
    answer: 'Hexe'
  }
];



const Quiz = () => {
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (questionIndex, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: option
    });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (selectedOptions[index] === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  return (
    <div className="quiz-container">
      {questions.map((question, index) => (
        <div key={index}>
          <div className="question">{question.question}</div>
          <ul className="options">
            {question.options.map((option, i) => (
              <li key={i}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={selectedOptions[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                />
                {option}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="submit-btn" onClick={handleSubmit}>
        Antworten überprüfen
      </button>
      {showResult && (
        <div className="result">
          Du hast {score} von {questions.length} Fragen richtig beantwortet.
        </div>
      )}
    </div>
  );
};

export default Quiz;
