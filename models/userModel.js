import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    // here any user can both organize and attend events, pachi if time remains, we can make separate roles for organizers and attendees
    eventsCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event", // Reference to events created by the user
      },
    ],
    eventsRegistered: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event", // Events that the user has registered for
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
