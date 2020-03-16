import React from 'react'
import styles from './ChessBoard.module.scss'
import ChessPieces from './ChessPieces/ChessPieces'
import boardImage from '../../assets/chessboard.jpg'


const ChessBoard = (props) => {
    
   
   
    return (
        <div >
            <img src = {boardImage} alt="The chessboard"  className={styles.ChessBoard}  />
            <ChessPieces position={props.position} />
        </div>
    )
}

export default ChessBoard