const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const categoryController = require('../../controllers/category-controller')
const upload = require('../../middleware/multer')
// categories
router.get('/categories', categoryController.getCategories)

router.post('/categories', categoryController.postCategory)

router.get('/categories/:id', categoryController.getCategories)

router.put('/admin/categories/:id', categoryController.putCategory)
// restaurants
router.get('/restaurants/create', adminController.createRestaurants)

router.get('/restaurants/:restId/edit', adminController.editRestaurants)

router.put('/restaurants/:restId', upload.single('image'), adminController.putRestaurants)

router.get('/restaurants/:restId', adminController.getRestaurant)

router.get('/restaurants', adminController.getRestaurants)

router.post('/restaurants', upload.single('image'), adminController.postRestaurants)

router.get('/', (req, res) => {
  res.redirect('/admin/restaurants')
})
router.delete('/restaurants/:restId', adminController.deleteRestaurant)

// users
router.patch('/users/:id', adminController.patchUser)

router.get('/users', adminController.getUsers)

module.exports = router
