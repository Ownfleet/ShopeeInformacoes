// Função para atualizar a tabela com os dados armazenados
function updateScaleTable() {
    const scaleBody = document.getElementById('scaleBody');
    scaleBody.innerHTML = ''; // Limpa a tabela

    // Obtém os dados do localStorage
    const escalas = JSON.parse(localStorage.getItem('escalas'));

    if (escalas) {
        // Itera sobre as escalas e cria as linhas da tabela
        escalas.forEach(scale => {
            const row = document.createElement('tr');
            const nome = scale[0] || ''; // Nome do motorista na coluna A
            const rota = scale[1] || ''; // Rota na coluna B

            row.innerHTML = `<td>${nome}</td><td>${rota}</td>`;
            scaleBody.appendChild(row);
        });
    } else {
        scaleBody.innerHTML = '<tr><td colspan="2">Nenhuma escala disponível.</td></tr>';
    }
}

// Atualiza a tabela ao carregar a página
document.addEventListener('DOMContentLoaded', updateScaleTable);
