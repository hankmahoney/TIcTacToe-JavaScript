var btn = document.querySelector("button")
var arr = document.querySelectorAll("td")
var count = 0
var X = []
var O = []
var toWin = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
]

arr.forEach(element => element.addEventListener('mousedown', function(){
  if(count%2==0 && element.innerText == ""){
    element.innerText = "X"
    X.push(element.id)
  }else if(element.innerText == ""){
    element.innerText = "O"
    O.push(element.id)
  }
  count++
}))

arr.forEach(element => element.addEventListener('mouseup', function(){
  if(checkResult(X)){
    alert("X WINS")
  }else if (checkResult(O)){
    alert("O WINS")
  }
}))

btn.addEventListener('click', function(){
  location.reload()
})

function checkResult(arr){
  var c = 0
  for (var i = 0; i < toWin.length; i++) {
    for (var j = 0; j < toWin[i].length; j++) {
      for (var k = 0; k < arr.length; k++) {
        if(Number(arr[k]) == toWin[i][j]){
          c++
        }
      }
      if(c == 3){
        return true
      }
    }
    c = 0
  }
  return false
}
