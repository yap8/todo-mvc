const inputForm: HTMLElement = document.querySelector('#input-form')
const formTextfield: HTMLInputElement = document.querySelector('#form-textfield')
const formAddButton: HTMLInputElement = document.querySelector('#form-add-button')
const list: HTMLElement = document.querySelector('#list')

let storage: any[] = []

const handleSubmit = (e: any): void => {
  e.preventDefault()

  const itemName: string = formTextfield.value

  formTextfield.value = ''

  const item: object = { itemName, id: Math.random(), completed: false }

  addItem(item)

  bindEvents()
}

const addItem = (item: object): void => {
  storage.push(item)
  renderItems()
}

const createItem = ({ itemName, id, completed }): string => {
  const item: string = `
    <li class="list__item" id="${id}">
      <button class="list__item-checkbox ${completed ? 'list__item-checkbox--active' : ''}"}>&check;</button>
      <input type="text" class="list__item-textfield" value="${itemName}">
      <button class="list__item-delete-button">Delete</button>
    </li>
  `

  return item
}

const handleItemClick = (e: any): void => {
  e.stopPropagation()
  
  const target: HTMLElement = e.target
  const item: HTMLElement = target.parentElement

  if (target.classList.contains('list__item-checkbox')) {
    storage = storage.map(storedItem => {
      if (storedItem.id === +item.id) {
        storedItem.completed = !storedItem.completed
      }
      return storedItem
    })
    renderItems()
  } else if (target.classList.contains('list__item-delete-button')) {
    storage = storage.filter(storedItem => storedItem.id !== +item.id)
    renderItems()
  }
}

const bindEvents = (): void => {
  const items: HTMLCollection = list.children

  Array.from(items).forEach(item => {
    item.removeEventListener('click', handleItemClick)
    item.addEventListener('click', handleItemClick)
  })
}

const renderItems = (): void => {
  list.innerHTML = ''

  storage.forEach(storedItem => {
    const item: string = createItem(storedItem)

    list.insertAdjacentHTML('beforeend', item)
  })
  
  bindEvents()
}

const storeItems = (): void => {
  localStorage.setItem('items', JSON.stringify(storage))
}

const getStoredItems = (): any[] => {
  const items: string = localStorage.getItem('items')

  return JSON.parse(items)
}

inputForm.addEventListener('submit', handleSubmit)

window.addEventListener("DOMContentLoaded", (e) => {
  storage = getStoredItems() || []
  renderItems()
})
window.addEventListener('beforeunload', () => {
  storeItems()
  return null
})
