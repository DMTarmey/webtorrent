export default function throughput() {
  let total = 0
  let lastTime = Date.now()

  return function (bytes = 0) {
    const now = Date.now()
    const elapsed = now - lastTime
    lastTime = now
    total += bytes
    return total / (elapsed / 1000) // bytes per second
  }
}
