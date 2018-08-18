import React from "react";
import Total from './Total';
import Shipping from './Shipping';

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shipping_fees: '0',
      current_sub_total: this.props.sub_total
    }
  }

  componentWillReceiveProps() {
    this.handleShippingFees();
  }

  handleShippingFees() {
      // console.log(this.state.current_sub_total);
    this.setState({shipping_fees: (this.state.current_sub_total<50 ? '$15':'Free')}, ()=> {
      this.handleTotalPrice(this.state.shipping_fees);
    });
  }

  handleTotalPrice(shipping_fees) {
    let sub_total = this.props.sub_total;
    let current_shipping_fee_status = this.state.shipping_fees;
    this.setState({total_price: current_shipping_fee_status==='Free'?sub_total:sub_total+15})
  }

  render() {
    return (
      <div className="row">
        <div className="col s8 offset-s6">
          <span className="col s8">SUB TOTAL</span>
          <span>${this.props.sub_total}</span>
        </div>
        <Shipping shipping_fees={this.state.shipping_fees}/>
        <Total total_price={this.state.total_price}/>
      </div>

    );
  }
}

export default Footer;
