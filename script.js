const NovaTarefa = document.querySelector("[data-form-button]");

// const tarefa = document.querySelector("[data-form-input]");
// const Valor = tarefa.value;
// console.log(Valor)


// Evento
// Onde Vai acontecer - botao
// Qual evento vai aconecer - click
// O que vai acontecer - fui clicado - Açao

NovaTarefa.addEventListener('click', ()=> {
    const tarefa = document.querySelector("[data-form-input]");
    const Valor = tarefa.value;
    console.log(Valor)
});




















// function somar(num1,num2){
//     console.log(num1 + num2);
// }

// somar(10,10);

// const multiplicar = (num1,num2) => console.log(num1 * num2);
// multiplicar(11,11);


