const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')


// if we really wanted to clean up 4 lines so they are now 2 we could do this...
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)


router.get('/', protect, getGoals) 

router.post('/', protect, setGoal)

router.put('/:id', protect, updateGoal)

router.delete('/:id', protect, deleteGoal)


module.exports = router