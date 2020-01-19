import EventEmitter from './EventEmitter'
import { stringifyItem } from './utils'

class View extends EventEmitter {
  inputForm: HTMLElement
  formTextfield: HTMLInputElement
  formAddButton: HTMLInputElement
  list: HTMLElement

  constructor() {
    super()

    this.inputForm = document.querySelector('#input-form')
    this.formTextfield = document.querySelector('#form-textfield')
    this.formAddButton = document.querySelector('#form-add-button')
    this.list = document.querySelector('#list')

    this.inputForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const itemName = this.formTextfield.value.trim()

      if (itemName) {
        this.formTextfield.value = ''

        this.emit('addItem', { itemName })
      }
    })

    window.addEventListener("DOMContentLoaded", () => this.emit('handleLoad', {}))
    window.addEventListener('beforeunload', () => this.emit('handleUnload', {}))
  }

  renderItems(items: any[]): void {
    this.list.innerHTML = ''

    items.forEach(item => {
      this.list.insertAdjacentHTML('beforeend', stringifyItem(item))
    })
    
    this.bindEvents()
  }
  bindEvents(): void {
    const items: HTMLCollection = this.list.children

    Array.from(items).forEach(item => {
      const itemTextfield = item.querySelector('.list__item-textfield')

      itemTextfield.removeEventListener('blur', this.itemEdited.bind(this))
      itemTextfield.addEventListener('blur', this.itemEdited.bind(this))

      itemTextfield.removeEventListener('keypress', this.itemEdited.bind(this))
      itemTextfield.addEventListener('keypress', this.itemEdited.bind(this))

      item.removeEventListener('click', this.itemClicked.bind(this))
      item.addEventListener('click', this.itemClicked.bind(this))
    })
  }
  itemEdited(e: any): void {
    const target: HTMLInputElement = e.target
    const item: HTMLElement = target.parentElement
    const itemName: string = target.value

    if (e.type === 'keypress' && e.keyCode === 13) {
      target.blur()
    } else if (e.type === 'blur') {
      this.emit('editItem', { item, itemName })
    }
  }
  itemClicked(e: any): void {
    e.stopPropagation()

    const target: HTMLElement = e.target
    const item: HTMLElement = target.parentElement

    if (target.classList.contains('list__item-checkbox')) {
      this.emit('completeItem', { item })
    } else if (target.classList.contains('list__item-delete-button')) {
      this.emit('deleteItem', { item })
    }
  }
}

export default View
