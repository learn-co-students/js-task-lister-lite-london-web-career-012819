const ulEl = document.getElementById('tasks')

function toDoList() {
  document.getElementById('create-task-form').addEventListener('submit', event => {
    event.preventDefault()
    let task = document.getElementById('new-task-description').value
    const li = document.createElement('li')
    li.dataset.id = ulEl.childElementCount + 1
    let text = document.createTextNode(task)
    li.appendChild(text)
    addBtnToList(li)
    ulEl.appendChild(li)
  })
}

function addBtnToList(li) {
  btn = document.createElement('button')
  btn.innerText = 'X'
  btn.dataset.id = "button" + li.dataset.id
  btn.className = "remove-button"
  li.appendChild(btn)
  btn.addEventListener('click', () => {
    btn.parentElement.remove()
  })
}

toDoList()
