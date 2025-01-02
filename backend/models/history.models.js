import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referencing User model
    required: true,
  },
  historyRes:{
    type:Array,
    required:true
  }
});

export const HistoryModel=mongoose.model("HistoryModel",HistorySchema)