import React from 'react'

const StartButton: React.FunctionComponent<{startGame: Function, styles: any}> = ({startGame, styles}) => {
    return (
        <div className={styles}>
            <button onClick={() => startGame()}>Start game</button>
        </div>
    )
}

export default StartButton