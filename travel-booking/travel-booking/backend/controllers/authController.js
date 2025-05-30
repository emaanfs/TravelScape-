import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// user registration
export const register = async (req, res) => {
    try {
        
        // password hidden in the database
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo,
        });

        await newUser.save();

        res
        .status(200).json({
            success: true,
            message: "Successfully registered",
        });

    } catch (err){
        console.error("REGISTRATION ERROR:", err);
        res
        .status(500).json({
            success: false,
            message: "Email or username already exists.",
        });
    }
};

// user login
export const login = async (req, res) => {

    const email = req.body.email;

    try {
        const user = await User.findOne({ email });

        // if user does not exist
        if(!user){
            return res
            .status(404).json({
                success: false,
                message: "User not found Please register",
            });
        }

        //is user exist then check and compare password from the database
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        if(!checkCorrectPassword){
            return res.status(401).json({
                success: false,
                message: "Incorrect password",
            });
        }    

        const { password, role, ...rest } = user._doc; // for preparing user info

        //create jwt token
        const token = jwt.sign(
            {id:user._id, role:user.role}, // to store info in the token
            process.env.JWT_SECRET_KEY, //secret Key for signing and verifying the token
            {expiresIn: "29d"} 
        );

        //set token in the browser cookies and send the response to the client
        res.
        cookie("accessToken", token,{ // setting the cookie
            httpOnly: true,
            expires: token.expiresIn
        })
        .status(200).json({
            token,
            data: { ...rest }, // wihtout password also send to response body
            role,
        });


    } catch (err){
        res.status(500).json({success: false, message: "Failed to login",
        });
    }
};