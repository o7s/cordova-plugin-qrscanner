const path = require('path')

module.exports = {
  entry: {
    worker: path.join(__dirname, './src/browser/src/worker.js')
  },
  output: {
    path: path.join(__dirname, './src/browser'),
    filename: 'worker.min.js'
  }
}
