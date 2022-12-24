const express = require('express')
const app = express()
// const i18next = require('i18next');
// const i18nextMiddleware = require('i18next-express-middleware');
// const Backend = require('i18next-node-fs-backend');
const router = express.Router()

app.use((req, res, next) => {
  req.sahl = 'sahl'
  next()
});

app.use('', router)

router.get('/', (req, res, next) => {
  console.log(req.sahl)
  // res.send('hello')
  next()
})

const getAge = () => {
  console.log('inside getAge fn')
  return (req, res, next) => {
    console.log('2222222')
    res.send('hello')
  }
}

const getAgeMiddleware = getAge()

router.use(getAgeMiddleware)

app.listen(4321,()=> console.log('app started on port 4321'))