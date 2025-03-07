import express from "express";
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";

const router = express.Router();

// Get all event posts
router.get("/", getAllEvents);

//Get individual event post
router.get("/:id", getEventById);

// Create a new event post
router.post("/", createEvent);

// Update an event post
router.put("/:id", updateEvent);

// Delete an event post
router.delete("/:id", deleteEvent);

export default router;
