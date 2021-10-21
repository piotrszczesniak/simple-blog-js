let toDoList = []

const inputElement = document.querySelector('#input')
const todoListElement = document.querySelector('.to-do-list')
const todoListItemElement = document.querySelector('to-do-item')

window.onload = function () {
    inputElement.addEventListener('change', (e) => {
        addNewTask(e.target.value)
    })
}

function addNewTask(inputValue) {
    todoListElement.innerHTML = ''
    let toDo = {
        todo: inputValue,
        id: Math.floor(Math.random() * 10000),
        done: false,
    }
    toDoList.push(toDo)
    render()
}

// function markDone() {

// }

function render() {
    inputElement.value = ''
    toDoList.forEach((item) => {
        todoListElement.insertAdjacentHTML(
            'beforeend',
            `<li class="${item.done ? 'to-do-item--done' : 'to-do-item'}">
                <i class="bi ${
                    item.done ? 'bi-check2-circle' : 'bi-circle'
                }"></i>
                <span class="to-do-item__text">${item.todo}</span>
                <i class="bi bi-trash remove"></i>
            </li>`
        )
        const allItems = document.querySelectorAll('to-do-item')
        allItems[toDoList.length - 1].addEventListener('click', function () {
            toDoList.length - 1
        })
    })
}
