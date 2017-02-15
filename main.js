
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! dont't click me so hard")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
})

var backgroundState = {
	showing: true
}

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
var circleStateBackColor = document.querySelector("#circle-bw")

if (backgroundState.showing) {
	circleStateBackColor.style.background = 'black'
	backgroundState.showing = false 
}
 else{
 	circleStateBackColor.style.background = 'white'
 	backgroundState.showing = true
 }

})


document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
var redCircle = document.querySelector('.circle-red')
var styleCircle = window.getComputedStyle(redCircle) 
var doubleWidth = parseInt(styleCircle.width) * 2
var doubleHeight = parseInt(styleCircle.height) * 2
var originalState = parseInt(styleCircle.width.height) / 2


redCircle.style.width = doubleWidth + "px"
redCircle.style.height = doubleHeight + "px"

if(doubleWidth > 340) {
    redCircle.style = originalState + "px"
  } 

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

  var ulNode = document.querySelector('#userList')
  var liArray = ulNode.children
     for(var i = liArray.length-1; i>=0; i--) {
       if(liArray[i].classList.contains('inactive')) {
         ulNode.removeChild(liArray[i])
       }
     }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})