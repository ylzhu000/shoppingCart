import React from 'react';
import Cart from './Cart';

const Style = {
  paddingLeft: "10px"
}
class App extends React.Component {
  render() {
    return(
      <div>
        <h4 style={Style}>YOUR SHOPPING CART</h4>
        <Cart />
      </div>
    );
  }
}

export default App;
