const mongoose = require('./connection')
const seedData = require('./seeds.json')

var Author = mongoose.model('Author')


Author.remove({}).then(() => {
  Author.collection.insert(seedData).then(() => {
    console.log('done with seeds')
    process.exit()
  })
})
