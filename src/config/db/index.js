import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/thuan");

    console.log("connect Successfully");
  } catch (error) {}
}

export { connect };
