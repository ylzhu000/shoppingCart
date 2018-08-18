import React from "react";

class Shipping extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="row">
        <div className="col s8 offset-s4">
          <span className="col s8">ESTIMATED SHIPPING*</span>
          <span>{this.props.shipping_fees}</span>
          <div style={{paddingLeft: '11px'}}>You qualify for free free shipping beacuse your order is over $50</div>
        </div>
      </div>
    );
  }
}

export default Shipping;
