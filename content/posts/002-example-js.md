---
title: Ex 01
collection: posts
layout: pages/functionaljs/01/002-example.nunj
tags: dataviz, mneumonics
excerpt: Is visualization just another shortcut to access much data?
---

Visualizing is a powerful experience, unlike a linear read, One is presented with an entire picture. I typically find a figure daunting at first. Which part did the drawer want me to focus on? where should i be looking? am I getting what I need to be from this drawing?

<div class="latex-1">
</div>

The Latex:
<pre><code class="language-latex">\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)</code></pre>


Note that for babelrc if you're tryint to render latex in the atring literal, the backslash [requires escaping](https://github.com/babel/babel/issues/1550#issuecomment-102529176) (two )

so it ends up looking like this
<pre><code class="language-latex">
  katex.render(`\\displaystyle \\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)`, document.querySelector('.latex-1'), {
       displayMode: true
   })
</code></pre>



So a better approach is to fetch the latex latex 2: via data attribute. that way you can retain it as aa single slash. Here it is rendered via a data attribute:

<div class="latex-2" data-latex="\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)">
</div>


Here it is using the `renderToString()` function:

<div class="latex-3" data-latex="\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)">
</div>

image:
![mobius](/uploads/2017/02/mobius-sample-1.svg)
