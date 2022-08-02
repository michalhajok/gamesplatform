import { faHandPaper, faHandRock, faHandScissors } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from '@/styles/rockPaperScissors.module.scss'


const DuringTheGame: React.FunctionComponent<{round: Number, yourChoose: any, enemyChoose: any, result: String, setResultRound: Function, nextRound: Function, isRoundEnd: Boolean, gameRounds: Number, setStageOfGame: any}> 
= 
({round, yourChoose, enemyChoose, result, setResultRound, nextRound, isRoundEnd, gameRounds, setStageOfGame}) => {

    const style = () => {
        switch (result) {
            case 'win':
                return styles.winOption
            case 'draw':
                return styles.drawOption
            case 'lose': 
                return styles.loseOption
            default:
                break;
        }
    }
    
    return (
        <div className={styles.duringGame}>
                <div className={styles.boardHeader}>
                    <h2>The opponent&apos;s board</h2>
                </div>           
                <div className={styles.enemyBoard}>
                    <div className={`${enemyChoose===1 ? style() : ''}`}>
                        <FontAwesomeIcon icon={faHandRock} size='3x' />
                    </div>
                    <div className={`${enemyChoose===2 ? style() : ''}`}>
                        <FontAwesomeIcon icon={faHandPaper} size='3x' />
                    </div>
                    <div className={`${enemyChoose===3 ? style() : ''}`}>
                        <FontAwesomeIcon icon={faHandScissors} size='3x' />
                    </div>
                </div>
                
                <div className={styles.header}>
                    <h1>{`Round ${round} of ${gameRounds}`}</h1>
                </div>
                
                <div className={`${styles.yourBoard} ${yourChoose === "" ? styles.inGame : ''}`}>
                    <div onClick={() => setResultRound('1')} className={`${yourChoose === '1' ? style() : ''}`}>
                        <FontAwesomeIcon icon={faHandRock} size='3x' />
                    </div>
                    <div onClick={() => setResultRound('2')} className={`${yourChoose === '2' ? style() : ''}`} >
                        <FontAwesomeIcon icon={faHandPaper} size='3x' />
                    </div>
                    <div onClick={() => setResultRound('3')} className={`${yourChoose === '3' ? style() : ''}`}>
                        <FontAwesomeIcon icon={faHandScissors} size='3x'  />
                    </div>
                </div>
                <div className={styles.boardHeader}>
                    <h2>Your Board</h2>
                </div>
                
                <div className={styles.button}>
                    {
                        gameRounds === round && isRoundEnd ?
                            <button onClick={() => setStageOfGame('end')}>Finish the game</button>
                            :
                                isRoundEnd ?
                                <button onClick={() => nextRound()} >Next round</button>
                                :
                                <button className={styles.buttonNone}>&nbsp;</button> 
                    }
                </div>
        </div>
    )   
}

export default DuringTheGame
