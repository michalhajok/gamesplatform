
import styles from '@/styles/memory.module.scss'

const DuringGame: React.FunctionComponent<{chosen: any[], chooseCard: Function, isReverseCard: Function, card: any[], newGame: Function, correct: any[]}> = ({chosen, chooseCard, isReverseCard, card, newGame, correct}) =>  (
    <div className={styles.duringGame}>
        <div className={styles.gameBoard}>
            {
                card && card.map(({id, title, pair}: {id: string, title: string, pair: string}) => (
                    <div 
                        key={id}
                        onClick={() => chosen.length !== 2 ? chooseCard({id, title, pair}) : null }
                        className={styles.card}
                    >
                        <div 
                            className={`${styles.cardInner} ${ isReverseCard(id)}`} >
                            <div className={styles.cardBack}></div>
                            <div className={styles.cardFront} >
                                {title}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <>
            {
                card.length === correct.length ? 
                <div className={styles.button}>
                    <button onClick={() => newGame()}>
                        New Game
                    </button>
                </div>
                :
                null
            }
        </>

    </div>
    )

export default DuringGame
