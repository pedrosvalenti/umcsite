// Script para alternar a visibilidade do box de informações
document.addEventListener('DOMContentLoaded', function() {
    const infoBoxToggle = document.getElementById('infoBoxToggle');
    const infoBox = document.getElementById('infoBox');

    infoBoxToggle.addEventListener('click', function() {
        if (infoBox.style.display === 'none' || infoBox.style.display === '') {
            infoBox.style.display = 'block';
            infoBoxToggle.textContent = 'Fechar';
        } else {
            infoBox.style.display = 'none';
            infoBoxToggle.textContent = 'Saiba Mais';
        }
    });
});