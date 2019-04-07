import React, { Component } from 'react';
import Row from './Row'

class Block extends Component {
    render() {
  
  
      var doc = []
      for (let i = 0; i < this.props.blocks[0]; i++) {
        doc.push(Row);
      }
  
      let blockData = [];
      for (let j = 0; j < this.props.blocks[0]; j++) {
        let rowData = [];
  
        for (let k = 0; k < this.props.blocks[1]; k++) {
          for (let i = 0; i < this.props.seat_details.length; i++) {
  
            if (this.props.seat_details[i].row === j && this.props.seat_details[i].col === k) {
  
              rowData.push(this.props.seat_details[i].seat_no);
  
            }
          }
        }
        blockData.push(rowData);
      }
  
      const block = doc.map((Element, index) => {
        return <Element key={index} columns={this.props.blocks[1]} row_details={blockData[index]} />
      });
      return <div className="block">{block}</div>;
    }
  }
  export default Block
