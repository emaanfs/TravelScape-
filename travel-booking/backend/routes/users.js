import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

// update new user or its elements
router.put("/:id", verifyUser, updateUser); 

// delete a user or its elements
router.delete("/:id", verifyUser, deleteUser); 

// get a single user by id 
router.get("/:id", verifyUser ,getSingleUser); 

// get all users
router.get("/", verifyAdmin, getAllUser); 

export default router;