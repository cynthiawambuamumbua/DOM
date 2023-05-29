document.getElementsByClassName('container');
let child=document.getElementById('container').children
console.log({child});
let lastchild= document.getElementById('container').lastChild
console.log(lastchild);
document.getElementById('hello').style.color ='red'
document.getElementById('hello').style.textDecoration ='underline'
document.getElementById('text').innerHTML ='hello my name is Cynthia mumbua iam 19 years old';
document.createElement('h2');
let h2 =document.createElement('h2')
h2.innerHTML='I am new here';
document.getElementById('container').appendChild(h2)
let button = document.getElementById('button');
button.addEventListener( 'click',function() {
    button.innerHTML = 'clicked &#128512 !!'
})