class TaskList {

    getDesc() {
         const d = document.querySelector("#new-task-description");
        return d;
    }

    getSubmit() {
        const submitBtn = document.querySelector("#submit-btn");
        return submitBtn;
    }

    resetForm() {
        const form = document.querySelector("#create-task-form")
        return form.reset();
    }

    addDescEvent(){ 
        this.getSubmit().addEventListener("click", event => {
            event.preventDefault();
            
            const desc = this.getDesc();
            const task = new Task(desc.value);
            this.createTask(task)
            this.resetForm();
    })
    }
    createTask(task){

        const taskEl = document.querySelector("#tasks");
        let list = document.createElement("li");
        list.innerText = task.desc
        taskEl.appendChild(list)

        this.createDeleteButton(list)
    }

    createDeleteButton(list){
        let button = document.createElement("button");
        button.addEventListener("click", function(e) {
            e.target.parentElement.remove()
        })
        button.innerText = "X"
        list.appendChild(button)
    }

   
}


