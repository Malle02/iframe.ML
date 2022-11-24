const input_1 = document.getElementById('t1')
const input_2 = document.getElementById('t2')

const addition = document.getElementById('addition')
const soustraction = document.getElementById('soustraction')
const multiplication = document.getElementById('multiplication')
const division = document.getElementById('division')

const parité = document.getElementById('parité')
const permuté = document.getElementById('permuté')

const resultat = document.getElementById('resultat')

addition.addEventListener('click', (e) => {
    resultat.innerText = Number (t1.value) + Number(t2.value)
})

soustraction.addEventListener('click', (e) => {
    resultat.innerText = Number (t1.value) - Number(t1.value)
})

multiplication.addEventListener('click', (e) => {
    resultat.innerText = Number (t1.value) * Number(t2.value)
})
division.addEventListener('click', (e) => {
    resultat.innerText = Number (t1.value) / Number(t2.value)
})

parité.addEventListener('click', () => {
    if((Number (t1.value) + Number(t2.value)) % 2 == 0){
        resultat.innerText = "votre calcule est paire"
    }
    else{
        resultat.innerText = "votre calcule est inpaire"
    }
})
permuté.addEventListener('click', () => {

    let permuté = document.getElementById('t1').value
    
    document.getElementById('t1').value = document.getElementById('t2').value
    document.getElementById('t2').value = permuté;
})