

function outcome() {
    let num1 = document.getElementById('num-one').value
    let num2 = document.getElementById('num-two').value
    let adicionar = document.getElementById('box1')
    let subtrair = document.getElementById('box2')
    let multi = document.getElementById('box3')

    let total = 0
    let labelResultado = document.getElementById('resultArea')

    if(document.getElementById('box1').checked) {
        total = num1 + num2
    } else if(document.getElementById('box2').checked) {
        total = num1 - num2
    } else if(document.getElementById('box3').checked) {
        total = num1*num2
    } else {
        total = num1/num2
    }
    labelResultado.innerHTML = 'Result: ' + total 
}