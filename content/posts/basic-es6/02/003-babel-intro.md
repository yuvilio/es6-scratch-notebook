---
title: basic-es6 - 003 babel intro
collection: posts
layout: pages/basic-es6/02/003-babel-intro.nunj
excerpt:
---

Babel intro

What's babel ? It's a javascript parser and transformer ( sometimes called a transpiler). The idea is that you write javascript with the syntax you want (newer syntax with various notations that are not fully supported) and you dictate the resulting javascript, to an older broader supporting javascript, or perhaps a semi older  somewhat newer version. Depending on various considerations.

There are a lot of transpilers out there. Why use babel?

Babel has a following similar to [postcss](). It's appeal is in it's modularity and plugins. You can dictate which transformations you want to happen and leave out the ones you don't. It has an extensive set of plugins that  


How can i test what a transform does?

There are a few approaches. One is to just install the babel cli globally and then add plugins to it (via a flag or the `.babelrc` file )

<pre><code class="language-bash">
  $ npm install -g babel-cli
</code></pre>

Let's test this out via flag or config file with our first plugin:

## Arrow functions

Want to use es6 arrow functions but need to make sure older browsers still work?
[transform-es2015-arrow-functions](https://babeljs.io/docs/plugins/transform-es2015-arrow-functions/) is one approach. it'll transpile functions back to older js function syntax.

Install the plugin to your project's modules.

<pre><code class="language-bash">
$ npm install --save-dev babel-plugin-transform-es2015-arrow-functions
</code></pre>

Let's give it a go with two shorthand es6 js functions . the first the simplest. and the second taking an argument

<pre><code class="language-js">
001-arrow-functions.js
let a = () => {};
let a2 = (b) => b;
</code></pre>

We'll use the --plugins flag to invoke the transformation we want to use.

the result is a friendlier es5 compatible version that older browsers can run.

<pre><code class="language-bash">
$ babel --plugins transform-es2015-arrow-functions 001-arrow-functions.js
let a = function () {};
let a2 = function (b) {
  return b;
};
$
</code></pre>

It can get tiresome to add the plugins in a flag. also, some of these plugins take configuration arguments. It'd be nice if we can invoke the plugins from a config file. That's where the `.babelrc` file comes in. it's presens in the directory is used by the babel command

<pre><code class="language-bash">
$ cat .babelrc
{
  "plugins": ["transform-es2015-arrow-functions"]
}
$
</code></pre>

invoking babel, automatically uses that file and so that plugin:

<pre><code class="language-bash">
$ babel  001-arrow-functions.js
let a = function () {};
let a2 = function (b) {
  return b;
};

$
</code></pre>


## validate const declarations

Need to validate that your es6 constant (`const`) declarations are written correctly?  [check-es2015-constants](https://babeljs.io/docs/plugins/check-es2015-constants/) can help.

<pre><code class="language-js">
// 002-check-const.js
const a = 1;
a = 2; //this should trigger an error. constants values are not allowed to be adjusted
</code></pre>


Running the transform on that triggers the validaor to spot the error:
<pre><code class="language-js">
$ babel 002-check-const.js
SyntaxError: 002-check-const.js: "a" is read-only
  1 | const a = 1;
> 2 | a = 2; //this should trigger an error. constants values are not allowed to be adjusted
    | ^
  3 |
$
</code></pre>

Of course, if you didn't try to change the constant, there would be no error:

<pre><code class="language-bash">
$ cat 002-check-const.js
const a = 1;
$ babel 002-check-const.js
const a = 1;

$
</code></pre>

## Make the  rest and spred operators available in es5

One approach to that is the [transform-object-rest-rest](https://babeljs.io/docs/plugins/transform-object-rest-rest/) plugin .

So recall  how
<pre><code class="language-js">
// 003-transform-rest.js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // assigned the  value the object maps to it
console.log(z); // gets assigned the the remaining values as an object { a: 3, b: 4 }
</code></pre>

Here's the the rest operator gives you. handy for a function processing a flexible amount of  passed parameters. you pass in an object and variables can be easily assigned values from that object, in mappings of your choice

<pre><code class="language-bash">
$ node 003-transform-rest.js
1
{ a: 3, b: 4 }
$
</code></pre>

that's neat but what if you need that rest to work in older browsers ?


<pre><code class="language-bash">
$ cat .babelrc
{
  "plugins": ["transform-object-rest-spread"]
}
$
$ babel 003-transform-rest.js
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

let _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 },
    { x, y } = _x$y$a$b,
    z = _objectWithoutProperties(_x$y$a$b, ["x", "y"]);
console.log(x); // assigned the  value the object maps to it
console.log(z); // gets assigned the the remaining values as an object { a: 3, b: 4 }

$

</code></pre>
_._


That function with the for loop in it achieves the spread operator Let's confirm it
<pre><code class="language-bash">
$ babel 003-transform-rest.js
$ babel 003-transform-rest.js > es5-output-003-transform-rest.js
$ node es5-output-003-transform-rest.js
1
{ a: 3, b: 4 }
$

</code></pre>


same output. as expected.

That plugin can also demonstrate some spread usages . for example. suppose you're copying an object while partially replacing some of the values. `spread` makes this less messy

<pre><code class="language-js">
// 004-transform-spread.js
// you can use a spread to quickly grab key/value mappings from an object
let z = { x: 1, y: 2, a: 3, b: 4 };
let n = {  ...z , x: 'hey', b: ['what'] }; //selectively overwrite some of the values
console.log(n); // { x: 'hey', y: 2, a: 3, b: [ 'what' ] }
$

</code></pre>

Running this code:, we see the new object with new values for some of it's keys

<pre><code class="language-bash">
$ node 004-transform-spread.js
{ x: 'hey', y: 2, a: 3, b: [ 'what' ] }
$

</code></pre>

what if we need this to work on an older browser?

<pre><code class="language-bash">
$ cat .babelrc
{
  "plugins": ["transform-object-rest-spread"]
}
$
$ babel 004-transform-spread.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// you can use a spread to quickly grab key/value mappings from an object
let z = { x: 1, y: 2, a: 3, b: 4 };
let n = _extends({}, z, { x: 'hey', b: ['what'] }); //selectively overwrite some of the values
console.log(n); // { x: 'hey', y: 2, a: 3, b: [ 'what' ] }

$
</code></pre>
_._

You get this nice function that does the mapping in es5 friendly code. Let's check that it works as expected:
<pre><code class="language-bash">
$ babel 004-transform-spread.js  > es5-output-004-transform-spread.js
$ node es5-output-004-transform-spread.js
{ x: 'hey', y: 2, a: 3, b: [ 'what' ] }
$
</code></pre>
