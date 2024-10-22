document.getElementById('uploadBtn').addEventListener('click', function () {
    const fileInput = document.getElementById('uploadFile');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            // Converte a worksheet para JSON
            const escalas = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Armazena os dados no localStorage
            localStorage.setItem('escalas', JSON.stringify(escalas));
            alert('Escalas carregadas com sucesso!');
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert('Por favor, selecione um arquivo.');
    }
});
