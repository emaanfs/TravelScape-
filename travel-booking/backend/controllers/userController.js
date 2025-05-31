import express from 'express';
import User from '../model/User.js'

// CREATE NEW User
export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();

        res.status(200).json({
            success: true, 
            message: "User created successfully", 
            data: savedUser,
        });

    } catch (err) { 
        res.status(500).json({
            success: false, 
            message: "Failed to create User"
        });
    }
};

// update User elements by id to the database
export const updateUser = async (req, res) => {
    const id= req.params.id;

    try{
        const updatedUser= await User.findByIdAndUpdate(
            id,
            {
                $set: req.body
            }, 
            {new: true}
        );

        res.status(200).json({
            success: true, 
            message: "User is updated successfully", 
            data: updatedUser,
        });

    } catch(err) {
        res.status(500).json({
            success: false, 
            message: "Failed to update User",
        });
    }
};

// delete User by id from the database
export const deleteUser = async (req, res) => {
    const id= req.params.id;

    try{
        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true, 
            message: "User is deleted successfully", 
        });

    } catch(err) {
        res.status(500).json({
            success: false, 
            message: "Failed to delete User",
        });
    }
};

// fetch individual User from mongoDB
// this is used to fetch a single User by id
export const getSingleUser = async (req, res) => {
    const id= req.params.id;

    try{
        const user = await User.findById(id);

        res.status(200).json({
            success: true, 
            message: "Successfully fetched the User", 
            data: user,
        });

    } catch(err) {
        res.status(404).json({
            success: false, 
            message: "fail to fetch the User",
        });
    }
};

// fetch all Users from the database
export const getAllUser = async (req, res) => {

    try{
        const users = await User.find({})

        res.status(200).json({
            success: true, 
            message: "Successful", 
            data: users,
        });

    } catch(err) {
        res.status(404).json({
            success: false, 
            message: "not found",
        });
    }
};