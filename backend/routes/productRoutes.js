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


router
    .route('/')
    .get(getProducts)
    .post(protect, admin, createProducts);

router
    .get('/top',getTopProducts);

router
    .route('/:id')
    .get(getProductById)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct);

router
    .route('/:id/reviews')
    .post(protect, createProductReview);

export default router;