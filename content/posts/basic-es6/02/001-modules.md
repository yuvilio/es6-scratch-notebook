---
title: 001 modules
collection: posts
layout: pages/basic-es6/02/001-modules.nunj
excerpt:
---

Modules
-------

Need to break up code to more manageable reusable chunks? One helper in that is the module. We can take a module and make it do something useful :

<pre><code class="language-js">
// './modules/test-module.js'
let greeting = 'hey there ' // this variable isn't exported.
// not available for use outside of this module

// this variable IS exported. available to imported by other files
// it uses it's internal valriable (greeting)
export let hello = `${greeting}, from this module variable`

</code></pre>

then we just `import` that useable bit in our files
<pre><code class="language-js">
import { hello } from './modules/test-module.js'


  // use a value fetched from a module
  console.log(hello) // hey there , from this module variable

</code></pre>




<!---
<pre><code class="language-js">

</code></pre>
--->
