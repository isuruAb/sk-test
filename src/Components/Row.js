import React, { Component } from 'react';
import Seat from './Seat'
class Row extends Component {
    render() {
  
      var doc = []
      for (let i = 0; i < this.props.columns; i++) {
        doc.push(Seat);
      }
      const row = doc.map((Element, index) => {
        return <Element key={index} passanger="1" seat={this.props.row_details[index]} />
      });
      return <div className="row">{row}</div>;
    }
  }

export default Row;