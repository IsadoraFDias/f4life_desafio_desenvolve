const form = document.getElementById('formulario');
const erro = document.getElementById('erro');
const email = /^([a-zA-Z0-9\.]{1,32})@([a-z0-9]{1,16})\.(com)$/;

function validaEmail(campo, regex) {
    if (regex.test(campo.value)) {
        return true;
    } else
        return false;
}

form.addEventListener('submit', (evento) => {

    var alerta = [];

    const cadastroEmail = document.querySelector('.email');
    const extensaoTexto = document.querySelector('textarea').value.length;

    if (!(validaEmail(cadastroEmail, email))) {
        alerta.push('Erro no envio: Endereço de email inválido');
    } else {
        if (extensaoTexto) {
            const usuario = cadastroEmail.value.split('@');
            alerta.push(`Obrigado pelo contato, ${usuario[0]}!`);
        } else
            alerta.push('Erro no envio: Insira uma mensagem');
    }

    if (alerta.length > 0) {
        evento.preventDefault();
        form.reset();
        erro.innerText = alerta.join();
    }
})