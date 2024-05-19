import mongoose from 'mongoose';

const FireReportSchema = new mongoose.Schema(
  {
    location: {
      type: {
        street: String,
        house: String,
        apartment: String,
      },
      required: true,
    },
    dangerLevel: {
      type: String,
      required: true,
    },
    areaSize: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    resources: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FireResource',
        required: true,
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('FireReport', FireReportSchema);
