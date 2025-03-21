import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  signin,
  signout,
  signup,
  updateUser,
} from "../controllers/user.controller.js";
import { singleUpload } from "../middlewares/multer.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.route("/sign-up").post(signup);
userRouter.route("/sign-in").post(signin);
userRouter
  .route("/update")
  .post(verifyToken, singleUpload.single("profile-pic"), updateUser);
userRouter.route("/sign-out").post(verifyToken, signout);
userRouter.route("/get").get(verifyToken, getUser);
userRouter.route("/get/all").get(verifyToken, getUsers);
userRouter.route("/delete/:id").delete(verifyToken, deleteUser);

export default userRouter;
