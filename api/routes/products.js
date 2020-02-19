const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const ProductsController = require('../controllers/productController');

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads/');
  },
  filename: function(req, file, callback) {
    callback(null, new Date().toISOString() +"_"+ file.originalname);
  }
});

const filterFile = (req, file, callback) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: filterFile
});

// get All products
router.get("/", ProductsController.products_get_all);

  // Add product
router.post('/', checkAuth, upload.single('productImage'), ProductsController.products_create_product);

// get product
router.get('/:productId', ProductsController.products_get_product);

// Update product
router.patch('/:productId', checkAuth, ProductsController.products_update_product);

// Delete product
router.delete('/:productId', ProductsController.products_delete);

module.exports = router;