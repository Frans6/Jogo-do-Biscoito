const btnTry = document.querySelector('#buttonCookie')
const btnReset = document.querySelector("#buttonNoCookie")
const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')

function handleTryClick(){
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")

}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleTryClick)