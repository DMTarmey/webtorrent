export default function parseInput(input, opts, callback) {
  // Placeholder implementation
  const files = input.map(item => ({
    getStream: () => item,
    name: item.name || 'unknown'
  }))
  callback(null, files)
}
