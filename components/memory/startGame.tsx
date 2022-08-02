
import styles from '@/styles/memory.module.scss'

const StartGame: React.FunctionComponent<{type: string, setType: Function, startAGame: Function}> = ({type, setType, startAGame}) => {
    return (
        <div className={styles.startGame}>
            <div>
                <h1>Choose category</h1>
                <div className={styles.options}>
                    <div
                        className={`${type === 'football' ? styles.activeOption : null}`} 
                        onClick={()=>setType('football')}
                    >
                        Football Club
                    </div>
                    <div 
                        className={`${type === 'europe' ? styles.activeOption : null}`} 
                        onClick={()=>setType('europe')}
                    >
                        Capital City
                    </div>
                </div>
                
                <div className={styles.button}>
                    <button onClick={() => startAGame()}>
                        Start Game
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StartGame
