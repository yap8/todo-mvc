const inputForm: HTMLElement = document.querySelector('#input-form')
const formTextfield: HTMLInputElement = document.querySelector('#form-textfield')
const formAddButton: HTMLInputElement = document.querySelector('#form-add-button')
const list: HTMLElement = document.querySelector('#list')

const handleSubmit = (e: any): void => {
  e.preventDefault()

  const itemName: string = formTextfield.value

  const item: string = createItem(itemName)

  addItem(item)
}

const addItem = (item: string): void => {
  list.insertAdjacentHTML('beforeend', item)
}

const createItem = (itemName: string) => {
  const item: string = `
    <li class="list__item">
      <input type="checkbox" class="list__item-checkbox">
      <input type="text" class="list__item-textfield" value="${itemName}">
      <button class="list__item-delete-button">Delete</button>
    </li>
  `

  return item
}

inputForm.addEventListener('submit', handleSubmit)
