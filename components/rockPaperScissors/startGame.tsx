
import styles from '@/styles/rockPaperScissors.module.scss'
import StartButton from '../elements/startButton'

const rounds = [1, 3, 5, 10]

const StartGame: React.FunctionComponent<{gameRounds: number, setGameRounds: Function, startGame: Function}> = ({gameRounds, setGameRounds, startGame}) => (
    <div className={styles.startGame}>
        
        <div className={styles.header}>
            <p>How many rounds do you want to play?</p>
        </div>
            <div>
                {
                    rounds && rounds.map((e: number) => (
                        <div 
                            key={e} 
                            onClick={() => setGameRounds(e)}
                            className={`${styles.numberOfRound} ${e === gameRounds ? styles.activeNumberOfRounds : ''}`}
                        >
                            {e}
                        </div>
                    ))
                }
            </div>
            <StartButton startGame={startGame} styles={styles.button} />
    </div>
)

export default StartGame
