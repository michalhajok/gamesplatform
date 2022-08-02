import { useEffect, useState } from "react";
import styles from '@/styles/quiz.module.scss'

const DuringTheGame: React.FunctionComponent<{questions: any[], points: number, setPoints: Function, setStageOfGame: Function}> = ({questions, points, setPoints, setStageOfGame}) => {
    const [round, setRound] = useState<number>(1)
    const [currentQuestion, setCurrentQuestion] = useState<number>(questions[round-1].question)
    const [answers, setAnswers] = useState<any[]>([])
    const [answer, setAnswer] = useState<string>('')
    
    const answerRandom: Function = async () => {
        let array: object[] = [...questions[round-1].incorrectAnswer, questions[round-1].correctAnswer]
        array.sort(function(a, b) {

            let random1 = Math.random (),
                random2 = Math.random ();
        
            return random1 - random2;
        
        })
        setAnswers(array)
    }
    
    const nextQuestion: Function =  () => {
        if(round < 10 && answer ) {
            setRound(round+1)
            setAnswer('')
        }
        
    }
    
    useEffect(() => {
        setCurrentQuestion(questions[round-1].question)
        answerRandom()
    }, [round])
    
    const checkAnswer = (e: string) => {
        setAnswer(e)
        if(e === questions[round-1].correctAnswer) {
            setPoints(points+1)
        }
    }
    
    const isCorrect: Function = (e: string) => {
        if (e === answer) {
            if(questions[round-1].correctAnswer === e) return styles.correctAnswer
            else return styles.inCorrectAnswer
        } else if (questions[round-1].correctAnswer === e) return styles.correctAnswer
    }
    
    return (
        <div className={styles.duringGame}>
            <div className={styles.content}>
                <header>
                    <div>Round: <b>{round} of 10</b></div>
                    <div> Points: <b>{points}</b></div>
                </header>
                <div className={styles.question}>
                    <h1>{currentQuestion}</h1>
                </div>
                <div className={styles.answers}>
                    {
                        answers.map((e: any) => (
                            <div 
                                key={e} 
                                onClick={() => answer ? null : checkAnswer(e) }
                                className={`${answer ? isCorrect(e) : styles.active}`}
                            >
                                {e}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.button}>
                {
                    round === 10 ?
                    <button onClick={() => setStageOfGame('end')}>End game</button>
                    :
                    <button onClick={() => nextQuestion()}>Next question</button> 
                }
            </div>
        </div>
    )
}

export default DuringTheGame
