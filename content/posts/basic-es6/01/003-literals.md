---
title: 003 literals
collection: posts
layout: pages/basic-es6/01/003-literals.nunj
excerpt:
---


*  Object literals now allow variables that match object keys to automatically populate an object with values for those keys:

<pre><code class="language-js">
let name = 'Stellar'
let title = 'Executive Offer'
let crewman = {
  name,
  title
}
console.log(crewman) // {name: "Stellar", title: "Executive Offer"}
</code></pre>


* similarly functions ofthis object don't need a key: function(){} . format. just use the name right away and skip the colon:

<pre><code class="language-js">
{
  let name = 'Stellar'
  let title = 'Executive Offer'
  let crewman = {
    name,
    title,
    announce () {
      return this.title + ' ' + this.name + ', reporting for duty!'
    }
  }
  console.log(crewman.announce()) // Executive Offer Stellar, reporting for duty!
}
</code></pre>

note that the shorthand can be overwritten :

<pre><code class="language-js">
{
  let name = 'Stellar'
  let title = 'Executive Offer'
  let crewman = {
    name: 'Wilco',
    title: 'Janitor Second Class',
    announce () {
      return this.title + ' ' + this.name + ', reporting for duty!'
    }
  }
  console.log(crewman.announce()) // Executive Offer Stellar, reporting for duty!
  console.log(name, title); // Stellar Executive Offer
}
</code></pre>

can function names have spaces? special charachters?

<pre><code class="language-js">
{
  let name = 'Stellar'
  let title = 'Executive Offer'
  let crewman = {
    name,
    title,
    'announce yourself' () { // function name can be a phrase
      return this.title + ' ' + this.name + ', reporting for duty! emojy'
    }
  }
  // use [] notation for functions with spaces
  console.log(crewman['announce yourself']()) // Executive Offer Stellar, reporting for duty!
}
</code></pre>

* This allows emojis

<pre><code class="language-js">
{
  let name = 'Stellar'
  let title = 'Executive Offer'
  let crewman = {
    name,
    title,
    '🎙' () { // using a microphone emoji as function name
      return this.title + ' ' + this.name + ', reporting for duty!'
    }
  }
  // use [] notation for functions with special charachters like emojis
  console.log(crewman['🎙']()) // Executive Offer Stellar, reporting for duty!
}
</code></pre>

* can the property name be dynamic as well? or a method name?

yep, use [] in it's definition to use one from a variable . simiarly use [] to refer to it within the object. similarly, methods :

<pre><code class="language-js">
{
  let field = 'name' // dynamic property name
  let methodField = 'announce'
  let name = 'Stellar'
  let crewman = {
    [field]: name,
    [methodField + '01'] () {
      // using dynamic property name with brackets
      return this[field] + ', reporting for duty!'
    }
  }
  console.log(crewman[methodField + '01']()) // Stellar, reporting for duty!
}
</code></pre>

you can also adjust the field name with an expression so [field + '-02'] to be 'name-01' in this example


* do object literals provide conveniences to wrap properties with getters and setters?

They do. offering [get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and [set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

* here
<pre><code class="language-js">
{
  // i want to store the crew name plainly and keep track of it's order. i'll use an array and setter to manager it
  // getting wise, i want to get the number of the name along with the name when displaying. i'll use a getter
  let crew = {
    crew: [],
    get 'current' () { return this.crew.slice(-1)[0] },
    set 'current' (name) { this.crew.push(this.crew.length + ': ' + name) }
  }

  // notice the front end knows nothing about the array data structure nor that the data is available only
  // in the 'number: name' format i'm enforcing with my setter
  // to the outside, we're still just using '=' and overloading it's functionality
  crew.current = 'Stellar'
  console.log(crew.current) // 0: Stellar
  crew.current = 'Wilco'
  console.log(crew.current) // 1: Wilco
}
</code></pre>

* do dynamic field names work with gettsr and setters?

<pre><code class="language-js">

// can use a dynamic field name with getters and setters
{
  let field = 'current'
  let crew = {
    crew: [],
    get [field] () { return this.crew.slice(-1)[0] },
    set [field] (name) { this.crew.push(this.crew.length + ': ' + name) }
  }

  crew[field] = 'Stellar'
  console.log(crew.current) // 0: Stellar
  crew[field] = 'Wilco'
  console.log(crew.current) // 1: Wilco
}
</code></pre>
