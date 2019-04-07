import React, { Component } from 'react';

class Seat extends Component {
    render() {
      return <div className="seat">{(this.props.seat+1)===0?'':this.props.seat+1}</div>;
    }
}
export default Seat;