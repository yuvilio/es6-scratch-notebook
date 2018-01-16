---
title: react-comp - 002 events
collection: posts
layout: pages/react-comp/03/002-events.nunj
excerpt:
---

React events
-------

We can get to events in a bit but first a few more notes.


## composing components .

So far we've seen components acting alone. But that need not be the case. like html fragments, components can contain, or more precisely _refer to_ (and so use) other components

Here is a simple component
<pre><code class="language-js">

  // 004-compose.jsx
  // this is a simple component, it renders an h2 with a name in it
  export let CloakMember = (props) => {
    let name = props.name

    return (
      <h2>{name}</h2>
    )
  }

</code></pre>

<pre><code class="language-jsx">
  //  002-events.js

  ReactDOM.render(
    &lt;CloakMember name='Mordack' /&gt;,
    document.querySelector('#app01Compose')
  )

</code></pre>

<div class="app-box" id="app01Compose"></div>


Suppose we had a bunch of these names we wanted to render within a component. We could have that larger component render this smaller one. just reference it. We can include it in the jsx or render it before:


<pre><code class="language-js">

  // 004-compose.jsx
  // this is a simple component, it renders an h2 with a name in it
  export let CloakMember = (props) => {
    let name = props.name

    return (
      <h2>{name}</h2>
    )
  }

  // this is a a component that is composed with another component (CloakMember).
  class BlackCloakSociety extends React.Component {
    render () {
      let names = this.props.names.split(',')

      // this is the composition. We'll use the CloakMember component to render each name
      let listItems = names.map((name) =>
        &lt;CloakMember name={name} /&gt;
      )

      return (
        <ul>
          {listItems}
        </ul>
      )
    }
  }
</code></pre>

<pre><code class="language-jsx">
  // 002-events.js

  ReactDOM.render(
    &lt;BlackCloakSociety names='Mordack,Alhazred,Hagatha' /&gt;,
    document.querySelector('#app02Compose')
  )

</code></pre>

As expected the results are that the containing component renders including the component it's composed with:

<div class="app-box" id="app02Compose"></div>
