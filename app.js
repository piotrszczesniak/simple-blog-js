let toDoList = []
const input = document.querySelector('#input')
const toDoListElement = document.querySelector('.to-do-list')
const toDosDone = document.querySelector('.to-dos-done')
const filter = document.querySelector('#filter')

window.onload = function () {
    render()

    input.addEventListener('change', function (e) {
        addItem(e.target.value)
        const filteredItems = search(filter.value)

        render(filteredItems)
    })

    filter.addEventListener('keyup', function (e) {
        const filteredItems = search(e.target.value)

        render(filteredItems)
    })

    filter.addEventListener('search', function (e) {
        if (!e.target.value) {
            render()
        }
    })
}

// .sort() a-z

function search(value) {
    const inputValue = value.toLowerCase()
    const filteredItems = toDoList.filter((item) =>
        item.todo.toLowerCase().includes(inputValue)
    )

    return filteredItems
}

function addItem(todo) {
    const item = {
        todo,
        id: Math.ceil(Math.random() * 1000),
        done: false,
        date: '',
    }

    toDoList.push(item)
}

function markAsDone(item) {
    item.done = !item.done

    if (item.done) {
        item.date = new Date().toLocaleString()
    }

    render()
}

function remove(item) {
    event.preventDefault()
    toDoList = toDoList.filter((toDoItem) => toDoItem.id !== item.id)

    render()
}

function render(list = toDoList) {
    input.value = ''
    toDoListElement.innerHTML = ''

    list.forEach((item) => {
        const itemElement = `
          <li class='to-do-item'>
            ${
                !item.done
                    ? '<i class="bi bi-circle"></i>'
                    : '<i class="bi bi-check-circle"></i>'
            }${item.todo}
            ${item.done ? `<i class="remove bi bi-trash"></i>` : ''}
          </li>`
        toDoListElement.insertAdjacentHTML('beforeend', itemElement)

        const allItemElements = document.querySelectorAll('.to-do-item')
        const liElement = allItemElements[allItemElements.length - 1]
        const removeElement = liElement.querySelector('.remove')

        //removing item
        if (removeElement) {
            removeElement.addEventListener('click', function () {
                remove(item)
            })
        }

        //check or uncheck item
        liElement.addEventListener('click', function () {
            markAsDone(item)
        })

        if (item.done) {
            liElement.classList.add('to-do-item--done')
        }
    })

    const done = toDoList.filter(function (item) {
        return item.done === true
    })

    toDosDone.innerHTML = toDoList.length
        ? `No. of tasks done: <strong> ${done.length}</strong>.`
        : `<em>- What's your first task?</em>`
}

// turnary operator
// && ||s, falsy values in js
