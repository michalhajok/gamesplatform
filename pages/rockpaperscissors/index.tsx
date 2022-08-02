import type { NextPage } from 'next'
import { useEffect, useState } from "react"
import Head from 'next/head'

import Nav from '@/elements/nav'

import StartGame from '@/rockPaperScissors/startGame'
import DuringTheGame from "@/rockPaperScissors/duringTheGame"
import EndGame from "@/rockPaperScissors/endGame"

import styles from '@/styles/rockPaperScissors.module.scss'

const RockPaperScissors: NextPage = () => {
    const [stageOfGame, setStageOfGame] = useState<string>('start')
    const [gameRounds, setGameRounds] = useState<number>(1)
    const [round, setRound] = useState<number>(1)
    const [history, setHistory] = useState<object[]>([])
    const [yourPoints, setYourPoints] = useState<number>(0)
    const [enemyPoints, setEnemyPoints] = useState<number>(0)
    const [yourChoose, setYourChoose] = useState<string>('')
    const [enemyChoose, setEnemyChoose] = useState<string>('')
    const [result, setResult] = useState<string>("")
    const [isRoundEnd, setIsRoundEnd] = useState<boolean>(false)
    
    useEffect(() => {
        if(yourChoose && enemyChoose) {
            switch (yourChoose) {
                case '1':
                    if(enemyChoose === '1') {
                        setResult("draw")
                    } else if(enemyChoose === '2') {
                        setResult("lose")
                        setEnemyPoints(enemyPoints + 1)
                    } else {
                        setResult("win")
                        setYourPoints(yourPoints + 1)
                    }
                    break;
                case '2':
                    if(enemyChoose === '1') {
                        setResult("win")
                        setYourPoints(yourPoints + 1)
                    } else if(enemyChoose === '2') {
                        setResult("draw")
                    } else {
                        setResult("lose")
                        setEnemyPoints(enemyPoints + 1)
                    }
                    break;
                case '3':
                    if(enemyChoose === '1') {
                        setResult("lose")
                        setEnemyPoints(enemyPoints + 1)
                    } else if(enemyChoose === '2') {
                        setResult("win")
                        setYourPoints(yourPoints + 1)
                    } else {
                        setResult("draw")
                    }
                    break;
                ;
                default:
                    break;
            }
        }
        
    }, [enemyChoose, yourChoose])
    
    useEffect(() => {
        if(result) {
            setHistory([
                ...history,
                {
                    round,
                    yourChoose,
                    enemyChoose,
                    result
                }
            ])
        }
    }, [result])
    
    const setResultRound: Function = async (choose: any) => {
        if(!isRoundEnd) {
            const random: number = Math.floor(Math.random() * (4 - 1) ) + 1
            setEnemyChoose(String(random))
            setYourChoose(choose)
            setIsRoundEnd(true)
        }

    }
    
    const nextRound = () => {
        if(round < gameRounds) {
            setRound(round + 1)
            setEnemyChoose('')
            setYourChoose('')
            setResult("")
            setIsRoundEnd(false)
        } 
    } 
    
    const newGame = () => {
        setStageOfGame('start')
        setGameRounds(1)
        setRound(1)
        setHistory([])
        setYourPoints(0)
        setEnemyPoints(0)
        setYourChoose('')
        setEnemyChoose('')
        setResult("")
        setIsRoundEnd(false)
    }
    
    return (
        <div>
            <Head>
                <title>Rock Paper Scissors</title>
            </Head>
            <div className={styles.rockPaperScissors}>
                <Nav />
                <div className={styles.game}>
                    {
                        {
                            'start': <StartGame 
                                        gameRounds={gameRounds} 
                                        setGameRounds={(e: number)=> setGameRounds(e)}
                                        startGame={() => setStageOfGame('during')} 
                                    />,       
                            'during': <DuringTheGame 
                                            round={round}
                                            yourChoose={yourChoose}
                                            enemyChoose={enemyChoose}
                                            result={result}
                                            setResultRound={setResultRound} 
                                            nextRound={nextRound} 
                                            isRoundEnd={isRoundEnd} 
                                            gameRounds={gameRounds}
                                            setStageOfGame={setStageOfGame} 
                                        />,
                            'end': <EndGame 
                                        yourPoints={yourPoints} 
                                        enemyPoints={enemyPoints} 
                                        newGame={newGame} 
                                    />
                        }[stageOfGame]
                    }
                </div>
            </div>
        </div>
    )
}

export default RockPaperScissors
