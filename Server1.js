const express = require('express')
const app = express()
app.use(express.static('public'))
app.listen(200, () => { console.log('Server is running on port 200') })
