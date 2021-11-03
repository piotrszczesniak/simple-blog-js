// states
let toDoList = []
let sorted = false

// selectors
const inputElement = document.querySelector('#input')
const todoListElement = document.querySelector('.to-do-list')
const sortBtn = document.querySelector('#sort')
const searchBar = document.querySelector('.search-bar')

// execute
window.onload = function () {
    // add new task
    inputElement.addEventListener('change', (e) => addNewTask(e.target.value))

    // sort tasks
    sortBtn.addEventListener('click', () => sortTasks())

    // search tasks
    searchBar.addEventListener('input', (e) => {
        searchPhrase = e.target.value
        searchTasks(searchPhrase)
    })
}

// functions declaration

// search tasks
function searchTasks(searchPhrase) {
    let toDoListSearched = toDoList.filter(
        (item) => item.todo.includes(searchPhrase) === true
    )
    render(toDoListSearched)
}

function sortTasks() {
    sortBtn.innerHTML = `${sorted ? 'Sort A to Z' : 'Sort Z to A'}`
    toDoList.sort(function (a, b) {
        if (a.todo > b.todo) {
            return `${!sorted ? 1 : -1}`
        }
        if (a.todo < b.todo) {
            return `${!sorted ? -1 : 1}`
        }
        return 0
    })
    sorted = !sorted
    render()
}

// add new task
function addNewTask(inputValue) {
    todoListElement.innerHTML = ''
    let item = {
        todo: inputValue,
        id: Math.floor(Math.random() * 10000),
        done: false,
        removed: false,
        markDone: function () {
            this.done = !this.done
            render(toDoListSearched)
        },
        markRemoved: function () {
            this.removed = true
            render(toDoListSearched)
        },
    }
    toDoList.push(item)
    render()
}

// render
function render(list = toDoList) {
    // clear input and to do list
    inputElement.value = ''
    todoListElement.innerHTML = ''

    toDoListSearched = list.filter((item) => item.removed === false)

    toDoListSearched.forEach((item) => {
        todoListElement.insertAdjacentHTML(
            'beforeend',
            `<li class="${
                item.done ? 'to-do-item--done to-do-item' : 'to-do-item'
            }">
                    <i class="bi ${
                        item.done ? 'bi-check2-circle' : 'bi-circle'
                    }"></i>
                    <span class="to-do-item__text">${item.todo}</span>
                    <i class="bi bi-trash remove"></i>
            </li>`
        )

        // add click listeners to last li element
        let allLiElements = todoListElement.querySelectorAll('.to-do-item')
        let liElement = allLiElements[allLiElements.length - 1]

        // mark done
        liElement.addEventListener('click', () => item.markDone())

        // mark removed
        let removeElement = liElement.querySelector('.remove')
        removeElement.addEventListener('click', (e) => {
            e.stopPropagation()
            item.markRemoved()
        })
    })
}
