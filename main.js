const form = document.getElementById('form-contatos');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function (e){
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
})

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome');
    const inputNumeroContato = document.getElementById('telefone');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato de ${inputNomeContato.value} já foi adicionado na sua agenda`);
    } else{
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;
    }

    nomes.push(inputNomeContato.value);
    numeros.push(parseInt(inputNumeroContato.value));
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

