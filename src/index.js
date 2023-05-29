document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    buildNewTask(e.target.new_task_description.value)
    form.reset()
  })

});

function buildNewTask(newTask){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = "x"
  li.textContent = `${newTask} `
  li.appendChild(btn)
  document.getElementById('tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}