import express from 'express'
import Log from 'log'

import routes from './routes'

const app = express()
const log = new Log('info')
const PORT = 8080

app.use(routes)

app.listen(process.env.PORT || PORT, () => {
  log.info(`Server started on port :${process.env.PORT || PORT}`)
})