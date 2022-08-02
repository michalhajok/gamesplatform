
import styles from '@/styles/rockPaperScissors.module.scss'

const EndGame: React.FunctionComponent<{yourPoints: number, enemyPoints: number, newGame: Function}> = ({yourPoints, enemyPoints, newGame}) => (
    <div className={styles.endGame}>
        <div className={styles.result}>
            {
                yourPoints === enemyPoints ?
                    <h1>Draw</h1>
                    :
                        yourPoints > enemyPoints ?
                            <h1>You win</h1>
                            :
                            <h1>You have lost</h1>
            }
        </div>
            
            <div className={styles.points}>
                <p>
                    Your points: 
                    <b>  {yourPoints}</b>
                </p>
                <p>
                    Opponent&apos;s points: 
                    <b>  {enemyPoints}</b>
                </p>
            </div>
            
            <div className={styles.button}>
                <button onClick={() => newGame()}>New game</button>
            </div>
    </div>
)

export default EndGame
