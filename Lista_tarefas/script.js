//funcão que adiciona uma tarefa

function addtask(){
    //titulo da tarefa
    const title = document.querySelector('#tarefa').value

    if(title){
    //clonando o template

    const template = document.querySelector('.template')

    const newTask = template.cloneNode(true)

    //add title
    newTask.querySelector('.task-title').textContent = title

    //removendo as classes
    newTask.classList.remove("template")
    newTask.classList.remove("hide")

    //Adicionando na lista

    const lista = document.querySelector(".task-list")
    
    lista.appendChild(newTask)

    //ação de remover tarefa

    const remover = newTask.querySelector('.removido').addEventListener('click',function(){
        removerTarefa(this);
    })

    //Ação de concluir tarefa

    const taskfinalizada = newTask.querySelector('.concluido').addEventListener('click',function(){
        concluirTarefa(this);
    })

    //limpando campo
    document.querySelector('#tarefa').value = ''
}
}

//funcao de remover tarefa

function removerTarefa(task){
    task.parentNode.remove(true)
    
}

//funcao de concluir tarefa

function concluirTarefa(task){
    const taskComplete = task.parentNode

    taskComplete.classList.toggle("done")
}


//Adicionando eventos

const addbotao = document.querySelector('#botao')


addbotao.addEventListener('click',function(){
    addtask()
})