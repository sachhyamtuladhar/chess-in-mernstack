import React from 'react'

import ChessPiece from './ChessPiece/ChessPiece'

const ChessPieces = props => {
    const pieces = props.position.map((row,index1)=>(
        <div key={index1}>
            {
                row.map((piece,index2)=>{
                    return (
                        <ChessPiece pieceId={piece} key={ piece===0 ? (index1.toString()+ index2.toString()) : piece}/>
                    )
                })
            }
        </div>
       
    ))
    return (
        pieces
    )
}

export default ChessPieces
