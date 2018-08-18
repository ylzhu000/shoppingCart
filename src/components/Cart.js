import React from 'react';
import Footer from './Footer';
import Edit from './EditPopup';

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       item1_total_price: 0,
       item2_total_price: 0,
       item3_total_price: 0,
       item4_total_price: 0,
       sub_total: 0,
       cartProducts: []
    }
  }

  componentWillMount() {
    // Update the product list immediately after first render
    let temp_prodcuts = [
      {
        "id": 1,
        "name": "Angular Framework Logo T-Shirt",
        "style": "MS13KT1906",
        "color": {
          "color1": "white",
          "color2": "black",
          "color3": "navy"
        },
        "price": 10,
        "qty": 1,
        "img": "/img/A.jpg",
        "size": ["small", "medium", "large"]
      },
      {
        "id": 2,
        "name": "Javascript T-Shirt",
        "style": "MS13KT1906",
        "color": {
          "color1": "white",
          "color2": "black",
          "color3": "navy"
        },
        "price": 15,
        "qty": 1,
        "img": "/img/js.jpg",
        "size": ["small", "medium", "large"]
      },
      {
        "id": 3,
        "name": "Software T-Shirt",
        "style": "MS13KT1906",
        "color": {
          "color1": "white",
          "color2": "black",
          "color3": "navy"
        },
        "price": 12,
        "qty": 1,
        "img": "/img/sd.jpg",
        "size": ["small", "medium", "large"]
      },
      {
        "id": 4,
        "name": "Winner T-Shirt",
        "style": "MS13KT1906",
        "color": {
          "color1": "white",
          "color2": "black",
          "color3": "navy"
        },
        "price": 20,
        "qty": 1,
        "img": "/img/winner.jpg",
        "size": ["small", "medium", "large"]
      }
    ]
    this.setState({cartProducts: temp_prodcuts });
  }

  // This function updates the total cost of each item, and send each item's subtotal to updateSubTotal for computing the subtotal
  handleChange(id, price, total_price, e) {
    if(e.target.value === '') {
      var input_value = 0;
    }else {
      var input_value = e.target.value;
    }
    console.log(input_value);
    if (id === 1) {
      // Since setState does't mutate immediately, we have to use call back to get latest update price of each item
      this.setState({item1_total_price: price * input_value}, ()=> {
        this.updateSubTotal(id, this.state.item1_total_price, this.state.item2_total_price, this.state.item3_total_price, this.state.item4_total_price);
      })
    }else if(id === 2) {
      this.setState({item2_total_price: price * input_value}, ()=> {
        this.updateSubTotal(id, this.state.item1_total_price,this.state.item2_total_price, this.state.item3_total_price, this.state.item4_total_price);
      })
    }else if (id === 3){
      this.setState({item3_total_price: price * input_value}, ()=> {
        this.updateSubTotal(id, this.state.item1_total_price, this.state.item2_total_price, this.state.item3_total_price, this.state.item4_total_price);
      })
    }else {
      this.setState({item4_total_price: price * input_value}, ()=> {
        this.updateSubTotal(id, this.state.item1_total_price, this.state.item2_total_price, this.state.item3_total_price, this.state.item4_total_price);
      })
    }
  }

  // This function is to remove the item from the table when Remove button is clicked
  handleRemoveItem(index, e) {
      console.log(index);
      let new_cartProducts = this.state.cartProducts
      new_cartProducts.splice(index, 1)
      this.setState({cartProducts: new_cartProducts})
  }

  // This function is to update the sub total when each item price is updated
  updateSubTotal(id, item1, item2, item3, item4) {
    let sub_total = item1 + item2 + item3 + item4;
    this.setState({sub_total: sub_total}, ()=> {
      // console.log(this.state.sub_total);
    });
  }

  render() {
    return (
      <div>
      <table className="highlight">
          <thead>
            <tr className="row">
              <td className="col s8">Total Items: {this.state.cartProducts.length} ITEMS</td>
              <td className="col s1">Size</td>
              <td className="col s2">QTY</td>
              <td className="col s1" style={{float: 'none'}}>Price</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.cartProducts.map((items, index) => {
                if (items.id === 1) {
                  var item_total_price = this.state.item1_total_price
                } else if (items.id === 2) {
                  item_total_price = this.state.item2_total_price
                } else if (items.id == 3){
                  item_total_price = this.state.item3_total_price
                } else {
                  item_total_price = this.state.item4_total_price
                }

                return (
                  <tr id={items.id} key={items.id} className="row">
                    <td className="col s8">
                      <img className="col s4" src={items.img} alt={items.style} style={{height: "120px", width:"150px"}}/>
                      <span className="col s4">
                        <b>{items.name}</b><br />
                        Style: {items.style}<br />
                        Color: <b>{items.color.color2}</b><br />
                        <Edit current_product={items}/> | X
                        <span>
                          <a className="waves-effect" onClick={(e) => this.handleRemoveItem(index,e)}>REMOVE</a>
                        </span> |
                        <span>
                          <a className="waves-effect"> SAVE FOR LATER</a>
                        </span>
                      </span>
                    </td>
                    <td className="col s1">S</td>
                    <td className="col s2"><input type="number" min="0" key={items.id} onChange={(e) => this.handleChange(items.id, items.price, item_total_price ,e)}/></td>
                    <td className="col s1" style={{float: 'none'}}>${item_total_price}</td>
                  </tr>
                )
              })
            }
          </tbody>
      </table>
        <Footer sub_total={this.state.sub_total} />
      </div>
    );
  }
}

export default Cart;
