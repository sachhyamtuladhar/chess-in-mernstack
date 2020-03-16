import React, { Component } from 'react'
import ChessBoard from '../../components/ChessBoard/ChessBoard'



class ChessGame extends Component {
    state = {
        positions : [
            ['br1', 'bn1', 'bb1', 'bq', 'bk', 'bb2', 'bn2', 'br2'],
            ['bp1', 'bp2', 'bp3', 'bp4', 'bp5', 'bp6', 'bp7', 'bp8'],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            ['wp1', 'wp2', 'wp3', 'wp4', 'wp5', 'wp6', 'wp7', 'wp8'],
            ['wr1', 'wn1', 'wb1', 'wq', 'wk', 'wb2', 'wn2', 'wr2']
        ]
    }
    render() {
        
        return (
            <ChessBoard position= {this.state.positions}/>
        )
    }
}

export default ChessGame