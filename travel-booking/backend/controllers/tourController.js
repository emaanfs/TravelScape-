
import Tour from '../model/Tour.js'

// CREATE NEW TOUR
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res.status(200).json({
            success: true, 
            message: "Tour created successfully", 
            data: savedTour,
        });

    } catch (err) { 
        res.status(500).json({
            success: false, 
            message: "Failed to create tour"
        });
    }
};

// update tour elements by id to the database
export const updateTour = async (req, res) => {
    const id= req.params.id;

    try{
        const updatedTour = await Tour.findByIdAndUpdate(id,{
            $set: req.body
        }, {new: true});

        res.status(200).json({
            success: true, 
            message: "Tour is updated successfully", 
            data: updatedTour,
        });

    } catch(err) {
        res.status(500).json({
            success: false, 
            message: "Failed to update tour",
        });
    }
};

// delete tour by id from the database
export const deleteTour = async (req, res) => {
    const id= req.params.id;

    try{
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success: true, 
            message: "Tour is deleted successfully", 
        });

    } catch(err) {
        res.status(500).json({
            success: false, 
            message: "Failed to delete tour",
        });
    }
};

// fetch individual tour from mongoDB
// this is used to fetch a single tour by id
export const getSingleTour = async (req, res) => {
    const id= req.params.id;

    try{
        const tour = await Tour.findById(id).populate("reviews");

        res.status(200).json({
            success: true, 
            message: "Successfully fetched the tour", 
            data: tour,
        });

    } catch(err) {
        res.status(404).json({
            success: false, 
            message: "fail to fetch the tour",
        });
    }
};

// fetch all tours from the database
export const getAllTour = async (req, res) => {

    // for pagination
    const page = parseInt(req.query.page);

   //for testing purposes 
   // console.log(page);

    try{
        const tours = await Tour.find({})
            .populate("reviews")
            .skip(page * 8)
            .limit(8);

        res.status(200).json({
            success: true, 
            count: tours.length,
            message: "Successful", 
            data: tours,
        });

    } catch(err) {
        res.status(404).json({
            success: false, 
            message: "not found",
        });
    }
};

// fetch tours by search/search bar from mongoDB
// this is used to search for tours by city, distance and maxGroupSize
export const getTourBySearch = async (req, res) => {

    const city = new RegExp(req.query.city, "i"); // case insensitive
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);


    try{
        // gte is greater than or equal to
        const tours = await Tour.find({
            city,
            distance:{$gte: distance},
            maxGroupSize:{$gte: maxGroupSize},
        }).populate("reviews");

        res.status(200).json({
            success: true, 
            message: "Search successful ", 
            data: tours,
        });
            

    } catch(err) {
        res.status(404).json({
            success: false, 
            message: "Search not found",
        });
    }
};

// fetch featured tours in database
export const getFeatureTour = async (req, res) => {


    try{
        const tours = await Tour.find({featured: true})
        .populate("reviews")
        .limit(8);

        res.status(200).json({
            success: true, 
            message: "Successful", 
            data: tours,
        });

    } catch(err) {
        res.status(404).json({
            success: false, 
            message: "not found",
        });
    }
};

// fetch total number of tours in database
export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();

        res.status(200).json({
            success: true, 
            data: tourCount,
        });

    } catch (err) {
        res.status(500).json({
            success: false, 
            message: "Failed to fetch tour count",
        });
    }
};