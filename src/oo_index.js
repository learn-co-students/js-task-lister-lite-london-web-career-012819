
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

const inputEl = document.getElementById('new-task-description')
let counter = 1;  
function addTask(){
  document.addEventListener('submit', function(event){
    event.preventDefault();
    let task = inputEl.value
    let listItem = document.createElement('li')
    listItem.innerText = task
    listItem.id = `list-${counter}`
    let tasks = document.getElementById('tasks')
    let deleteEl = document.createElement('button')
    deleteEl.innerText = 'X'
    deleteEl.id = counter
    
    tasks.appendChild(listItem).appendChild(deleteEl)
    inputEl.value = ''
    deleteEl.addEventListener('click', event => {
      let item = document.getElementById(`list-${event.target.id}`)
    item.remove()
    })

    counter ++
  })
}

function deleteTask(){
  
}

addTask()