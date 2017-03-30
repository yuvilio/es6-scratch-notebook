---
title: 002 arrow
collection: posts
layout: pages/basic-es6/01/002-arrow.nunj
excerpt: A
---


[Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
==============

shorthand for a function
<pre><code class="language-js">
let getPrice = () => 2.45 // shorthand for anonmyous function. no 'function' wrapping or 'returns'
  // says this function returns 2.45
console.log( typeof getPrice) // its a 'function' type
console.log( 'getPrice(): ', getPrice() ) //2.45


</code></pre>

* what if we want to pass arguments to the function?

<pre><code class="language-js">
let getPriceArgs = (count, added) => count * 3.00 + added // passing arguments to the function
console.log('getPriceArgs(2, 4): ', getPriceArgs(2, 4)) // 10
</code></pre>

no parentheses needed if it's just one parameter


* what if i need more than one line for my code?

<pre><code class="language-js">
let getPriceBlock = (count, taxed) => { //add {} when needing more than one line of code
  let price = count * 2
  if (taxed){
    price *= 1.055
  }
  return price //you'll need the return if using a block for the function
}
console.log('getPriceBlock(5, true): ', getPriceBlock(5, true)) //10.55
</code></pre>


* this index

<a href="#" class="btn btn-arrow">Click here</a>


<pre><code class="language-js">
let invoice = {
  number: 123,
  process: function () {
    console.log('invoice this: ', this)
  }
}
invoice.process() //you get the object literal(invoice)

let invoiceProcessArrow = {
  number: 123,
  process: () => console.log('invoiceProcessArrow.process(): ', this)
}
invoiceProcessArrow.process() //context o the code (document object or Window)

</code></pre>

* no more re-assigning the 'this' context via bind/call/apply
