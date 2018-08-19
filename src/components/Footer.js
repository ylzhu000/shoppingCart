import React from "react";

const priceStyle = {
  color: "#ef5350"
}

const noteStyle = {
  paddingLeft: "11px", 
  color: "#9e9e9e"
}

class Footer extends React.Component {
  render() {
    let current_sub_total = this.props.sub_total;
    if (current_sub_total === 0 ) {
      var shipping_fees = '$0';
    } else {
      shipping_fees = this.props.sub_total < 50 ? '$15':'Free';
    }

    if (shipping_fees === '$15') {
      var total = current_sub_total + 15;
    } else {
      total = current_sub_total;
    }

    return (
      <div className="row">
        <div className="col s8 offset-s6">
          <span className="col s8">SUB TOTAL</span>
          <span style={priceStyle}>${this.props.sub_total}</span>
        </div>
        <div className="row">
          <div className="col s8 offset-s6">
            <span className="col s8">ESTIMATED SHIPPING*</span>
            <span style={priceStyle}>{shipping_fees}</span>
            <div style={noteStyle}>You qualify for free free shipping beacuse your order is over $50</div>
          </div>
        </div>
        <div className="row">
          <div className="col s8 offset-s6">
            <span className="col s8">ESTIMATED TOTAL*</span>
            <span style={priceStyle}>${total}</span>
            <div style={noteStyle}>Tax will be applied during checkout</div>
          </div>
        </div>
      </div>

    );
  }
}

export default Footer;
