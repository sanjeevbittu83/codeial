const express= require('express');
const router= express.Router();
const homeConroller= require('../controllers/home_controller')



router.get('/',homeConroller.home);
router.use('/users',require('./users'));
 

module.exports=router;