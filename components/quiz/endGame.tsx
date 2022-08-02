
import styles from '@/styles/quiz.module.scss'

const EndGame: React.FunctionComponent<{setStageOfGame: Function, points: number, setPoints: Function}> = ({ setStageOfGame, points, setPoints}) => {
    const newGame: Function = () => {
        setStageOfGame('start')
        setPoints(0)
    }
    
    return (
        <div className={styles.endGame}>
            <h1>
                {points > 7 ? "Well done!" : " Practice more"}
            </h1>
            
            <div className={styles.score}>Your score: {points}</div>
            
            <div className={styles.button}>
                <button onClick={() => newGame()}>New game</button>
            </div>
        </div>
    )
}

export default EndGame
