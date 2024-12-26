import { Router } from "express";
import {
    getUserInfo,
    login,
    signup,
    updateProfile,
    addProfileImage,
    removeProfileImage,
    logout,
} from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import multer from "multer";

const authRoute = Router();
const upload = multer({ dest: "uploads/profiles/" });

authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.get('/user-info', verifyToken, getUserInfo);
authRoute.post('/update-profile', verifyToken, updateProfile);
authRoute.post(
    "/add-profile-image",
    verifyToken,
    upload.single("profile-image"),
    addProfileImage
);
authRoute.delete("/remove-profile-image", verifyToken, removeProfileImage)
authRoute.post("/logout", logout);

export default authRoute;