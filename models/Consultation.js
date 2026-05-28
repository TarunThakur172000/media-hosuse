// models/Consultation.js

import mongoose from "mongoose";

const ConsultationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    company: {
      type: String,
      trim: true,
    },

    service: {
      type: String,
      trim: true,
    },

    budget: {
      type: String,
      trim: true,
    },

    preferredDate: {
      type: String,
    },

    timezone: {
      type: String,
    },

    callWindow: {
      type: String,
    },

    projectDetails: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Consultation =
  mongoose.models.Consultation ||
  mongoose.model("Consultation", ConsultationSchema);

export default Consultation;
