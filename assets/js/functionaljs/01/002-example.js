import katex from 'katex'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 002-example')


  //in babel the backslash is \\ https://github.com/babel/babel/issues/1550#issuecomment-102529176
   katex.render(`\\displaystyle \\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)`, document.querySelector('.latex-1'), {
        displayMode: true
    })

    //to avoid having to double up the \\, let's fetch the latex markup from the markup itself using a data attribute
    const el2 = document.querySelector('.latex-2');
    katex.render(el2.getAttribute('data-latex'), el2, {
         displayMode: true
     })


     const el3 = document.querySelector('.latex-3');
     document.querySelector('.latex-3').insertAdjacentHTML('beforeend', katex.renderToString( el3.getAttribute('data-latex') ))

})
