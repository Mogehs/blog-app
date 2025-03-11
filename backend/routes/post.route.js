import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import {
  create,
  deletepost,
  getposts,
  updatePost,
} from "../controllers/post.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/create", verifyToken, singleUpload.single("blog-photo"), create);
router.get("/get", getposts);
router.delete("/delete/:postId", verifyToken, deletepost);
router.put(
  "/update/:postId",
  verifyToken,
  singleUpload.single("image"),
  updatePost
);

export default router;
