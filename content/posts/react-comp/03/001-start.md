---
title: react-comp - 001 start
collection: posts
layout: pages/react-comp/03/001-start.nunj
excerpt:
---

Test react
-------

we can have react component attach to an container element, using [ReactDOM](https://facebook.github.io/react/docs/react-dom.html),
containing element we'll use:

<pre><code class="language-html">
<div id="heyApp01"></div>
</code></pre>

let's attach to it and render a simply html element
<pre><code class="language-js">
{
  // let's render a simple html element onto a react root node with jsx notation
  const root = document.querySelector('#heyApp01')
  ReactDOM.render(
    <h1 name='Nia'>Hey there!</h1>,
    root
  )
}
</code></pre>

renders:

<div id="heyApp01"></div>

That htmly looking bit is actually just [jsx](https://facebook.github.io/react/docs/introducing-jsx.html) (javascript expression), which is a markup friendly version of javascript (hence allowing javascript to be added to it, as we'll see later),

Let's try another component. we can look at two sorts of compnets, [function compnent and class component](https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components)

This time we'll use a class that extends React.Component to help us set up the component. (this used to be done using the React.createClass() method call. )

<pre><code class="language-js">
// 001-heyapp2.jsx
import React from 'react'

// component class
class Greeter extends React.Component {
  render () {
    // the component itself  is written in JSX (javascript expression)
    // notice its like html (we use the parenthes to span multiple lines)
    return (
      <div>
        <h1>Greetings Mananan</h1>
      </div>
    )
  }
}

export { Greeter }

</code></pre>

<pre><code class="language-js">
import { Greeter as Greeter2 } from './components/001-heyapp2.jsx'
// render our component
ReactDOM.render(
  <Greeter2 />,
  document.querySelector('#heyApp02')
)
</code></pre>

we'll attach it to this element
<pre><code class="language-html">
  <div id="heyApp02"></div>
</code></pre>

* results:

<div id="heyApp02"></div>

* we could also have gone with a function:

<pre><code class="language-js">
// 002-function-component.jsx
import React from 'react'

// component as function. it just is the render function
export let Greeter = (props) => {
  return (
    <div>
      <h1>Greetings Mananan</h1>
      <p>I'll go clean the kitchen</p>
    </div>
  )
}

</code></pre>

<pre><code class="language-js">
import { Greeter as GreeterFunc } from './components/002-function-component.jsx'
// components also come in function flavor
ReactDOM.render(
  <GreeterFunc />,
  document.querySelector('#heyApp03')
)
</code></pre>

let's hook it into this component holder:

<pre><code class="language-js">
  <div id="heyApp03"></div>
</code></pre>

* renders as :

<div id="heyApp03"></div>


We can guess why you'd want a compnent to be available in a few ways. If it's all a conduit for rendering, a function might make more sense.  If you need to use more storage machinery , a class that inherits methods and can have more methods added to it might make more sense. the render method can be used to display


* that jsx stuff is so strange looking  it looks like you have html right there in the javascript. how is that possible?

Well, remember a few things. you're running this code on top of a transpiler (babel, traceur, ..). so that's not the final state of the javascript before it hits the browser.  First noticed that, as it is js allows expressions close to  this already, so it's not a stretch. the () (`parentheses`) allows more liberal expressions


<pre><code class="language-js">
var f = () => { return (
"this expression",
is,
fine
) } // no complaints from the js interpreter

var g = () => { return (
"this expression \
ter"
) } // another one using multilined strings

var h = () => { return (
"<h1> \
hey there \
</h1>"
) } // as is this
</code></pre>

so as it is, javascript allows something close to jsx already. it's just that it still prefers having delimeters like quotes and \ in use with it. React adds some parsing sugar on top to declutter the js from those distracting elements allowing the expression to at once resemble js (we'll see more on that later) and markup at the same time.

so it's not a so have a look at an ealier example above. here's what the [jsx compiles to](https://facebook.github.io/react/docs/jsx-in-depth.html  o) by react + transpiler:

<pre><code class="language-js">

// look at me , i'm clean js inside a javascript function:
    ReactDOM.render(
      <h1 name='Nia'>Hey there!</h1>,
      root
    )
  )
</code></pre>

now have a look at the [resulting js](/assets/js/react-comp/03/001-start.js) :

<pre><code class="language-js">
// now i resemble a bunch of createElement (for the element <tags>) and {} (for the propperties they have)
  index$2.render(react.createElement(
    'h1',
    { name: 'Nia' },
    'Hey there!'
  ), root);
</code></pre>

The transpiler parsed that js and turned it into more familiar js

passing arguments
===

* Can we pass arguments to components?

Sure. one approach is via attributes which get stored in `this.props` of that component object

<pre><code class="language-js">
// 003-props.jsx
import React from 'react'

export let Greeter = (props) => {
  let name = props.name // would be this.props.name if using component class ratherh than function

  // to use a javascript expression, place it in `{}`
  return (
    <div>
      <h1>Greetings {name}</h1>
      <p>I'll go feed the chickens</p>
    </div>
  )
}

</code></pre>

<pre><code class="language-js">
  ReactDOM.render(
    <GreeterProps name='Wizard Mananan' />,
    document.querySelector('#heyApp04')
  )
</code></pre>

<pre><code class="language-html">
<div id="heyApp04"></div>

</code></pre>

<div id="heyApp04"></div>

* How does passing prop values work with classes?

The props are available  in the instance object (`this`). Let's try passing them to the React commponent via attribute (name=) and pick it up from the object (this.name):

<pre><code class="language-js">
// 003-props.jsx
class GreeterPropClass extends React.Component {
  render () {
    // props passed in by component are available to the instance object
    let name = this.props.name

    return (
      <div>
        <h1>DNA sequencing for: {name} </h1>
        <p>*File Closed*</p>
      </div>
    )
  }
}

export { GreeterPropClass }

</code></pre>
<pre><code class="language-js">
ReactDOM.render(
  <GreeterPropClass name='Nigel Rancid' />,
  document.querySelector('#heyApp05')
)
</code></pre>

<div id="heyApp05"></div>

* what if i want the component to have some default props to use (even when the calling component doesn't pass any props).

You can use [defaultProps](https://facebook.github.io/react/docs/react-without-es6.html#declaring-default-props)



<pre><code class="language-js">
// 003-props.jsx
class GreeterDefaultProps extends React.Component {
  render () {
    // props passed in by component are available to the instance object
    let equipment = this.props.equipment

    return (
      <div>
        <h1>Stellar: you'll need this equipment:</h1>
        <p>{equipment.join(', ')}</p>
      </div>
    )
  }
}

// add default props as fallbacks to use
// just add it as a property of the component itself
GreeterDefaultProps.defaultProps = {
  equipment: ['cyberjack', 'headset']
}
</code></pre>

<pre><code class="language-js">
// notice we're not passing the component the 'equipment' prop that it uses
// that's ok. it has a default
ReactDOM.render(
  <GreeterDefaultProps />,
  document.querySelector('#heyApp06')
)
</code></pre>

<div id="heyApp06"></div>

Notice that despite not passing any props in our component, the equipment variable was populated ("cyberjack, headset"), thanks to defaultProps object.

* do defaultProps work with function components?

They sure do. Rember that in js, functions are objects, simply add that defaultProps proprty to the function


<pre><code class="language-js">
// 003-props.jsx
let GreeterFuncDefaultProps = (props) => {
  // to use a javascript expression, place it in `{}`
  return (
    <div>
      <h1>Now orbiting: </h1>
      <p>{props.station}}</p>
    </div>
  )
}

GreeterFuncDefaultProps.defaultProps = {
  station: 'Delta Burksilon V Colony'
}

export { GreeterFuncDefaultProps }
</code></pre>

<pre><code class="language-js">
ReactDOM.render(
  <GreeterFuncDefaultProps />,
  document.querySelector('#heyApp07')
)
</code></pre>

<div id="heyApp07"></div>


My component is in javascript too, can i pass props that are in variables, rather than literals?

Yep, simply use a javascript expression in single brackets

<pre><code class="language-js">

// 003-props.jsx
let GreeterFuncVariablePassed = (props) => {
  // to use a javascript expression, place it in `{}`
  return (
    <div>
      <h1>Your quarters location: </h1>
      <p>{props.quartersLocation}</p>
    </div>
  )
}

export { GreeterFuncVariablePassed }

</code></pre>

<pre><code class="language-js">

  // let's pass a property value from a variable this time, rather than a string. we'll use a javascript
  // exppression in single brackets
  let yourQuarters = 'Converted Cargo Hold'
  ReactDOM.render(
    <GreeterFuncVariablePassed quartersLocation={yourQuarters} />,
    document.querySelector('#heyApp08')
  )
</code></pre>

<div id="heyApp08"></div>


The passed in `yourQuarters` variable rendered fine in the component

<!---
<pre><code class="language-js">

</code></pre>
--->
