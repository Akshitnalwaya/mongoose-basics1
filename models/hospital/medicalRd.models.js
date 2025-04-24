import mongoose from "mongoose";

const medicalrdschema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    adrres: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const medicalrd = mongoose.model("MedicalRd", medicalrdschema);
