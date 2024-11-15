import { EventEmitter } from 'events'

export default class DHT extends EventEmitter {
  constructor (options = {}) {
    super()
    this.nodeId = options.nodeId || null
    this.port = options.port || 0
  }

  address() {
    return { port: this.port }
  }

  listen(port) {
    this.port = port
    this.emit('listening')
  }

  destroy(callback) {
    this.emit('destroy')
    if (callback) callback()
  }
}
