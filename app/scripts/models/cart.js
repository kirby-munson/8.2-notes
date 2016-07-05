var Backbone = require('backbone');
var MenuItem = require('./menu').MenuItem;


var CartCollection = Backbone.Collection.extend({
  model: MenuItem,
  getCartTotal: function(){
    var price = this.reduce(function(memo, model){
      return memo + model.get('price');
    }, 0);
    return '$' + (price / 100).toFixed(2);
  }
});

module.exports = {

  'CartCollection': CartCollection
};
