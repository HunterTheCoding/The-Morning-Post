import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
interface HandleType {
  question: string;
  options: Array<string>;
  answer: number;
  correctCount: number;
  _id: number;
}
interface QuizHandle {
  correctCount: number;
  inCorrectCount: number;
  quizResult: number;
}
const Quiz: React.FC = () => {
  const AxiosPublic = useAxiosPublic();
  const [quiz, setQuiz] = useState<HandleType[]>([]);
  const [userAnswer, setUserAnswer] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [quizResult, setQuizResult] = useState<QuizHandle>({
    correctCount: 0,
    inCorrectCount: 0,
    quizResult: 0,
  });

  useEffect(() => {
    AxiosPublic.get("/api/v1/quiz").then((data) => {
      setQuiz(data.data as HandleType[]);
    });
  }, [AxiosPublic]);

  console.log(quiz);

  const handleOption = (questionIndex: number, optionIndex: number) => {
    setUserAnswer((prevAnswer) => ({
      ...prevAnswer,
      [questionIndex]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    AxiosPublic.post("/api/v1/quiz", userAnswer)
      .then((response) => {
        setQuizResult(response.data);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTryAnother = () => {
    window.location.reload();
    console.log("called");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* <h1 className="text-2xl font-semibold p-2 mb-3">Welcome today's Quiz</h1> */}
      <div className="">
        {" "}
        <h1 className="text-2xl font-bold py-5 text-sky-800">
          Welcome today's Quiz
        </h1>
        <p className="text-sky-800 font-bold text-lg">
          Total Question {quiz.length} .
        </p>
        <div className="border border-gray-400 mb-7 w-72"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-start">
        {quiz?.map((item, questionIndex) => {
          return (
            <div key={questionIndex} className="grid justify-start">
              <h1 className="text-xl font-semibold">
                <span>{questionIndex + 1}. </span>
                {item.question}
              </h1>
              {item.options.map((option, optionIndex) => {
                return (
                  <div key={optionIndex}>
                    <input
                      key={optionIndex}
                      required
                      type="radio"
                      id={`q${questionIndex}_opt${optionIndex}`}
                      name={`q${questionIndex}`}
                      value={optionIndex}
                      onChange={() => handleOption(questionIndex, optionIndex)}
                      checked={userAnswer[questionIndex] === optionIndex}
                      disabled={submitted}
                    />
                    <label
                      className="text-lg ml-3"
                      htmlFor={`q${questionIndex}_opt${optionIndex}`}
                    >
                      <span>{optionIndex + 1} .</span>
                      {option}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="max-w-2xl justify-start my-6">
        <input
          onClick={handleSubmit}
          disabled={submitted}
          type="submit"
          className="btn text-white w-full bg-sky-800 hover:bg-sky-900"
          value="Submit and get score"
        />
      </div>
      <div className="p-10 bg-slate-400 text-black text-lg font-semibold max-w-2xl rounded-md">
        {submitted && (
          <div>
            <h1 className="text-xl bg-sky-800 rounded-md mb-2 text-white p-2">
              Result
            </h1>
            <h1>Total: {quiz.length}</h1>
            <h1>Your Score: {quiz.length - quizResult.inCorrectCount}</h1>
            <h1>Correct Answer: {quizResult.correctCount}</h1>
            <h1>Incorrect Answer: {quizResult.inCorrectCount}</h1>
            <div>
              <h1 className="text-xl bg-sky-800 text-white my-2 rounded-md p-2">
                See the Answer List
              </h1>
              {quiz.map((answer) => {
                return (
                  <div key={answer._id}>
                    <h1>
                      <span>{answer.question} : </span>
                      {answer.answer + 1}
                    </h1>
                  </div>
                );
              })}
              <button
                onClick={handleTryAnother}
                className="text-xl btn bg-sky-800 text-white my-2 rounded-md p-2"
              >
                Try Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
