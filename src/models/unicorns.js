// crud unicorn.
const Unicorn = require('./unicorn')
const unicornData = require('../unicornData')

// create instances of unicorns
const unicorns = []
unicornData.forEach(unicorn => unicorns.push(new Unicorn(unicorn)))

// function to rent unicorn
function rentUnicorn (req, res, next) {
  const requestedUnicorn = req.body.unicornName

  const unicorn = unicorns.find(unicorn => unicorn.name === requestedUnicorn)

  if (unicorn) {
    unicorn.rent()
  } else {
    console.log('  unicorn not found')
  }
}

// function to return unicorn
function returnUnicorn (req, res, next) {
  const returningUnicorn = req.body.unicornName

  const unicorn = unicorns.find(unicorn => unicorn.name === returningUnicorn)

  if (unicorn) {
    unicorn.return()
    // activate rest period
    unicorn.triggerRest()
  } else {
    console.log('   unicorn not found')
  }
}

module.exports = {
  rentUnicorn,
  returnUnicorn
}
