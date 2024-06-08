import express from "express";
import { savePost, savedPost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", savePost);
router.get("/", savedPost);


export default router;