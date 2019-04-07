import React, { Component } from 'react';
import './App.css';
import Block from './Components/Block'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: []
    }
  }

  render() {
    var arr = [[2, 3], [3, 4], [3, 2], [4, 3]];
    var passengerCount = 30;
    var max_row_len = 0;
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
    var final_array_n = [];
    var final_array = [...aisle_seat_coord, ...window_seat_coord, ...center_seat_coord]
    for (let i = 0; i < final_array.length; i++) {
      if (i > passengerCount) {
        final_array_n.push({ ...final_array[i], seat_no: -1 })

      }
      else {
        final_array_n.push({ ...final_array[i], seat_no: i })

      }
    }
    var final_block_array = [];
    for (var k = 0; k < arr.length; k++) {
      var block = [];

      for (var i = 0; i < final_array_n.length; i++) {
        if (final_array_n[i].block === k) {
          block.push(final_array_n[i]);
        }
      }
      final_block_array.push(block);
    }

    var blocksArr = []
    for (let block = 0; block < arr.length; block++) {
      blocksArr.push(Block)
    }
    const blocks = blocksArr.map((Element, index) => {
      return <Element key={index} blocks={arr[index]} seat_details={final_block_array[index]} />
    });
    return <div className="airplane">
      <div className="block_wrapper">
        {blocks}
      </div>
    </div>
  }
}

export default App;
