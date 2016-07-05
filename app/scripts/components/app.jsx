var React = require('react');
var Backbone = require('backbone');
var MenuCollection = require('../models/menu').MenuCollection;
var CartCollection = require('../models/cart').CartCollection;


var Cart = React.createClass({
  render: function(){
    var self = this;

    var cartItemList = this.props.cartItems.map(function(model){
      return <li key={model.cid}>{model.get('title')} {model.displayPrice()}
        <button onClick={function(){self.props.handleRemoveFromCart(model)}}>remove to Cart</button>
      </li>
    });
    return(
      <div>
      <ul>
        {cartItemList}
      </ul>
      Cart Total: {this.props.cartItems.getCartTotal()}
    </div>
    );
  }
});

var Menu = React.createClass({
  render: function(){
    var self = this;

    var menuItemList = this.props.menuItems.map(function(model){
      return <li key={model.cid}>{model.get('title')} {model.displayPrice()}
        <button onClick={function(){self.props.handleAddToCart(model)}}>Add to Cart</button>
      </li>
    });
    return(
      <ul>{menuItemList}</ul>
    );
  }
});

var AppComponent = React.createClass({
  getInitialState: function(){
    return {
      menuItems: [],
      cartItems: []
    }
  },
  componentWillMount: function(){
    var menuItems = new MenuCollection();
    var cartItems = new CartCollection();

    menuItems.add([
      {title:'Pad Thai', price: 800},
      {title:'Green Curry', price: 900},
    ]);

    this.setState({
      'menuItems': menuItems,
      'cartItems': cartItems
    });
  },
  handleAddToCart: function(model){
    this.state.cartItems.add(model);
    this.forceUpdate();
  },
  handleRemoveFromCart: function(model){
    this.state.cartItems.remove(model);
    this.forceUpdate();
  },
  render: function(){
    return(
      <div>
        <Menu handleAddToCart={this.handleAddToCart} menuItems={this.state.menuItems}/>
        <Cart handleRemoveFromCart={this.handleRemoveFromCart} cartItems={this.state.cartItems}/>
      </div>
    );
  }
});

module.exports = AppComponent;
