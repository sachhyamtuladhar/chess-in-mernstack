import React from 'react'

import ChessPiece from './ChessPiece/ChessPiece'

const ChessPieces = props => {
    const pieces = props.position.map((row,index1)=>(
        <div key={index1}>
            {
                row.map((piece,index2)=>{
                    return (
                        <ChessPiece 
                            pieceId={piece} 
                            key={ piece==='' ? (index1.toString()+ index2.toString()) : piece}
                            selected = {props.selected}
                            index={[index1, index2]}
                        />
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
