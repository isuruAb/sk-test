import React, { Component } from 'react';
import './App.css';

class Seat extends React.Component {
  render() {
    return <div className="seat">1</div>;
  }
}

class Row extends React.Component {
  render() {
    var doc = []
    for (let i = 0; i < this.props.columns; i++) {
      doc.push(Seat);
    }
    const row = doc.map((Element, index) => {
      return <Element key={index} passanger="1" />
    });
    return <div className="row">{row}</div>;
  }
}
class Block extends React.Component {
  render() {
    var doc = []
    for (let i = 0; i < this.props.blocks[0]; i++) {
      doc.push(Row);
    }
    const block = doc.map((Element, index) => {
      return <Element key={index} columns={this.props.blocks[1]} />
    });
    return <div className="block">{block}</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: []
    }
  }

  render() {
    var arr = [[2, 3], [3, 4], [3, 2], [4, 3]];
    var max_row_len = arr[0][0];
    var aisle_seat_coord = [];
    var window_seat_coord = [];
    var center_seat_coord = [];

    arr.forEach(function (element) {
      if (element[0] > max_row_len) {
        max_row_len = element[0];
      }
    });
    for (let row = 0; row < max_row_len; row++) {
      for (let block = 0; block < arr.length; block++) {
        let block_col = arr[block][1];
        let block_row = arr[block][0];

        // if sector still has rows
        if (row < block_row) {
          // leftmost sector
          if (block === 0) {
            aisle_seat_coord.push({ block: block, row: row, col: block_col - 1 });
            window_seat_coord.push({ block: block, row: row, col: 0 });
            for (let j = 1; j < block_col - 1; j++) {
              center_seat_coord.push({ block: block, row: row, col: j })
            }
          }
          else if (block === arr.length - 1) {
            aisle_seat_coord.push({ block: block, row: row, col: 0 });
            window_seat_coord.push({ block: block, row: row, col: block_col - 1 });
            for (let j = 1; j < block_col - 1; j++) {
              center_seat_coord.push({ block: block, row: row, col: j })
            }
          }
          else {
            aisle_seat_coord.push({ block: block, row: row, col: 0 });
            aisle_seat_coord.push({ block: block, row: row, col: block_col - 1 });

            for (let j = 1; j < block_col - 1; j++) {
              center_seat_coord.push({ block: block, row: row, col: j })
            }
          }
        }
      }
    }
    var aisle_seat_coord_n=[]
    for(let i=0;i<aisle_seat_coord.length;i++){
      aisle_seat_coord_n.push({...aisle_seat_coord[i],seat_no:i});
    }
    var window_seat_coord_n=[]
    var tot_length=aisle_seat_coord_n.length+window_seat_coord.length;
    for(let i=aisle_seat_coord.length ,k=0;i<tot_length;i++,k++){
      console.log(tot_length,i,window_seat_coord.length)
      window_seat_coord_n.push({...window_seat_coord[k],seat_no:i});
    }
    var center_seat_coord_n=[];
    var tot_length_end=tot_length+center_seat_coord.length;
    for(let i=tot_length ,k=0;i<tot_length_end;i++,k++){
      center_seat_coord_n.push({...center_seat_coord[k],seat_no:i});
    }
    console.log("aisle_seat_coord",aisle_seat_coord_n);
    console.log("window_seat_coord",window_seat_coord_n);
    console.log("center_seat_coord",center_seat_coord_n);

var final_array=[...aisle_seat_coord_n,...window_seat_coord_n,...center_seat_coord_n]
console.log("final_array",final_array);
    var blocksArr = []
    for (let block = 0; block < arr.length; block++) {
      blocksArr.push(Block)
    }
    const blocks = blocksArr.map((Element, index) => {
      return <Element key={index} blocks={arr[index]} />
    });
    return <div className="airplane">

      <div className="block_wrapper">
        {blocks}
      </div>
    </div>
  }
}

export default App;
