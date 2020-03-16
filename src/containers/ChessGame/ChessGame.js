import React, { Component } from 'react'
import ChessBoard from '../../components/ChessBoard/ChessBoard'



class ChessGame extends Component {
    state = {
        positions : [
            ['br1', 'bn1', 'bb1', 'bq', 'bk', 'bb2', 'bn2', 'br2'],
            ['bp1', 'bp2', 'bp3', 'bp4', 'bp5', 'bp6', 'bp7', 'bp8'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['wp1', 'wp2', 'wp3', 'wp4', 'wp5', 'wp6', 'wp7', 'wp8'],
            ['wr1', 'wn1', 'wb1', 'wq', 'wk', 'wb2', 'wn2', 'wr2']
        ],
        selected: false
    }

    select = (e, index) =>{
        console.log(e.target)
        e.persist();
        if (!this.state.selected){
            if(!this.state.positions[index[0]][index[1]])
                return
            e.target.style.backgroundColor = "blue"
            this.setState(state=>(
                {
                    selected: {
                        piece: state.positions[index[0]][index[1]],
                        index,
                        img: e.target
                    }
                }
            ))
        }
        else{
            const prevPiece = this.state.selected.img
            prevPiece.style.backgroundColor = "none"
            const posi = this.state.positions
            posi[this.state.selected.index[0]][this.state.selected.index[1]] = ''
            posi[index[0]][index[1]] = this.state.selected.piece
            this.setState(
                {
                    selected: false,
                    positions: posi
                }
            )
        }
    }

    render() {
        
        return (
            <ChessBoard 
                position= {this.state.positions}
                selected = {this.select}
            />
        )
    }
}

export default ChessGame