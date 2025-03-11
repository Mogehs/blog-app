import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import {
  createComment,
  deleteComment,
  editComment,
  getPostComments,
  getcomments,
  likeComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/get/:postId", getPostComments);
router.put("/like/:commentId", verifyToken, likeComment);
router.put("/edit/:commentId", verifyToken, editComment);
router.delete("/delete/:commentId", verifyToken, deleteComment);
router.get("/get", verifyToken, getcomments);

export default router;
