class EventEmitter {
  events: object

  constructor() {
    this.events = {}
  }
  on(type: string, listener: object): void {
    this.events[type] = this.events[type] || []
    this.events[type].push(listener)
  }
  emit(type: string, arg: object): void {
    if (this.events[type]) {
      this.events[type].forEach(listener => listener(arg))
    }
  }
}

export default EventEmitter
