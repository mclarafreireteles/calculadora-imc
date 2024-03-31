function form() {
    const form = document.querySelector('.form-imc');
    const idUsuario = document.querySelector('#imc-usuario-h3');
    const indicador = document.querySelector('#indicador');

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function receberEventoForm(evento) {
        evento.preventDefault();

        const pesoInput = document.querySelector('#peso');
        const alturaInput = document.querySelector('#altura');
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }

        const imc = calcularIMC(peso, altura);

        let indicadorUsuario;
        if (imc < 18.5) {
            indicadorUsuario = 'Abaixo do peso';
        } else if (imc < 25) {
            indicadorUsuario = 'Peso adequado';
        } else if (imc < 30) {
            indicadorUsuario = 'Sobrepeso';
        } else {
            indicadorUsuario = 'Obesidade';
        }

        indicador.textContent = indicadorUsuario;
        idUsuario.textContent = imc.toFixed(2);
    }

    form.addEventListener('submit', receberEventoForm);
}

form();