var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`)
  return cart;  
}


function viewCart() {
  let message = "In your cart, you have"
  let collection = []
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for(let i = 0; i < cart.length; i++) {
      let item_name = Object.keys(cart[i])[0]
      collection.push(`${item_name} at $${cart[i][item_name]}`)
    }
    if(collection.length === 2) {
      collection = collection.join(' and ')
    } else if (collection.length >= 3) {
      collection[collection.length - 1] = `and ${collection[collection.length - 1]}`
      collection = collection.join(", ")
    }
  }
  console.log(`${message} ${collection}.`)
}


function total() {
  let total = 0
  for(let i = 0; i < cart.length; i++) {
    let item_name = Object.keys(cart[i])[0]
    total += cart[i][item_name]
    }
  return total
}


function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i][item]) {
      return cart.splice(i, 1)
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}