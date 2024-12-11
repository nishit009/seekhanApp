import mongoose from "mongoose";

const input = mongoose.Schema(
  {
    promptInput: {
      type: String,
      required: [true, "Please enter the prompt"],
    },
    generatedAnswer: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const prompt = mongoose.model("Prompt", input, "prompts");
