import express from 'express';
import { 
    createTour, 
    deleteTour, 
    getAllTour, 
    getSingleTour, 
    updateTour, 
    getTourBySearch, 
    getFeatureTour,
    getTourCount} from '../controllers/tourController.js'
import { verifyAdmin }  from '../utils/verifyToken.js';


const router = express.Router();

// create new tour 
router.post("/", verifyAdmin, createTour); 

// update new tour or its elements
router.put("/:id", verifyAdmin, updateTour); 

// delete a tour or its elements
router.delete("/:id", verifyAdmin, deleteTour); 

// get a single tour by id 
router.get("/:id", getSingleTour); 

// get all tour 
router.get("/", getAllTour); 

// get tours by search
router.get("/search/getTourBySearch", getTourBySearch);

// fetch featured tours by search
router.get("/search/getFeaturedTours", getFeatureTour);

// fetch total number of tours from the db
router.get("/search/getTourCount", getTourCount);


export default router;