class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    view.on('addItem', this.addItem.bind(this))
    view.on('deleteItem', this.deleteItem.bind(this))
    view.on('completeItem', this.completeItem.bind(this))
    view.on('editItem', this.editItem.bind(this))
    view.on('handleLoad', this.handleLoad.bind(this))
    view.on('handleUnload', this.handleUnload.bind(this))
  }
  
  addItem({ itemName }) {
    const item = { itemName, id: Math.random(), completed: false }
    
    this.model.addItem(item)

    this.renderItems()
  }
  handleLoad() {
    this.model.storeItemsFromLocalstorage()
    this.renderItems()
  }
  handleUnload() {
    this.model.storeItemsToLocalstorage()
  }
  deleteItem({ item }) {
    this.model.deleteItem(item)
    this.renderItems()
  }
  completeItem({ item }) {
    this.model.completeItem(item)
    this.renderItems()
  }
  editItem({ item, itemName }) {
    this.model.editItem(item, itemName)
  }
  renderItems() {
    const items = this.model.getItems()
    this.view.renderItems(items)
  }
}

export default Controller
