import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'

import Nav from '@/elements/nav'

import StartGame from '@/quiz/startGame'
import DuringTheGame from "@/quiz/duringTheGame"
import EndGame from "@/quiz/endGame"

import styles from '@/styles/quiz.module.scss'

type Question = {
    question: string;
    correctAnswer: string;
    incorrectAnswer: string[]
}

const Quiz: NextPage = () => {
    const [type, setType] = useState<string>("football")
    const [points, setPoints] = useState<number>(0)
    const [stageOfGame, setStageOfGame] = useState<string>('start')
    const [questions, setQuestions] = useState<object[]>([])
    
    const startGame: Function = async () => {
        async function request<TResponse>(): Promise<TResponse>{
            const response = await fetch(`${process.env.WEB_URL}api/quiz/${type}`,
            {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            
            return await response.json()
        }
        const data = await request<Question[]>()
        
        setQuestions(data)
        setStageOfGame('during')
    }
    
    return (
        <div>
            <Head>
                <title>Quiz</title>
            </Head>
            <div className={styles.quiz}>
                <Nav />
                <>
                    {
                        {
                            'start': <StartGame 
                                            type={type} 
                                            setType={setType} 
                                            startGame={startGame} 
                                        />,
                            'during': <DuringTheGame 
                                            questions={questions}  
                                            points={points}
                                            setPoints={setPoints}
                                            setStageOfGame={setStageOfGame}
                                        />,
                            'end': <EndGame 
                                            setStageOfGame={setStageOfGame}    
                                            points={points}
                                            setPoints={setPoints}
                                        />
                        }[stageOfGame]
                    }
                    
                </>
            </div>
        </div>
    )
}

export default Quiz
