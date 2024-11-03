const form = document.getElementById('form-numbers');
const primeiroNumero = document.getElementById('number1');
const segundoNumero = document.getElementById('number2');
let formularioValido = false;

function validarForm(segundoNumero){
    const valorSegundoNumero = segundoNumero.value;
    return valorSegundoNumero > primeiroNumero.value;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const regraValidada = `Acertou! O segundo número é maior que o primeiro!`;
    const regraNaoDescoberta = 'A regra é: O <b>segundo número</b> deve ser maior que o primeiro!';

    formularioValido = validarForm(segundoNumero);
    const mensagemDeAcerto = document.querySelector('.success-mesage');
    const mensagemDeErro = document.querySelector('.error-message');
    
    if (formularioValido){
        mensagemDeAcerto.innerHTML = regraValidada;
        mensagemDeAcerto.style.display = 'block';
        
        primeiroNumero.value = '';
        segundoNumero.value = '';
        mensagemDeErro.style.display = 'none';  // Oculta a mensagem de erro, caso esteja visível
    } else {
        primeiroNumero.style.border = '2px solid red';
        mensagemDeErro.innerHTML = regraNaoDescoberta;
        mensagemDeErro.style.display = 'block';
        mensagemDeAcerto.style.display = 'none';  // Oculta a mensagem de sucesso, caso esteja visível
    }
}); 

segundoNumero.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formularioValido = validarForm(e.target.value);

    if (!formularioValido){
        primeiroNumero.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        primeiroNumero.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});