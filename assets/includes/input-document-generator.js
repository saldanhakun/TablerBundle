/***
 * Código para auxiliar a geração de documentos nos cadasotrs (em DEV)
 */

async function devGenerateDocument(link) {
    let result = null;
    try {
        const response = await fetch(link.getAttribute('data-remote') ?? link.getAttribute('href'), {
            method: 'POST',
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        result = await response.json();
        link.setAttribute('data-bs-original-title', link.getAttribute('data-backup-title'));
        link.classList.remove('text-danger');
    } catch (error) {
        link.setAttribute('data-bs-original-title', error.message);
        link.classList.add('text-danger');
        console.error(error.message);
    }
    return result;
}

document.querySelectorAll('.js-cnpj-randomizer, .js-cpf-randomizer').forEach(link => {
    link.setAttribute('data-backup-title', link.getAttribute('data-bs-original-title'));
    link.addEventListener('click', e => {
        let input = link.parentElement.parentElement.querySelector('input');
        if (!input.getAttribute('disabled') && !input.getAttribute('readonly')) {
            let response = devGenerateDocument(link);
            if (input && input.ok) {
                input.value = response.full;
            }
        }
    });
})
