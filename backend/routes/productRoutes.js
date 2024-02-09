import express from "express";
const router = express.Router();
import { 
    getProductById, 
    getProducts,
    createProducts, 
    updateProduct,
    deleteProduct,
    createProductReview,
    getTopProducts,
} from "../controllers/productController.js";
import mongoose from "mongoose";
import {protect, admin} from '../middleware/loginMiddleware.js'
import checkObjectId from "../middleware/checkObjectId.js";


router
    .route('/')
    .get(getProducts)
    .post(protect, admin, createProducts);

router
    .get('/top',getTopProducts);

router
    .route('/:id')
    .get(getProductById, checkObjectId)
    .put(protect, admin, checkObjectId,updateProduct)
    .delete(protect, admin,checkObjectId, deleteProduct);

router
    .route('/:id/reviews')
    .post(protect, checkObjectId, createProductReview);

export default router;