import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    adrres: {
      type: String,
      require: true,
    },
    departments: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
