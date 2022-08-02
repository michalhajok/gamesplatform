
import styles from '@/styles/quiz.module.scss'
import StartButton from '../elements/startButton'

const StartGame: React.FunctionComponent<{type: string, setType: Function, startGame: Function}> = ({type, setType, startGame}) => {
    return (
        <div className={styles.startGame}>
            <h1>Choose quiz</h1>
            <div className={styles.optionList}>
                <div 
                    className={`${type === 'football' ? styles.activeOption : ''}`}
                    onClick={() => setType("football")}
                >
                    Football
                </div>
                <div 
                    className={`${type === 'basketball' ? styles.activeOption : ''}`}
                    onClick={() => setType("basketball")}
                >
                    Basketball
                </div>
                <div 
                    className={`${type === 'volleyball' ? styles.activeOption : ''}`}
                    onClick={() => setType("volleyball")}
                >
                    Volleyball
                </div>
            </div>
            <StartButton startGame={startGame} styles={styles.button}  />
        </div>
    )
}

export default StartGame
