import Booking from "../model/Booking.js";


// make new booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);   
    try{
        const savedBooking = await newBooking.save();

        res
        .status(200)
        .json({
            success: true, 
            message: "Congrats! Your Tour is booked", 
            data: savedBooking,
        });
    } catch (err) {
        res
        .status(500)
        .json({success: true, message: "Error!"
        });
    }
};

// for individual booking
export const getBooking = async(req, res) => {
    const id = req.params.id;

    try{
        const book = await Booking.findById(id);

        res
        .status(200)
        .json({
            success: true, 
            message: "individual booking Successful", 
            data: book,
        });

    } catch (err) {
        res
        .status(404)
        .json({success: true, message: "Error in individual booking"
        });
    }
};

// get all booking
export const getAllBooking = async( res) => {

    try{
        const books = await Booking.find();

        res.status(200).json({
            success: true, 
            message: "Successful booked", 
            data: books,
        });

    } catch (err) {
        res.status(500).json({
            success: true, 
            message: "error in all booking"
        });
    }
};