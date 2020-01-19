class Controller {
  model: any
  view: any

  constructor(model, view) {
    this.model = model
    this.view = view

    view.on('addItem', this.addItem.bind(this))
    view.on('deleteItem', this.deleteItem.bind(this))
    view.on('completeItem', this.completeItem.bind(this))
    view.on('handleLoad', this.handleLoad.bind(this))
    view.on('handleUnload', this.handleUnload.bind(this))
  }
  
  addItem({ itemName }): void {
    const item: object = { itemName, id: Math.random(), completed: false }
    
    this.model.addItem(item)

    this.renderItems()
  }
  handleLoad(): void {
    this.model.storeItemsFromLocalstorage()
    this.renderItems()
  }
  handleUnload(): void {
    this.model.storeItemsToLocalstorage()
  }
  deleteItem({ item }): void {
    this.model.deleteItem(item)
    this.renderItems()
  }
  completeItem({ item }): void {
    this.model.completeItem(item)
    this.renderItems()
  }
  renderItems(): void {
    const items = this.model.getItems()
    this.view.renderItems(items)
  }
}

export default Controller
