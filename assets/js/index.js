var number = 0

function increment() {
number = number + 1
document.getElementById("number").innerHTML = number

    if (number >= 10) {
        document.getElementById("number").innerHTML = number;
        document.getElementById("aumentar").disabled = true
        document.getElementById("diminuir").disabled = false
    }
    else {
        document.getElementById("aumentar").disabled = false
        document.getElementById("diminuir").disabled = false
    }
   
}
function decrement() {
number = number - 1
document.getElementById("number").innerHTML = number 

    if (number <= 0) {
        document.getElementById("number").innerHTML= number; 
        document.getElementById("diminuir").disabled = true
        document.getElementById("aumentar").disabled = false

}
    else {
        document.getElementById("diminuir").disabled = false
        document.getElementById("aumentar").disabled = false
    }
}