const express = require('express')
const router  = express.Router()
const TaskController  = require('../controller/TaskController')
const TaskValidation = require('../middlewares/TaskValidation')
const MacaddressValidation = require('../middlewares/MacaddressValidation')

router.post('/', TaskValidation,  TaskController.create)

router.put('/:id',TaskValidation, TaskController.update)
router.put('/:id/:done', TaskController.done)

router.get('/filter/all/:macaddress', TaskController.all)
router.get('/:id', TaskController.show)
router.get('/filter/late/:macaddress',  TaskController.late)
router.get('/filter/today/:macaddress',  TaskController.today)
router.get('/filter/week/:macaddress',  TaskController.week)
router.get('/filter/month/:macaddress',  TaskController.month)
router.get('/filter/year/:macaddress', TaskController.year)

router.delete('/:id', TaskController.delete)


module.exports = router