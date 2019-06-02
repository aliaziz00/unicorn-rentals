const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000

const unicornsModel = require('./models/unicorns')

const app = express()

app.use(express.json())
app.use(cors())
app.set('port', port)

app.get('/healthz', () => console.log('  service is running'))
app.post('/unicorns/rentals', unicornsModel.rentUnicorn)
app.post('/unicorns/returns', unicornsModel.returnUnicorn)

app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  )
  console.log('  Press CTRL-C to stop\n')
})

module.exports = app
