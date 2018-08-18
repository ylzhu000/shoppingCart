import React from 'react';
import Popup from 'reactjs-popup';

const imgStyle = {
  height: "270px",
  width: "200px",
}

class Edit extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Popup
          trigger={<a className="waves-effect"> Edit </a>}
          modal
          closeOnDocumentClick
      >
          <div className="row">
           <div className="col s6">
            <div className="container" style={{fontSize: "20px"}}>
              {this.props.current_product.name}
              <div style={{fontSize: "35px", paddingLeft: "50px"}}>
                <b>${this.props.current_product.price}.00</b>
              </div>
              <div >
                <select style={{display: 'block'}}>
                  {
                    this.props.current_product.size.map((size) => {
                      return (
                        <option value={size} key={size}>{size}</option>
                      );
                    })
                  }
                </select>
                <span>
                  <input type="number"/>
                </span>
              </div>
              <button style={{width: "100%", backgroundColor: "blue"}} className="btn waves-effect waves-light btn-large">Edit</button>
            </div>
           </div>
           <div className="col s6">
            <img src={this.props.current_product.img} style={imgStyle} alt={this.props.current_product.name}/>
           </div>
          </div>
      </Popup>
    );
  }
}

export default Edit;
