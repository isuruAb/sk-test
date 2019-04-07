import React, { Component } from 'react';

class Seat extends React.Component {
    render() {
      return <div className="seat">{this.props.seat+1}</div>;
    }
}
export default Seat;