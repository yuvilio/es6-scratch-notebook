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


Let's try another component

This time we'll use a class that extends React.Component to help us set up the component. (this used to be done using the React.createClass() method call. )                                                    

<pre><code class="language-js">
// 001-heyapp2.jsx
import React from 'react'

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

<!---
<pre><code class="language-js">

</code></pre>
--->
