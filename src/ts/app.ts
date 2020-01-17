const inputForm: HTMLElement = document.querySelector('#input-form')
const formTextfield: HTMLInputElement = document.querySelector('#form-textfield')
const formAddButton: HTMLInputElement = document.querySelector('#form-add-button')
const list: HTMLElement = document.querySelector('#list')

const handleSubmit = (e: any): void => {
  e.preventDefault()

  const itemName: string = formTextfield.value

  formTextfield.value = ''

  const item: string = createItem(itemName)

  addItem(item)

  bindEvents()
}

const addItem = (item: string): void => {
  list.insertAdjacentHTML('beforeend', item)
}

const createItem = (itemName: string): string => {
  const item: string = `
    <li class="list__item">
      <input type="checkbox" class="list__item-checkbox">
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

  } else if (target.classList.contains('list__item-delete-button')) {
    item.remove()
  }
}

const bindEvents = (): void => {
  const items: HTMLCollection = list.children

  Array.from(items).forEach(item => {
    item.removeEventListener('click', handleItemClick)
    item.addEventListener('click', handleItemClick)
  })
}

inputForm.addEventListener('submit', handleSubmit)
document.addEventListener("DOMContentLoaded", (e) => { 
  bindEvents()
})
