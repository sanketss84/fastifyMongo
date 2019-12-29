// Import our Controllers
const carController = require('../controllers/carController')
const bookmarkController = require('../controllers/bookmarkController')

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: carController.getSingleCar
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: carController.addCar,
    // schema: documentation.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.deleteCar
  },





  {
    method: 'GET',
    url: '/api/bookmarks',
    handler: bookmarkController.getBookmarks
  },
  {
    method: 'GET',
    url: '/api/bookmark/:id',
    handler: bookmarkController.getSingleBookmark
  },
  {
    method: 'POST',
    url: '/api/bookmark',
    handler: bookmarkController.addBookmark
  },
  {
    method: 'PUT',
    url: '/api/bookmark/:id',
    handler: bookmarkController.updateBookmark
  },
  {
    method: 'DELETE',
    url: '/api/bookmark/:id',
    handler: bookmarkController.deleteBookmark
  }  
]

module.exports = routes