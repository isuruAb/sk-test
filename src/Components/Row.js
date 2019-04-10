import React, { Component } from 'react';
import Seat from './Seat'
class Row extends Component {
    render() {
  
      var row = []
      for (let index = 0; index < this.props.columns; index++) {
        row.push(<Seat key={index} passanger="1" seat={this.props.row_details[index]} />);
      }

      return <div className="row">{row}</div>;
    }
  }

export default Row;