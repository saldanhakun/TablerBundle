/***
 * Código para acionamento de campos de e-mail (Envio e validação)
 */

document.querySelectorAll('.js-email-input-send, .js-email-input-validate').forEach(link => {
    let input = link.parentElement.parentElement.querySelector('input');
    input.addEventListener('change', e => {
        let email = e.target.value.trim().toLowerCase(),
            emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.match(emailPattern)) {
            link.removeAttribute('disabled');
            link.classList.remove('disabled');
            if (link.classList.contains('js-email-input-send')) {
                link.setAttribute('href', 'mailto:' + email);
            }
        }
        else {
            link.setAttribute('disabled', 'disabled');
            link.classList.add('disabled');
            link.setAttribute('href', '#');
        }
    });
    input.dispatchEvent(new Event('change'));
})
