let inputValue=document.getElementById('ButtonResult')
let zero=document.getElementById('number-0')
let one=document.getElementById('number-1')
let two=document.getElementById('number-2')
let three=document.getElementById('number-3')
let four=document.getElementById('number-4')
let five=document.getElementById('number-5')
let six=document.getElementById('number-6')
let seven=document.getElementById('number-7')
let Eight=document.getElementById('number-8')
let Nine=document.getElementById('number-9')
let plus=document.getElementById('number-plus')
let minus=document.getElementById('number-minus')
let Multiply=document.getElementById('number-multiply')
let Equal=document.getElementById('number-equal')
let RESET=document.getElementById('number-RESET')
let DEL=document.getElementById('number-DEL')


RESET.addEventListener('click',function(){
    inputValue.innerText=" "
})
zero.addEventListener('click',function(){
    inputValue.innerText=inputValue.innerText+0
})
one.addEventListener('click',function(){
    inputValue.innerText=inputValue.innerText+1
})
two.addEventListener('click',function(){
    inputValue.innerText=inputValue.innerText+2
})
three.addEventListener('click',function(){
    inputValue.innerText=inputValue.innerText+3
})
four.addEventListener('click',function(){
    inputValue.innerText=inputValue.innerText+4
})
five.addEventListener('click',function(){
    inputValue.innerText=inputValue.innerText+5
})
six.addEventListener('click',function(){
    inputValue.innerText=inputValue.innerText+6
})
seven.addEventListener('click',function(){
    inputValue.innerText=inputValue.innerText+7
})
Eight.addEventListener('click',function(){
    inputValue.innerText=inputValue.innerText+8
})
Nine.addEventListener('click',function(){
    inputValue.innerText=inputValue.innerText+9
})
DEL.addEventListener('click',function(){
    let PreviousInput=inputValue.innerText
    let currentInput=PreviousInput.slice(0,-1)
    inputValue.innerText=currentInput

    
})