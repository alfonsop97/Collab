
document.querySelector('#BMI').addEventListener('click', calculate)

function calculate(){
    let heightVal = document.querySelector('#height').value
    let weightVal = document.querySelector('#weight').value
    let BMI = ((weightVal/(heightVal*heightVal)) * 703)
    document.querySelector('#BMIVal').innerHTML = BMI.toFixed(2) 
}




