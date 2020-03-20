class Model {
  constructor() {
    this.storage = []
  }

  storeItemsToLocalstorage() {
    localStorage.setItem('items', JSON.stringify(this.storage))
  }
  storeItemsFromLocalstorage() {
    const items = JSON.parse(localStorage.getItem('items')) || []
  
    this.storage = items
  }
  addItem(item) {
    this.storage.push(item)
  }
  getItems() {
    return this.storage
  }
  deleteItem(item) {
    this.storage = this.storage.filter(storedItem => storedItem.id !== +item.id)
  }
  completeItem(item) {
    this.storage = this.storage.map(storedItem => {
      if (storedItem.id === +item.id) {
        storedItem.completed = !storedItem.completed
      }
      return storedItem
    })
  }
  editItem(item, itemName) {
    this.storage = this.storage.map(storedItem => {
      if (storedItem.id === +item.id) {
        storedItem.itemName = itemName
      }
      return storedItem
    })
  }
}

export default Model
