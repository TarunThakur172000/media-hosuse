// models/CustomQuote.js

import mongoose from "mongoose";

const CustomQuoteSchema = new mongoose.Schema(
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

    projectType: {
      type: String,
      required: true,
      trim: true,
    },

    details: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const CustomQuote =
  mongoose.models.CustomQuote ||
  mongoose.model("CustomQuote", CustomQuoteSchema);

export default CustomQuote;
