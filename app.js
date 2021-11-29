window.addEventListener("load", () => {
    const taskInput = document.getElementById("task-input");
    const taskForm = document.getElementById("task-form");
    const task = document.querySelector("#tasks");

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskValue = taskInput.value;
        
        if(!taskValue) {
            alert("Please fill out the task!!");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content = document.createElement("div");
        task_content.classList.add("content");

        task_el.appendChild(task_content);
        task.appendChild(task_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = 'text';
        task_input_el.value = taskValue;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content.appendChild(task_input_el);

        const task_action = document.createElement("div");
        task_action.classList.add("actions");

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = `<i class="fas fa-edit"></i>`;

        task_action.appendChild(task_edit);

        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML = `<i class="fas fa-trash"></i>`;

        task_action.appendChild(task_delete);   
        
        task_el.appendChild(task_action);

        taskInput.value = '';

        task_edit.addEventListener("click", (e) => {
            if(task_edit.innerHTML == `<i class="fas fa-edit"></i>`) {
                task_edit.innerText = 'Save';
                task_input_el.removeAttribute('readonly', 'readonly');
                task_input_el.focus();
            } else {
                task_edit.innerHTML = `<i class="fas fa-edit"></i>`;
                task_input_el.setAttribute('readonly', 'readonly');
            }

        });

        task_delete.addEventListener("click", (e) => {
            task.removeChild(task_el);
        })
    })
})
