class Todo {
  constructor() {
    this.totalTask = document.querySelectorAll(".task").length;
  }

  addTask(taskText) {
    //clona o template
    let template = document.querySelector(".task").cloneNode(true);
    //remove classe hide
    template.classList.remove("hide");
    //manipula texto
    let templateText = template.querySelector(".task-title");
    templateText.textContent = taskText;

    let list = document.querySelector("#task-container");

    //inserir na lista
    list.appendChild(template);

    //adiciona evento as task
    this.addEvents();

    this.checkTasks("add");
  }

  removeTask(task) {
    //achar elemento
    let parentEl = task.parentElement;

    //remove da lista
    parentEl.remove();

    this.checkTasks("remove");
  }

  completeTask(task) {
    //adiciona classe done
    task.classList.add("done");
  }

  addEvents() {
    let removeBtns = document.querySelectorAll(".fa-trash");
    let removeBtn = removeBtns[removeBtns.length - 1];
    let doneBtns = document.querySelectorAll(".fa-check");
    let doneBtn = doneBtns[doneBtns.length - 1];

    //adiciona evento de remover
    removeBtn.addEventListener("click", function () {
      todo.removeTask(this);
    });

    //adicionar evento de completar tarefa
    doneBtn.addEventListener("click", function () {
      todo.completeTask(this);
    });
  }

  checkTasks(command) {
    let msg = document.querySelector("#empty-tasks");

    //lógica de adicionar ou remover task
    if (command === "add") {
      this.totalTask += 1;
    } else if (command === "remove") {
      this.totalTask -= 1;
    }

    //checa se tem mais de uma task e adiciona ou remove a classe
    if (this.totalTask == 1) {
      msg.classList.remove("hide");
    } else {
      msg.classList.add("hide");
    }
  }
}

let todo = new Todo();

//events
let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let taskText = document.querySelector("#task");

  if (taskText.value != "") {
    todo.addTask(taskText.value);
  }

  //limpar campo de texto
  taskText.value = "";
});
