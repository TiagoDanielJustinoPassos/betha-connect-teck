/*export default (props, { $update }) => {
const btnEl = document.querySelector('.btn');

function gerarOrdemserve() {
    alert("Acessou!!");
    document.getElementById('ordem_nomecliente').innerHTML = document.getElementById('nomecliente').value;
    document.getElementById('ordem_email').innerHTML = document.getElementById('email').value;
    document.getElementById('ordem_telefone').innerHTML = document.getElementById('telefone').value;
    document.getElementById('ordem_cpf_cnpj').innerHTML = document.getElementById('cpf_cnpj').value;
    document.getElementById('ordem_identidade').innerHTML = document.getElementById('identidade').value;
    document.getElementById('ordem_endereco').innerHTML = document.getElementById('endereco').value;
    document.getElementById('ordem_dado_aparelho').innerHTML = document.getElementById('dado_aparelho').value;
    document.getElementById('ordem_defeito').innerHTML = document.getElementById('defeito').value;
    document.getElementById('ordem_analise_tecnica').innerHTML = document.getElementById('analise_tecnica').value;
    document.getElementById('ordem_total').innerHTML = parseFloat(document.getElementById('total').value).toLocaleString('pt-br', {minimumFractionDigits: 2});
    document.getElementById('ordem_data').innerHTML = dataAtual();
    window.print();
    console.log('Função gerarOrdemserve foi chamada!');
   // var checkboxEl = document.querySelector('#comfimaos');
//checkboxEl.indeterminate = true;
}
function dataAtual() {
    let data = new Date();
    return data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();
}

btnEl.addEventListener('click',gerarOrdemserve);
}*/