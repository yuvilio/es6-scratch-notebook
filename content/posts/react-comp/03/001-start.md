---
title: 001 start
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
    <h1>Hey there!</h1>,
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


<!---
<pre><code class="language-js">

</code></pre>
--->
