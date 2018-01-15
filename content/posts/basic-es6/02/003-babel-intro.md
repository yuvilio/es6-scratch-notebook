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
var a = () => {};
var a2 = (b) => b;
</code></pre>

We'll use the --plugins flag to invoke the transformation we want to use.

the result is a friendlier es5 compatible version that older browsers can run.

<pre><code class="language-bash">
$ babel --plugins transform-es2015-arrow-functions 001-arrow-functions.js
var a = function () {};
var a2 = function (b) {
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
var a = function () {};
var a2 = function (b) {
  return b;
};

$
</code></pre>
