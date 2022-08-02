import type { NextPage } from 'next'
import { useState, useEffect } from "react"
import Head from 'next/head'

import Nav from '@/elements/nav'

import DuringGame from "@/memory/duringGame"
import StartGame from "@/memory/startGame"

import styles from '@/styles/memory.module.scss'

const Memory: NextPage = () => {
    const [chosen, setChosen] = useState<any[]>([])
    const [correct, setCorrect] = useState<any[]>([])
    const [card, setCard] = useState<any[]>([])
    const [type, setType] = useState<string>("football")
    const [stageOfGame, setStageOfGame] = useState<string>('start')
    
    useEffect(() => {
        return () => {
            setChosen([])
            setCorrect([])
            setCard([])
            setType("football")
            setStageOfGame('start')
        }
    }, [])
    
    const searchCards = async () => {
        const res = await fetch(`${process.env.WEB_URL}api/memory/${type}`,
        {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
        const data = await res.json()
        let array = data
        await array.sort(function(a: any, b: any) {
            let random1 = Math.random (),
            random2 = Math.random ();
            return random1 - random2;
            })
        setCard(data);
    }
    
    const startAGame: Function = async () => {
        await searchCards()
        setStageOfGame('during')
    }
    
    const newGame: Function = () => {
        setChosen([])
        setCorrect([])
        setCard([])
        setType("football")
        setStageOfGame('start')
    }
    
    const chooseCard: Function = ({id, title, pair}: {id: string, title: string, pair: string}) => {
        if(!correct.some(({id: _id}) => _id === id)) {
            if(chosen.length === 0) {
                setChosen([{id, title, pair}])
            }
            else {
                if(!chosen.some(({id: _id}) => _id === id ) ) {
                    if (pair === chosen[0].pair) {
                        setCorrect([...correct, ...chosen, {id, title, pair}])
                        setChosen([...chosen, {id, title, pair}])
                        setTimeout(() => {
                            setChosen([])
                        }, 500);
                    }
                    if (pair !== chosen[0].pair) {
                        setChosen([...chosen, {id, title, pair}])
                        setTimeout(() => {
                            setChosen([])
                        }, 1000);
                    }
                }
            }
        }
    }
    
    const isReverseCard: Function = (id: string) => {
        if(id === chosen[0]?.id || id === chosen[1]?.id ) {
            return styles.cardReverse
        }

        if(correct.some(({id: _id}) => _id === id)) {
            return styles.cardReverse
        }

    }
    
    return (
        <div className={styles.memoryGame}>
            <Head>
                <title>Memory</title>
            </Head>
            <Nav />
            <div className={styles.memory} >
            <>
                {{
                    'start':    <StartGame 
                                    type={type}
                                    setType={setType}
                                    startAGame={startAGame} 
                                />,
                    'during':   <DuringGame 
                                        chosen={chosen}
                                        card={card}
                                        isReverseCard={isReverseCard}
                                        chooseCard={chooseCard}
                                        newGame={newGame}
                                        correct={correct}
                                    />
                }[stageOfGame]}
            </>
                

            </div>
        </div>
    )
}

export default Memory


