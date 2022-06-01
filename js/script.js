//Função para adicionar uma tarefa;
const addTask = () => {
    //Pegando o titulo;
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {
        //Clonar o template(li);
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true); //cloneNode faz a clonagem de um elemento em uma variável;

        //Adiciona um titulo;
        newTask.querySelector(".task-title").textContent = taskTitle;

        //Removendo classes desnecessárias;
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //Adicionar uma tarefa na lista;
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        //Adicionar evento de remover;
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", () => {
            removeTask(newTask);
        });

        //Adicionar evento de completar tarefa;
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", () => {
            completeTask(newTask);
        });

        //Limpar texto;
        document.querySelector("#task-title").value = "";
    }
}

//Remover uma tarefa;
const removeTask = (task) => {
    task.remove()
}

//Completar uma tarefa;
const completeTask = (task) => {
    task.classList.toggle("done");
}

//Evento para adicionar uma tarefa;
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    addTask();
});