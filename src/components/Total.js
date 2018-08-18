import React from 'react';

class Total extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="row">
        <div className="col s8 offset-s6">
          <span className="col s8">ESTIMATED TOTAL*</span>
          <span>${this.props.total_price}</span>
          <div style={{paddingLeft: '11px'}}>Tax will be applied during checkout</div>
        </div>
      </div>
    );
  }
}

export default Total;
