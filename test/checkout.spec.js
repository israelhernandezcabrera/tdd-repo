const Checkout = require('../checkout.js');
var expect = require('chai').expect;

var checkoutInstance;

beforeEach(function() {
    checkoutInstance = new Checkout();
})
// Removed by refactoring
// it('Can instantiate checkout', function() {
//     var checkout = new Checkout();
// })

// it('Can add item price', function() {
//     checkoutInstance.addItemPrice('a', 1);
// })

// it('Can add item', function(){
//     checkoutInstance.addItemPrice('a', 1);
//     checkoutInstance.addItem('a');
// })

it('Can calculate the current total', function(){
    checkoutInstance.addItemPrice('a', 1);
    checkoutInstance.addItem('a');
    expect(checkoutInstance.calculateTotal()).to.equal(1);
});

it('Can add multiple items and get correct total', function(){
    checkoutInstance.addItemPrice('a', 1);
    checkoutInstance.addItemPrice('b', 2);
    checkoutInstance.addItem('a');
    checkoutInstance.addItem('b');
    expect(checkoutInstance.calculateTotal()).to.equal(3);
});

it('Can add discount rule', function(){
    checkoutInstance.addDiscount('a', 3, 2);
});

it('Can apply discount rules to the total', function(){
    checkoutInstance.addDiscount('a',3,2);
    checkoutInstance.addItemPrice('a', 1);
    checkoutInstance.addItem('a');
    checkoutInstance.addItem('a');
    checkoutInstance.addItem('a');
    expect(checkoutInstance.calculateTotal()).to.equal(2);
});

it('Throws when item added with no price', function(){
    expect(function() {checkoutInstance.addItem('c')}).to.throw();
});