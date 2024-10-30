
// Carrega o formulário
const formularioCEP = document.getElementById('formularioCEP');

// Cria o evento de submit do formulário
formularioCEP.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém o CEP digitado pelo usuário
    const cep = formularioCEP.cep.value;

    // Verifica se o CEP possui 8 dígitos
    if (cep.length !== 8) {
        alert('CEP inválido. Por favor, digite um CEP válido.');
        return; // Early return (retorno antecipado)
    }

    // Chama a função para buscar o CEP
    buscarCEP(cep);
});

function buscarCEP(cep) {
    // URL da API do ViaCEP
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // Faz uma solicitação HTTP para a API do ViaCEP
    fetch(url)
        // Se tiver sucesso, converte em JSON
        .then(response => response.json())
        
        // Exibe os dados na tela
        .then(dados => {
            // console.log(dados);
            formularioCEP.logradouro.value = dados.logradouro;
            formularioCEP.bairro.value = dados.bairro;
            formularioCEP.localidade.value = dados.localidade;
            formularioCEP.estado.value = dados.estado;
            formularioCEP.regiao.value = dados.bairro;
        });
}
