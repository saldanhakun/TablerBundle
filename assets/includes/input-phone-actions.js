/***
 * Código para acionamento de campos de telefone (Ligação e Whatsapp)
 */

document.querySelectorAll('.js-mobile-input-call, .js-mobile-input-chat').forEach(link => {
    let input = link.parentElement.parentElement.querySelector('input');
    input.addEventListener('change', e => {
        let numbers = e.target.value.replaceAll(/\D/g, '');
        if (numbers.length < 7) {
            link.setAttribute('disabled', 'disabled');
            link.classList.add('disabled');
            link.setAttribute('href', '#');
        }
        else {
            link.removeAttribute('disabled');
            link.classList.remove('disabled');
            if (link.classList.contains('js-mobile-input-chat')) {
                link.setAttribute('href', 'https://api.whatsapp.com/send?phone=55' + numbers);
            }
            if (link.classList.contains('js-mobile-input-call')) {
                link.setAttribute('href', 'tel:0' + numbers);
            }
        }
    });
    input.dispatchEvent(new Event('change'));
})
