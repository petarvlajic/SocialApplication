import express from 'express';
const  { registerUser, deleteUser } = require('../controllers/auth');

const router = express.Router({})

router.post('/register', registerUser);
router.delete('/delete/:id', deleteUser)

module.exports = router;