class Model {
  storage: any[]

  constructor() {
    this.storage = []
  }

  storeItemsToLocalstorage(): void {
    localStorage.setItem('items', JSON.stringify(this.storage))
  }
  storeItemsFromLocalstorage() {
    const items: any[] = JSON.parse(localStorage.getItem('items'))
  
    this.storage = items
  }
  addItem(item: object): void {
    this.storage.push(item)
  }
  getItems(): object[] {
    return this.storage
  }
  deleteItem(item: object): void {
    this.storage = this.storage.filter(storedItem => storedItem.id !== +item.id)
  }
  completeItem(item: any): void {
    this.storage = this.storage.map(storedItem => {
      if (storedItem.id === +item.id) {
        storedItem.completed = !storedItem.completed
      }
      return storedItem
    })
  }
}

export default Model