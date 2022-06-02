let parag = document.querySelector('.parag')

function clicar() {
    parag.innerHTML = ' ';
    var num1 = prompt('Coloca o primeiro numero por gentileza');
    var num2 = prompt('Coloca o segundo numero por gentileza');
    if (num1 > num2) {
        parag.innerHTML = 'Os numeros analizados foram '+num1+' e o '+num2+' e o '+num1+' é maior';
    } else if (num1 < num2) {
        parag.innerHTML = 'Os numeros analizados foram '+num1+' e o '+num2+' e o '+num2+' é maior';
    } else {
        parag.innerHTML = 'Seus numeros são iguais';
    }
}
