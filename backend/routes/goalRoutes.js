const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')


// if we really wanted to clean up 4 lines so they are now 2 we could do this...
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)


router.get('/', getGoals) 

router.post('/', setGoal)

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)


module.exports = router