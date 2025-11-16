const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController');


// get requests
router.get('/', userController.user_index_get);


// view and edit with id
router.get("/view/:id", userController.user_view_get);


router.get("/edit/:id", userController.user_edit_get);


// delete with id
router.delete("/edit/:id", userController.user_delete);

// put requests
router.put("/edit/:id", userController.user_put);



// search post request
router.post('/user/search', userController.user_search_post);


module.exports = router