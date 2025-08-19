//Botao Excluir
const BotaoExcluir = ()=>{
    const criarBotao = document.createElement("button");
    criarBotao.classList.add("delete-button");
    criarBotao.innerText = 'Excluir';

    criarBotao.addEventListener('click',deletarTarefa);
    return criarBotao
}

const deletarTarefa = (evento) =>{
    const finalizar = evento.target;
    const tarefaExcluida = finalizar.parentElement;
    tarefaExcluida.remove();
}


export default BotaoExcluir;