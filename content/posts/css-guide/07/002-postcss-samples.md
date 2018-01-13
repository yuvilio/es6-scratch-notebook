---
title: css-guide - 002 postcss
collection: posts
layout: pages/css-guide/07/002-postcss-samples.nunj
excerpt:
---

Basic formatting
-------
testsz

Let's try out a few postcss features available to us.

## post-css nested

Dig how scss lets you nest rules for child elements within parents ? It's also availalbe for css courtesy of plugins like [postcss-nested](https://github.com/postcss/postcss-nested).


<div class="pa2 w5 ex-001-nested">
  <div class="title">This is a title for ex-001-nested</div>
  <div class="blurb">
    Feel free to look the html over <span>!</span>
  </div>
</div>

Here is the css we wrote to style that box:

<pre><code class="language-css">
  .ex-001-nested {
    border: 1px solid white;

    span {
      color: tomato;
    }
  }

</code></pre>

Notice the `span` is nested with the `.ex-001-nested`.
Let's look at the resulting transformed css `/css-guide/assets/css/main.css`

<pre><code class="language-css">
.slug-002-postcss-samples .ex-001-nested {
    border: 1px solid white;
  }

.slug-002-postcss-samples .ex-001-nested span {
      color: tomato;
  }
</code></pre>

notice the generated result is of non nested styles. more broadly compatible with css.

The module that handles that is [postcss-nested](https://github.com/postcss/postcss-nested) within your `postcss.config.js` file.

<pre><code class="language-js">
  const  postcss_nested=require("postcss-nested"),

  // ..

  module.exports = {
      plugins:[
          // ...
          postcss_nested(),
          // ..
      ]
  }
</code></pre>

if you remove that module from the `postcss.config.js`, and run the generator the resulting generated css is no longer nested:



<pre><code class="language-css">

  .slug-002-postcss-samples {

  	.ex-001-nested {
  		border: 1px solid white;

  		span {
  			color: tomato;
  		}
  	}

  }
</code></pre>
