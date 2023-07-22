//Clonando template
const clonarTemplate = () =>{
    const template = document.querySelector('.template');
    const novaTarefa = template.cloneNode(true);

    novaTarefa.classList.remove('hide');
    novaTarefa.classList.remove('template');

    return novaTarefa;

}

//Removendo tarefa atravez do this

const removerTarefa = (task) => {
    task.parentNode.remove();
}

//Concluindo tarefa atravez do this

const concluirTarefa = (task) => {
    const tagPai = task.parentNode;
    tagPai.classList.toggle("done");
    
}

//Adicionando tarefas a cada Enter

const adicionarTarefa = (evento) =>{
    if(evento.key == 'Enter'){
        const textoTarefa = document.getElementById('text-tarefa').value;

        if(textoTarefa.length != 0){
            const novaTarefa = clonarTemplate();
            const listaTarefas = document.querySelector('.container-tarefas');

            
            novaTarefa.querySelector('.task-title').textContent = textoTarefa;

            listaTarefas.appendChild(novaTarefa);

            document.getElementById('text-tarefa').value = ''

            //Ação de remover tarefa
            novaTarefa.querySelector("#remover").addEventListener('click',function(){
                removerTarefa(this);
            })

            //Ação de conclusão de tarefa

            novaTarefa.querySelector("#realizada").addEventListener("click",function(){
                concluirTarefa(this);
            })

        }else{
            alert('Escreva alguma coisa por favor');
        }
    }
}

document.addEventListener('keyup',adicionarTarefa);

// Definindo o foco no campo de entrada de texto ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const campo = document.getElementById('text-tarefa');
    campo.focus();
  });