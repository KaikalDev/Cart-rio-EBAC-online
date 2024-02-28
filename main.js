const form = document.getElementById('form')
let linhas = ' ';
const Cpfs = [];
const notas = [];

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionalinha();
    atualizatabela();
})

function adicionalinha(){
    const nome = document.getElementById('Nome');
    const cpf = document.getElementById('Cpf');
    const cargo = document.getElementById('cargo');
    const tel = document.getElementById('tel');

    if (Cpfs.includes(cpf.value)) {
        alert(`O cpf ${cpf.value} já foi inserido`);
    } 
    else {
        Cpfs.push(cpf.value);

    let linha ='<tr>';
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${cpf.value}</td>`;
    linha += `<td>${cargo.value}</td>`;
    linha += `<td>${tel.value}</td>`;
    linha += '</tr>';

    linhas += linha
 }
    nome.value = '';
    cpf.value = '';
    cargo.value = '';
    tel.value = '';
   
}

function atualizatabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}