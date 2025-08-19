//Botao Concluido
const BotaoConcluido = ()=> {
    const criarBotao = document.createElement("button");
    criarBotao.classList.add("check-button");
    criarBotao.innerText = 'Concluir';

    criarBotao.addEventListener('click',concluirTarefa)
    return criarBotao;
} 

const concluirTarefa = (evento) =>{
    const finalizar = evento.target; // button => button
    const tarefaCompleta = finalizar.parentElement;
    tarefaCompleta.classList.toggle('done'); //Devolve True or False

}

export default BotaoConcluido;