import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";


interface HandleType {
    question: string;
    options: Array<string>;
    answer: number;
    correctCount: number;
    _id: number;

}
interface QuizHandle{
    correctCount: number;
    inCorrectCount: number;
    quizResult: number
}
const Quiz = () => {
    const AxiosPublic = useAxiosPublic()
    const [quiz, setQuiz] = useState<HandleType[]>([])
    const [userAnswer, setUserAnswer] = useState<number[]>([])
    const [submitted, setSubmitted] = useState(false)
    const [quizResult, setQuizResult] = useState<QuizHandle>({})


    useEffect(() => {
        AxiosPublic.get("/api/v1/quiz")
            .then(data => {
                setQuiz(data.data as HandleType[])
            })
    }, [AxiosPublic])
   
    
    console.log(quiz);
    const handleOption = (questionIndex: number, optionIndex: number) => {
        setUserAnswer((prevAnswer) => ({
            ...prevAnswer,
            [questionIndex]: optionIndex,
        }))
    }

    const handleSubmit = () => {
        console.log('user answer', userAnswer,);
        AxiosPublic.post("http://localhost:5000/api/v1/quiz", userAnswer)
            .then(response => {
                setQuizResult(response.data)
                setSubmitted(true)
            })
            .catch((error) => {
                console.log(error);
            })

    }
    const handleTryAnother = ()=>{
        window.location.reload()
        console.log('called');
        
    }
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold p-2 text-center mb-3">Welcome today's Quiz</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                {
                    quiz?.map((item, questionIndex) => {
                        return (
                            <div key={questionIndex} className="grid justify-center">
                                <h1 className="text-xl font-semibold">{item.question}</h1>
                                {
                                    item.options.map((option, optionIndex) => {
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
                                                <label className="text-lg ml-3" htmlFor={`q${questionIndex}_opt${optionIndex}`}>{option}</label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div>

            <div className="max-w-2xl mx-auto my-6">
                <input onClick={handleSubmit} disabled={submitted} type="submit" className="btn text-white w-full btn-success " value="Submit and get score" />
            </div>
            <div className="p-10 bg-slate-400 text-black text-lg font-semibold max-w-2xl mx-auto rounded-md">

                {
                    submitted && (
                        <div>
                             <h1 className="text-xl bg-gray-900 rounded-md mb-2 text-white p-2">Result</h1>
                            <h1>Total: {quiz.length}</h1>
                            <h1>Your Score: {quiz.length - quizResult.inCorrectCount}</h1>
                            <h1>Correct Answer: {quizResult.correctCount}</h1>
                            <h1>Incorrect Answer: {quizResult.inCorrectCount}</h1>
                    
                            <div>
                                <h1 className="text-xl bg-gray-900 text-white my-2 rounded-md p-2">See the Answer List</h1>
                                {
                                    quiz.map(answer => {
                                        return (
                                            <div key={answer._id}>
                                                <h1><span>{answer.question} : </span>{answer.answer}</h1>
                                            </div>
                                        )
                                    })
                                }
                                <button onClick={handleTryAnother} className="text-xl btn btn-success text-white my-2 rounded-md p-2">Try Another</button>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>


    );
};

export default Quiz;