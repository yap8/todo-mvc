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

      const itemName = this.formTextfield.value
      this.formTextfield.value = ''

      this.emit('addItem', { itemName })
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
      item.removeEventListener('click', this.itemClicked.bind(this))
      item.addEventListener('click', this.itemClicked.bind(this))
    })
  }
  itemClicked(e): void {
    e.stopPropagation()

    const target: HTMLElement = e.target
    const item: HTMLElement = target.parentElement

    this.emit('itemClicked', { target, item })
  }
}

export default View
