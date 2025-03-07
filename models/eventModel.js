import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to a User model (if events are organized by users)
      required: true,
    },
    category: {
      type: String,
      enum: ["Conference", "Workshop", "Party", "Festival"], // Example categories
      required: true,
    },
    ticketPrice: {
      type: Number,
      default: 0,
    },
    ticketsAvailable: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String, // URL to an image for the event
      default: "default-image.jpg",
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
