/***
 * Suporte a máscaras em formulários
 */
import IMask from 'imask'

document.querySelectorAll('input[data-mask]').forEach(input => {
    IMask(input, {mask: input.getAttribute('data-mask')});
})
