---
title: css-guide - 002 postcss
collection: posts
layout: pages/css-guide/07/002-postcss-samples.nunj
excerpt:
---

Basic formatting
-------
testsz

Let's try out a few postcss features available to us. Postcss is great in allowing you to run various transformations on your css to add conveniences, or future css ability (transforming it to more current compatible css).

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

as always, there are alternative plugins with similar aims like [postcss-nesting](https://github.com/jonathantneal/postcss-nesting)

## Postcss Import

What allows us to take a css file and break it down to many files and so allowing them to import other files?

One approach, similar to scss, is [postcss-import](https://github.com/postcss/postcss-import)

You get to bring in .css files just like .scss files using imports.

<pre><code class="language-css">
  @import 'posts/_001-basic-formatting';
  @import 'posts/_002-postcss-samples';
</code></pre>


In `postcss.config.js`, you'll see the postcss-import plugin imported.

<pre><code class="language-js">
  const
      //..
      postcss_import=require("postcss-import"),
      //..

  module.exports = {
      plugins:[
      //..
          postcss_import(),
      //..
    ]
  }
</code></pre>

if you have it, then the generated file has css from the files imported. If you remove it and look at the  css `/css-guide/assets/css/main.css`, you'll see  the import directives there as is and their css, not brought in:

<pre><code class="language-css">

  @import 'posts/_001-basic-formatting';
  @import 'posts/_002-postcss-samples';
</code></pre>


## autoprefixer

Need to support browsers that still use a vendor prefix for some css properties? You can use autoprefixer. Though in recent years, it's usage [has shrunk](https://www.sitepoint.com/its-time-to-rethink-vendor-prefixes-in-css/
).


## postcss extend

need to define a common set of styles for reuring? Similar to scss extends? [postcss-extend](https://github.com/travco/postcss-extend) can help.

For example, here are two buttons that use almost the same css. why duplicate the common bit on both of them?

<a href="/" class="ex-002-btn">Fancy button</a>
<a href="/" class="ex-002-btn-2">Fancy button 2</a>


<pre><code class="language-css">
  /* similar to %ex-002-simple-button in scss . this can now be reused */
  @define-placeholder ex-002-simple-button {
  	border-style: solid;
  	border-width: 1px;
  	background: linear-gradient( 45deg, tomato 0%, wheat 100%);
  	border-image: linear-gradient( 45deg, tomato 0%, wheat 100%) 1 round;
  	color: black;
  	padding: 0.6em 1.6em;
  }


  	.ex-002-btn {
  		/* reuse that pseudoclass defined above */
  		@extend ex-002-simple-button;
  	}

  	.ex-002-btn-2 { /* another reuse with one adjustment */
  		@extend ex-002-simple-button;
  		padding: 1rem;
  	}
</code></pre>

If you look at the generated css , you'll see that the classes you used are now both associated with the common code. and the differences (1rem padding on the latter) are generated separately

<pre><code class="language-css">

  .slug-002-postcss-samples .ex-002-btn, .slug-002-postcss-samples .ex-002-btn-2{
	border-style: solid;
	border-width: 1px;
	background: linear-gradient( 45deg, tomato 0%, wheat 100%);
	border-image: linear-gradient( 45deg, tomato 0%, wheat 100%) 1 round;
	color: black;
	padding: 0.6em 1.6em;
}
.slug-002-postcss-samples .ex-002-btn-2 { /* another reuse with one adjustment */
		padding: 1rem;
	}
</code></pre>

As with other postcss polugins, simply add it to `postcss.config.js`

<pre><code class="language-js">
  const
      // ..
      postcss_extend=require("postcss-extend"),
      // ..

  module.exports = {
      plugins:[
          // ..
          postcss_extend(),
          // ..
      ]
  }

</code></pre>

If you remove it , the generated css keeps the @extend directives and hence the style reusage doesn't happen.

<pre><code class="language-css">

  .slug-002-postcss-samples .ex-002-btn {
  		/* reuse that pseudoclass defined above */
  		@extend ex-002-simple-button;
  	}

  .slug-002-postcss-samples .ex-002-btn-2 { /* another reuse with one adjustment */
  		@extend ex-002-simple-button;
  		padding: 1rem;
  	}
</code></pre>


## use css variables with postcss custom properties (aka [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables))

Wanna use the built in css variables? css [has a spec](https://www.w3.org/TR/css-variables-1/) for that and you can use postcss-custom-properties to make use of it now .
her postcss polugins, simply add it to `postcss.config.js`

<pre><code class="language-js">
  const
      // ..
      postcss_extend=require("postcss-extend"),
      // ..

  module.exports = {
      plugins:[
          // ..
          postcss_extend(),
          // ..
      ]
  }

</code></pre>

If you remove it , the generated css keeps the @extend directives and hence the style reusage doesn't happen.

<pre><code class="language-css">

  .slug-002-postcss-samples .ex-002-btn {
  		/* reuse that pseudoclass defined above */
  		@extend ex-002-simple-button;
  	}

  .slug-002-postcss-samples .ex-002-btn-2 { /* another reuse with one adjustment */
  		@extend ex-002-simple-button;
  		padding: 1rem;
  	}
</code></pre>


## use css variables with postcss custom properties (aka [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables))

Wanna use the built in css variables? css [has a spec](https://www.w3.org/TR/css-variables-1/) for that and you can use postcss-custom-properties to make use of it now .

<a href="/" class="ex-003-btn-var">Button using Var</a>

we changed the background color from hardcoded to variable (--btn-003-color) in this button

<pre><code class="language-css">

  /* defining variables in top level scop: */
  :root {
  	--btn-003-color: wheat;
  }

  	/* then using the variable, via the var() function, when needed */
  	.ex-003-btn-var  {
  		@extend ex-002-simple-button;
  		background: linear-gradient( 45deg, slateblue 0%, var(--btn-003-color) 100%);
  	}

</code></pre>


when looking at the generated css, you'll see the one using the variable (since it's css spec). but as a fallback before it, you'll see the hardcoded (generated) color (wheat) as a style. so older browsers will still render the color correctly :

<pre><code class="language-css">

  .slug-002-postcss-samples .ex-003-btn-var  {
  		background: linear-gradient( 45deg, slateblue 0%, wheat 100%);
  		background: linear-gradient( 45deg, slateblue 0%, var(--btn-003-color) 100%);
  	}
</code></pre>

To activate that plugin, just add it to `postcss.config.js` :

<pre><code class="language-js">
  const
      // ..
      postcss_custom_properties=require("postcss-custom-properties"),
      // ..

  module.exports = {
    // ..
          postcss_custom_properties({"preserve": true}),
          // ..
      ]
  }

</code></pre>

If you deacivate it, unsurprisingly, you only get the variable usage, without the handy fallback style for browsers that don't support variables:

<pre><code class="language-css">

  /* then using the variable, via the var() function, when needed */

  .slug-002-postcss-samples .ex-003-btn-var  {
  		background: linear-gradient( 45deg, slateblue 0%, var(--btn-003-color) 100%);
  	}
</code></pre>

it also works nice with `calc()`
<pre><code class="language-css">

  .ex-003-btn-var  {
    @extend ex-002-simple-button;
    background: linear-gradient( 45deg, slateblue 0%, var(--btn-003-color) 100%);
    font-size: calc(var(--btn-003-font-size) * 2);
  }
</code></pre>

// you get a nice variable value substitution in calc as well when the css is generated:
<pre><code class="language-css">


  .slug-002-postcss-samples .ex-003-btn-var  {
  		background: linear-gradient( 45deg, slateblue 0%, wheat 100%);
  		background: linear-gradient( 45deg, slateblue 0%, var(--btn-003-color) 100%);
  		font-size: calc(1.1rem * 2);
  		font-size: calc(var(--btn-003-font-size) * 2);
  	}
</code></pre>

## postcss-color-function


want something like scss's transparentize or other handy color adjustor functions?  It's available using the [css-color spec](https://drafts.csswg.org/css-color/#typedef-color-adjuster)'s color() function along with the a() (alpha ). [postcss-color-function](https://github.com/postcss/postcss-color-function) helps here . It works nicely with variables as well. Here's an example bor with a

<div class="pa2 w4 ex-005-colorbox">box with bg color from a variable and a bit of tranparency</div>

<pre><code class="language-css">
  .ex-005-colorbox {
    background: color(var(--btn-003-color)   a(90%));
    color: black;
  }
</code></pre>

## postcss-custom-media

Want to put your long media queries in variables? You can use [postcss-custom-media](https://github.com/postcss/postcss-custom-media).

<div class="pa2 w4 ex-006-colorbox">box with a different background in small browser width . resize to small to see color change</div>

<pre><code class="language-css">
  .ex-006-colorbox {
		background: color(var(--btn-003-color)   a(90%));
		color: black;
		/* define the media query and assign it to a variable */
		@custom-media --small-viewport (max-width: 30rem);

	 /* use the variable in a media query*/
		@media (--small-viewport) {
			background: tomato;
			color: white;
		}
	}
</code></pre>

unsurprisingly, the generated css just has the resuting media query , no variable in sight:
<pre><code class="language-css">

  @media (max-width: 30rem) {

  .slug-002-postcss-samples .ex-006-colorbox {
  			background: tomato;
  			color: white
  	}
  		}
</code></pre>

this plugin is found in `postcss.config.js`

remove it and the variable will show in the generated css, rather than the

<pre><code class="language-css">


  @media (--small-viewport) {

  .slug-002-postcss-samples .ex-006-colorbox {
  			background: tomato;
  			color: white
  	}
  		}
</code></pre>

## postcss-mixins

need a mixin function that accepts inputs and spits out styles, similar to scss mixins? [postcss-mixins](https://github.com/postcss/postcss-mixins) has you covered:

<div class="ex-006-box pa2 w5">
  <div class="box is-basic">
    this is a box styled from a mixin
  </div>
</div>
<pre><code class="language-css">
  /* define the mixin function you'll use, notice that variables are using dollar signs ($bg)
  as this plugin uses the postcss-simple-vars to implement it's functionality  */
  @define-mixin boxmx $bg, $border {
  	border-color: $border;
  	background-color: $bg;
  	@mixin-content; /* use whatever other styles were passed in via {} as last argument */
  }


	.ex-006-box {
		/* call the mixin you defined passing it arguments and styles as mixin-content */
		@mixin boxmx wheat, tomato {
		    border-style: dotted;
				border-width: 2px;
		}
	}
</code></pre>

resulting genereated css from that mixin call:

<pre><code class="language-css">

  .slug-002-postcss-samples .ex-006-box {
  		/* call the mixin you defined */
  		border-color: tomato;
  		background-color: wheat;
  		border-style: dotted;
  		border-width: 2px
  		/* use whatever other styles were passed in via {} as last argument */
  	}
</code></pre>

## postcss-color-hex-alpha

the color spec 4 features the [#RRGGBBAA or #RGBA hex notation](https://drafts.csswg.org/css-color/#hex-notation) . with [postcss-color-hex-alpha](https://github.com/postcss/postcss-color-hex-alpha), you can use it now.


<div class="pa2 w5 ex-007-rgba-hex-1">
  #9d90 Transparency of 0 (background color doesn't show)
</div>


<div class="pa2 w5 ex-007-rgba-hex-2">
#9d94 -   Transparency of 4  0.26667
</div>


<div class="pa2 w5 ex-007-rgba-hex-3">
  #9d9a  - Transparency of a 0.66667
</div>


<div class="pa2 w5 ex-007-rgba-hex-4">
  #9d9f - Transparency of f fully opaque (1)
</div>

## selectors4 not() and matches()

The [Selectors 4 spec](https://www.w3.org/TR/selectors4/#negation) is becoming more and more supported and comes with some updates to the not() and matches() functions. Some [details here](https://webdesign.tutsplus.com/tutorials/intriguing-css-level-4-selectors--cms-29499)


poscss can make using these available today. For example, here are four boxes and we'll select the not first or last children  for different border styles. the new `not()` takes a [selector list](https://caniuse.com/#feat=css-not-sel-list)

<div class="ex-007-boxes">
  <div class="ex-007-box pa2 mb2 w5">
    Ex07 box 1
  </div>

  <div class="ex-007-box pa2 mb2 w5">
    Ex07 box 2
  </div>

  <div class="ex-007-box pa2 mb2 w5">
    Ex07 box 3
  </div>

  <div class="ex-007-box pa2 w5">
    Ex07 box 4
  </div>
</div>

We did this with a `:not()` function that can now ake a list of multiple conditions:

<pre><code class="language-css">
  /* select middle items */
	.ex-007-box:not(:first-child, :last-child){
		border-image: linear-gradient( 120deg, wheat 0%, tomato 100%) 1 round;
		border-width: 3px;
	}
</code></pre>

The generated css is to more widely available grouping of not() conditions, allowing you to enjoy the elegance on your end:

<pre><code class="language-css">
  .slug-002-postcss-samples .ex-007-box:not(:first-child):not(:last-child){
  		border-image: linear-gradient( 120deg, wheat 0%, tomato 100%) 1 round;
  		border-width: 3px;
  	}
</code></pre>

How it's added to `postcss.config.js`:

<pre><code class="language-js">

  const
      // ..
      postcss_selector_not =require("postcss-selector-not"),
      // ..


  module.exports = {
    // ..

          postcss_selector_not(),
      // ..

      ]
  }

</code></pre>


On a similar selectors 4 spec vein, we have the `:matches()` function , leting you use fuzzier patterns to match wht to style. [postcss-selector-matches](https://github.com/postcss/postcss-selector-matches) helps here


<pre><code class="language-css">
  /*for this button, all states should have this color . */
	.ex-008-btn:matches(:hover, :focus, :active) {
	  color: #222;
	}
	/* all headings of sections or articles have this color */
	:matches(section, article) :matches(h1, h2, h3, h4, h5, h6) {
	  color: goldenrod;
	}
</code></pre>

<section>
  <p>this is a section</p>
  <h2>this is a header within a section. it's colored with golden rod</h2>
</section>

<article>
  <p>this is an article</p>
  <h4>It has a header as well, also colored with goldenrod</h4>

</article>


The generated css shows you the power of :matche. it allows you to save from having to repeat the selector or use nesting. handy, more compact, when you don't have to space out elements with nesting.

<pre><code class="language-css">

  .slug-002-postcss-samples .ex-008-btn:hover, .slug-002-postcss-samples .ex-008-btn:focus, .slug-002-postcss-samples .ex-008-btn:active {
  	  color: #222;
  	}

  .slug-002-postcss-samples section h1, .slug-002-postcss-samples article h1, .slug-002-postcss-samples section h2, .slug-002-postcss-samples article h2, .slug-002-postcss-samples section h3, .slug-002-postcss-samples article h3, .slug-002-postcss-samples section h4, .slug-002-postcss-samples article h4, .slug-002-postcss-samples section h5, .slug-002-postcss-samples article h5, .slug-002-postcss-samples section h6, .slug-002-postcss-samples article h6 {
  	  color: goldenrod;
  	}
</code></pre>

## media-minmax

The [CSS Media Queries Level 4 spec ](https://drafts.csswg.org/mediaqueries/#mq-range-context) tries to offer an alternative `min-width` and `max-width` in media queries instead using `width` along with comparisons (`<=`, `>=`, ..).

<div class="w5 pa2 ex-009-box">
  Here is a box where the background-color changes to tomato between 500px and 1000px width
</div>

<pre><code class="language-css">

  .ex-009-box {
		background-color: goldenrod;
		color: white;
		/* new minmax queries allow us to use width (rather than min-width and max-width) and use <=, >=,...*/
		@media screen and (width >= 500px) and (width <= 1000px) {
			background-color: tomato;
		}
	}
</code></pre>

The generated css reverts to min-width and max-width for easier acceptance.
<pre><code class="language-css">
  @media screen and (min-width: 500px) and (max-width: 1000px) {
    .slug-002-postcss-samples .ex-009-box {
    			background-color: tomato
    	}
  }
</code></pre>



Once this is common in all browsers this plugin can be removed  from `postcss.config.js`. until then it's added in the usual way

<pre><code class="language-js">
  const
  // ..
      postcss_mixins=require('postcss-mixins'); /*  use postcss-simple-vars */


  module.exports = {
      plugins:[
      // ..

          postcss_media_minmax(),
          // ..
      ]
  }

</code></pre>


## Custom selectors, variables as selectors

What if you could have css variables in your selectors? There's a [draft css spec](https://drafts.csswg.org/css-extensions/#custom-selectors) considering that. Wanna use it now? [postcss-custom-selectors](https://github.com/postcss/postcss-custom-selectors)

Here's an example that demonstrates variables working nicely as selectors , including with nesting and self reference (&amp;):

<div class="w5 pa2 ex-010-custom-selectors">
  <h2> Second level heading . underlined </h2>
  <p class="ph2">and a blurb that has side borders </p>
  <h3>Third level heading, also underlined </h3>
  <p class="ph2">and another blurb which also has side borders</p>
</div>

Here's how it uses the variable definition and usage as selector :

<pre><code class="language-css">
  /* define the variable (custom )*/
  @custom-selector :--heading  h1, h2, h3, h4, h5, h6;

  .ex-010-custom-selectors {
      /*  use the variable as selector (selectors in this case) */
      :--heading {
         border-bottom: 2px solid goldenrod;
         & + p {
            border-left: 2px solid goldenrod;
            border-right: 2px solid goldenrod;
        }
     }
  }
</code></pre>

Here is the generated css that you get . you basically get a loop through each selector and a generated selection. So a lot of bang for the buck , compactness wise:

<pre><code class="language-css">

  .slug-002-postcss-samples .ex-010-custom-selectors h1,
  .slug-002-postcss-samples .ex-010-custom-selectors h2,
  .slug-002-postcss-samples .ex-010-custom-selectors h3,
  .slug-002-postcss-samples .ex-010-custom-selectors h4,
  .slug-002-postcss-samples .ex-010-custom-selectors h5,
  .slug-002-postcss-samples .ex-010-custom-selectors h6 {
  				 border-bottom: 2px solid goldenrod;
  		 }

  .slug-002-postcss-samples .ex-010-custom-selectors h1 + p,
  .slug-002-postcss-samples .ex-010-custom-selectors h2 + p,
  .slug-002-postcss-samples .ex-010-custom-selectors h3 + p,
  .slug-002-postcss-samples .ex-010-custom-selectors h4 + p,
  .slug-002-postcss-samples .ex-010-custom-selectors h5 + p,
  .slug-002-postcss-samples .ex-010-custom-selectors h6 + p {
  						border-left: 2px solid goldenrod;
  						border-right: 2px solid goldenrod;
  				}
</code></pre>

As usual it's added, and removed via `postcss.config.js`

<pre><code class="language-js">
  const
  // ..
      postcss_custom_selectors=require('postcss-custom-selectors'); /*  use postcss-simple-vars */


  module.exports = {
      plugins:[
      // ..

          postcss_custom_selectors(),
          // ..
      ]
  }

</code></pre>

Some other postcss plugins worth looking at: [postcss-will-change](https://github.com/postcss/postcss-will-change).
