const form  = document.getElementById('form-atividade');
const imgAprovado='<img src="./images/aprovado.png" alt="Emoji Celebrando"/>'; 
const imgReprovado='<img src="./images/reprovado.png" alt="Emoji triste"/>'; 
let linhas='';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima para aprovação"));

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

    //alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);
});
function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atv');
    const inputNotaAtividade = document.getElementById('nota-atv');
    
    if (atividade.includes(inputNomeAtividade.value)){
        alert (`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    }else{
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        linhas +=linha;
    };
    inputNomeAtividade.value='';
    inputNotaAtividade.value='';

}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    
}
function atualizaMediaFinal(){
    const media = calculaMediaFinal();
    document.getElementById('media-valor').innerHTML = media.toFixed(2);
    document.getElementById('media-resultado').innerHTML = media >= notaMinima ? spanAprovado : spanReprovado;
}
function calculaMediaFinal(){
    let somaDasNotas = 0;
    for (let i=0; i < notas.length; i++){
        somaDasNotas += notas[i];
        
    }
    return somaDasNotas/notas.length;
}