import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// GLOBAL CACHE
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

async function connectDB() {
  // RETURN EXISTING CONNECTION
  if (cached.conn) {
    return cached.conn;
  }

  // CREATE NEW CONNECTION
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;

    console.log("MongoDB Connected");

    return cached.conn;
  } catch (error) {
    cached.promise = null;

    console.error(error);

    throw error;
  }
}

export default connectDB;
