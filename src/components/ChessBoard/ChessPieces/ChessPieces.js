import React from 'react'

import ChessPiece from './ChessPiece/ChessPiece'

const ChessPieces = props => {
    const pieces = props.position.map((row)=>(
        <div>
            {
                row.map((piece)=>{
                    console.log(toString(piece))
                    return (
                    <ChessPiece pieceId={piece}/>
                )})
            }
        </div>
       
    ))
    return (
        pieces
    )
}

export default ChessPieces
