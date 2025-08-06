import mongoose from "mongoose";

const url = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
      console.log("Already Connected");
      return;
    }

    if (connectionState === 2) {
      console.log("Connecting");
      return;
    }

    await mongoose.connect(url!, {
      dbName: "furniqo",
      bufferCommands: false,
    });

    console.log("Connected");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error", error);
      throw new Error("Error", error);
    } else {
      console.error("Unknown error Error", error);
      throw new Error("Unknow error occurred");
    }
  }
};

export default connectDB;
