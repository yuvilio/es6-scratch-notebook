document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 002-arrow ')

  let getPrice = () => 2.45 // shorthand for anonmyous function. no 'function' wrapping or 'returns'
    // says this function returns 2.45
  console.log(typeof getPrice) // its a 'function' type
  console.log('getPrice(): ', getPrice()) // 2.45

  let getPriceArgs = (count, added) => count * 3.00 + added // passing arguments to the function
  console.log('getPriceArgs(2, 4): ', getPriceArgs(2, 4)) // 10

  let getPriceBlock = (count, taxed) => { // add {} when needing more than one line of code
    let price = count * 2
    if (taxed) {
      price *= 1.055
    }
    return price // you'll need the return if using a block for the function
  }
  console.log('getPriceBlock(5, true): ', getPriceBlock(5, true)) // 10.55

  // not set to element receiving the event. it's set to the context of the code
  // document.addEventListener('click', () => { console.log(this) } )  //global context . Undefind or maybe Window object
  document.querySelector('.btn-arrow').addEventListener('click', () => console.log(this))  // global context . Undefind or maybe Window object

  let invoice = {
    number: 323,
    process: function () {
      console.log('invoice this: ', this)
    }
  }
  invoice.process() // you get the object literal(invoice)

  let invoiceProcessArrow = {
    number: 323,
    process: () => console.log('invoiceProcessArrow.process(): ', this)
  }
  invoiceProcessArrow.process() // context o the code (document object or Window)

  let getPrice2 = () => 2.45
  console.log('getPrice2.hasOwnProperty(\'prototype\')', getPrice2.hasOwnProperty('prototype')) // chrome might still show true but that may be in flux. try it in a node console and you'll get false
})
