import mongoose from "mongoose";

const connectDB = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already Connected");
  }

  if (connectionState === 2) {
    console.log("Connecting ....");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "furniqo",
      bufferCommands: true,
    });

    console.log("Connected");
  } catch (error: any) {
    console.log("error", error);
    throw new Error("Error", error);
  }
};

export default connectDB;
