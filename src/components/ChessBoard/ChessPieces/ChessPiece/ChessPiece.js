import React from 'react'
import styles from './ChessPiece.module.scss'

import blackBishop from '../../../../assets/Chess_bdt60.png'
import whiteBishop from '../../../../assets/Chess_blt60.png'
import blackKing from '../../../../assets/Chess_kdt60.png'
import whiteKing from '../../../../assets/Chess_klt60.png'
import blackKnight from '../../../../assets/Chess_ndt60.png'
import whiteKnight from '../../../../assets/Chess_nlt60.png'
import blackPawn from '../../../../assets/Chess_pdt60.png'
import whitePawn from '../../../../assets/Chess_plt60.png'
import blackQueen from '../../../../assets/Chess_qdt60.png'
import whiteQueen from '../../../../assets/Chess_qlt60.png'
import blackRook from '../../../../assets/Chess_rdt60.png'
import whiteRook from '../../../../assets/Chess_rlt60.png'
import empty from '../../../../assets/empty.png'


const ChessPiece = (props) => {
    let image
    switch(props.pieceId.substring(0,2)){
        case 'br':
            image = blackRook
            break;
        case 'wr':
            image = whiteRook
            break;
        case 'bb':
            image = blackBishop
            break;
        case 'wb':
            image = whiteBishop
            break;
        case 'bk':
            image = blackKing
            break;
        case 'wk':
            image = whiteKing
            break;
        case 'bn':
            image = blackKnight
            break;
        case 'wn':
            image = whiteKnight
            break;
        case 'bq':
            image = blackQueen
            break;
        case 'wq':
            image = whiteQueen
            break;
        case 'bp':
            image = blackPawn
            break;
        case 'wp':
            image = whitePawn
            break;
        default: 
            image = empty
    }
    
    
    return(
        <img 
            src={image} 
            className={styles.ChessPiece} 
            key={props.pieceId} 
            alt={`Chesspiece for ${props.pieceId}`}
            onClick={(e)=>props.selected(e, props.index)}
        />
    )
}



export default ChessPiece
