document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Defina seu nome de usuário e senha aqui
    const adminUsername = 'admin'; // Nome de usuário do administrador
    const adminPassword = 'senha123'; // Senha do administrador

    if (username === adminUsername && password === adminPassword) {
        // Se as credenciais estiverem corretas, redirecione para admin.html
        window.location.href = 'admin.html';
    } else {
        // Se as credenciais estiverem incorretas, exiba uma mensagem de erro
        document.getElementById('error').innerText = 'Usuário ou senha incorretos.';
    }
});
